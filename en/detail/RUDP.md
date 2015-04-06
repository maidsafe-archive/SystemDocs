## RUDP Overview

RUDP (Reliable UDP) implements psuedo-connections using UDP to achieve many of the benefits of a connection-based protocol like TCP, but crucially allows [NAT traversal](https://en.wikipedia.org/wiki/Network_address_translation#Type_of_NAT_and_NAT_traversal.2C_role_of_port_preservation_for_TCP) where TCP cannot. Furthermore, all data is encrypted between both endpoints using a secure, verifiable RSA public key exchange mechanism.  This forms part of the [PKI](http://en.wikipedia.org/wiki/Public-key_infrastructure) which is provided by the SAFE Network.

The library's interface is provided in the following files:

* [managed_connections.h](https://github.com/maidsafe/MaidSafe-RUDP/blob/master/include/maidsafe/rudp/managed_connections.h) - this is the main API and is discussed in more detail below
* [parameters.h](https://github.com/maidsafe/MaidSafe-RUDP/blob/master/include/maidsafe/rudp/parameters.h) - provides library configuration variables
* [return_codes.h](https://github.com/maidsafe/MaidSafe-RUDP/blob/master/include/maidsafe/rudp/return_codes.h) - In the future, the use of return codes will be replaced with the error-handling mechanisms provided in the [MaidSafe-Common](https://github.com/maidsafe/MaidSafe-Common/wiki).
* [nat_type.h](https://github.com/maidsafe/MaidSafe-RUDP/blob/master/include/maidsafe/rudp/nat_type.h) - an enumeration of the relevant [NAT](https://en.wikipedia.org/wiki/Network_address_translation) types the library needs to identify

The library makes heavy use of [Boost.Asio](http://www.boost.org/doc/libs/1_55_0/doc/html/boost_asio.html), both for network-related operations and asynchronous operations. It also depends on the MaidSafe libraries [Common](https://github.com/maidsafe/MaidSafe-Common/wiki), [Private](https://github.com/maidsafe/MaidSafe-Vault-Manager/wiki), and [Passport](https://github.com/maidsafe/MaidSafe-Passport/wiki).


### Background

Two RUDP nodes maintain a psuedo-connection or "managed connection" by continually sending small keepalive control messages between each other.  The connection can be closed by either peer by sending a shutdown control message, hence under normal circumstances peers become aware very quickly of a closed connection.  Should a fixed number of keepalives fail to be received in a row for a given connection, the node considers the connection to be dead.  This is a slower mechanism than using the shutdown message, however, it should be far less common since it is caused by the peer process terminating unexpectedly, or by the peer's network connection dropping unexpectedly for example.

For each connection, a node has an `EndpointPair` associated with itself and another for the peer.  The `EndpointPair` contains the "local" endpoint (IP/Port as seen inside or behind the router) and the "external" endpoint (IP/Port as seen outside the router).  External endpoints are preferred, internals are used in case the external fails and the two peers are both behind a router which disallows hairpinning.

A connection cannot be established between two peers which are both behind routers providing [Symmetric NAT](https://en.wikipedia.org/wiki/Network_address_translation#Methods_of_port_translation).  The SAFE Network [Routing](https://github.com/maidsafe/MaidSafe-Routing/wiki) library handles this by providing a proxy node for each such "hidden" node, and as such the RUDP library doesn't attempt to resolve this issue.


### Details

[managed_connections.h](https://github.com/maidsafe/MaidSafe-RUDP/blob/master/include/maidsafe/rudp/managed_connections.h) defines three functors; `MessageReceivedFunctor`, `ConnectionLostFunctor`, and `MessageSentFunctor`.  The first two must be provided in the `ManagedConnections::Bootstrap` function, can be called many times by RUDP and are self-explanatory.

The `MessageSentFunctor` will be invoked exactly once per call to `ManagedConnections::Send`.  It indicates that the associated message has been received by the target peer, (not just enqueued for sending, but actually received), or else has failed.  It is anticipated (but not required) that a separate instance of `MessageSentFunctor` will be passed in each call to `Send`.

Internally, a `ManagedConnections` class maintains several (up to `Parameters::max_transports`) transport objects, each with its own actual network socket.  This socket is used to maintain several, (currently up to 50) (see [transport.h](https://github.com/maidsafe/MaidSafe-RUDP/blob/master/src/maidsafe/rudp/transport.h)), `Transport::kMaxConnections`) psuedo-connections.  Therefore, it is likely that having very few `ManagedConnections` objects will provide optimal performance.

Bootstrapping a `ManagedConnections` object can be a slow process, as connections are attempted to the various candidate endpoints until one succeeds.

`ManagedConnections::kResiliencePort()` provides a network-wide known port which can be used in a disaster-recovery situation.  Every `ManagedConnections` instance attempts to open this port locally.  After network segmentation for example, nodes can try to rejoin by attempting to connect to other local nodes, or to direct-connected nodes using this known port.

Further details of the individual functions can be found in the [managed_connections.h](https://github.com/maidsafe/MaidSafe-RUDP/blob/master/include/maidsafe/rudp/managed_connections.h) file itself.




