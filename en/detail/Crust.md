## Crust Overview

Reliable p2p network connections in Rust with NAT traversal. One of the most needed libraries for any server-less, decentralised project.

![](https://raw.githubusercontent.com/dirvine/crust/master/img/crust-diagram_1024.png)

This library will allow p2p networks to establish and maintain a number of connections in a group when informed by users of the library. As connections are made they are passed up and the user can select which connections to maintain or drop. The library has a bootstrap handler which will attempt to reconnect to any previous "direct connected" nodes.

TCP connections are always favoured as these will be by default direct connected (until tcp hole punching can be tested). TCP is also a known reliable protocol. Reliable UDP is the fallback protocol and very effective.

The library contains a beacon system for finding nodes on a local network, this will be extended using a gossip type protocol for multi hop discovery.

Encryption of all streams will also allow for better masking of such networks and add to security, this is done also considering the possibility of attack where adversaries can send data continually we must decrypt prior to handling (meaning we do the work). There are several methods to mitigate this, including alerting upper layers of such activity. The user of the library has the option to provide a blacklisting capability per session to disconnect such nodes 'en masse'.

_direct connected == Nodes we were previously connected to. TCP nodes or reliable UDP nodes that allow incoming connections (i.e. direct or full cone nat that has been hole punched). This library also supports fallback endpoints being passed at construction that will allow a fallback should nodes from previous sessions become unavailable.

Nat traversal/Handling

Several methods are used for NAT traversal, UpNP, hole punching [See here for TCP NAT traversal](http://www.cmlab.csie.ntu.edu.tw/~franklai/NATBT.pdf) and [here for UCP/DHT NAT traversal](http://maidsafe.net/Whitepapers/pdf/DHTbasedNATTraversal.pdf). These methods will be added to by the community to allow a p2p network that cannot be easily blocked. By default this library spawns sockets randomly, enabling nodes to appear on several ports over time. This makes them very difficult to trace.