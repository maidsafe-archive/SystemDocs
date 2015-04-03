## Routing Overview

Routing is a Distributed Hash Table library based on [Kademlia](http://en.wikipedia.org/wiki/Kademlia)-like routing tables. Routing specifies the network structure and determines the path between pair of nodes in the network by using the local information at each intermediate node.
Each routing node locally stores routing information about the nodes it is directly connected to. Moreover, every node has partial knowledge of the local information of its close nodes (neighbouring ID space).
The information stored at every node, contributes to message passing infrastructure of routing. Exchanging information in routing typically involves traversing a number of intermediate nodes.  The communication between each pair of nodes is performed by employing [MaidSafe-RUDP](https://github.com/maidsafe/MaidSafe-RUDP/wiki). An acknowledgement/retransmission  mechanism is also provided to ensure reliable message delivery.
Ability to offer an efficient platform for message exchange between peers, makes routing an ideal overlay network component of any P2P system.


Routing offers the following features:
* Joining network
* NAT traversal
* Modes of operation
* Reliable direct and group messaging
* Proximity evaluation
* Node identification via PKI provided by MaidSafe-Passport
* Caching mechanism
* Churn handling
* Routing table and group matrix

The library's interface is provided in the following files:
* [routing_api.h](https://github.com/maidsafe/MaidSafe-Routing/blob/master/include/maidsafe/routing/routing_api.h) - this is the main API and is discussed in more detail below
* [api_config.h](https://github.com/maidsafe/MaidSafe-Routing/blob/master/include/maidsafe/routing/api_config.h) - provides declaration of types which may be used to utilise the library
* [node_info.h](https://github.com/maidsafe/MaidSafe-Routing/blob/master/include/maidsafe/routing/node_info.h) - provides information about a node
* [parameters.h](https://github.com/maidsafe/MaidSafe-Routing/blob/master/include/maidsafe/routing/parameters.h) - provides library configuration variables
* [return_codes.h](https://github.com/maidsafe/MaidSafe-Routing/blob/master/include/maidsafe/routing/return_codes.h)

### Synopsis

### Joining the Network
A node may join the network as
1. a normal node when a network already exists,
2. as a zero state node, where the node is one of the first two nodes creating the network.

####Joining as a Normal Node

To join an existing network, a node must be provided with a list of end-points of a number of nodes which are already part of the network. The node attempts to connect to any end-point from the list. Once a connect attempt succeeds, the joining node locates and connects to its [Parameters::closest_nodes_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc) closest nodes.  Connecting to the [Parameters::closest_nodes_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc) closest nodes is vital to reliable operation of a node. The rest of the routing table is mainly populated by random nodes in the network to allow uniform access to different parts of the network.

####Joining as a Zero State Node

The initial setting up of the network, which is called zero state, involves two nodes. These two nodes are provided with the end-points of each other and by connecting to each other form the network. The zero state nodes are identical to any other nodes in the network and may leave/join the network similar to other nodes.

###NAT Traversal

An objective of Routing has been enabling communication between each pair of nodes in the network, regardless of their network configuration settings. Routing in combination with [MaidSafe-RUDP](https://github.com/maidsafe/MaidSafe-RUDP/wiki) performs [hole punching](http://www.brynosaurus.com/pub/net/p2pnat/) to enable direct connection between each pair of nodes.
Hole punching is achievable as long as both nodes are not behind symmetric routers. If both nodes are behind symmetric routers, routing enables communication between two nodes by choosing a third node acting as proxy between the two nodes behind symmetric routers.


###Modes of Operation
####Non-Client

A non-client node is a full routing node that contributes to the operation and maintenance of the network. Non-client nodes are part of DHT and are active in routing decision making.
Non-client nodes can :
* Send requests to any non-client nodes
* Send requests to only connected client nodes
* Receive incoming requests from any node in network

####Client

In contrast to non-client nodes, a client node does not contribute to the routing network infrastructure.
Client nodes are light weight routing nodes using minimal network resources.
These nodes gain access to the entire network by establishing connection to [Parameters::closest_nodes_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc) nodes closest to its own ID.
A client node can :
* Send requests to any non-client nodes
* Send requests to clients with same ID
* Receive incoming requests only from connected non-client nodes

###Reliable Direct and Group Messaging

Routing offers two types of communication; direct and group.

####Direct Messaging

In direct messaging the destination is a known node in the network and is the final recipient of the message.

####Group Messaging

A group is comprised of a number of nodes which are closest to a given ID. The number of group
members is defined by [Parameters::node_group_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc).

In group communication, the destination of a message is a group of nodes which are closest to the destination. A node having destination as its ID will not be part of a group communication.


###Routing Table and Group Matrix
Routing table is the main component of the routing library. Routing table stores information about a number of nodes in the network in order to perform routing decisions to deliver messages. Each entry of the routing table corresponds to a direct connection from the routing node to that node.
Each node in the network has an ID of 512 bits. The distance between each pair of nodes in the network is calculated by XORing the pair.
A reliable and efficient routing operation in the network requires that each node i) to be aware of the nodes in its close proximity and, ii) to have access to different parts of the network. Routing table stores information about:
* [Parameters::closest_nodes_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc) closest nodes
* Randomly chosen nodes in the network
* Any other node which finds the current node as one of its [Parameters::closest_nodes_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc) closest nodes

The above information stored in routing table is enough in the majority of cases to enable correct decision makings. However, it might be found insufficient to make accurate decisions when two nodes are having different views regarding closeness to each other or another node. To handle these situations, the routing table is equipped with a group matrix.
The idea behind group matrix is to provide nodes with more knowledge of the area of the network and where they reside. This is realised by making each node partially aware of nodes in the routing table of its closest neighbours. A group matrix of a node contains:
* (i) The node’s [Parameters::closest_nodes_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc) closest nodes
* (ii) Other nodes considering the node as one of their [Parameters::closest_nodes_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc) closest
* (iii) Closest nodes of each entry in (i) & (ii)

Up to date information in the routing table and group matrix are necessary to make correct decisions. Therefore, routing offers some services; to quickly reflect any updates in the routing table of a node, and  the routing table or group matrix of any nodes which should be made aware of the updates.


###Proximity Evaluation

Most operations in the network are performed on the group of nodes which are in closest proximity of a given ID. Routing table along with group matrix, facilitates nodes with sufficient knowledge of the part of network (where they belong) to accurately identify other peer nodes who share the same group IDs.
The node which is part of a group will always be aware of other nodes in the group. Based on this knowledge, routing api provides methods to work out:
* If a node is closest to a given ID
* If a node is part of a given group
* New and old group members nodes after a churn event

Based on average network distance/population, it also provides methods to estimate if a node is close enough to a given ID.

###Churn Handling

In a P2P network, joining and leaving are common events. Peer turnover, often referred to as churn rate, is efficiently handled by the routing library. For example, a node joining or leaving the network is reflected in the routing tables of its close nodes within a few seconds.

###Matrix Change (Churn Event)

In the routing network, data is usually stored at a logical group ID. This means that data is stored at the nodes which are among the [Parameters::node_group_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc) closest to a given group ID.
Any churn in the network may result in moving a node near or far from a group ID in that segment of the network. This means that many of the logical groups reconfigure by having new members in the group and losing some old members of the group.

In event of:

1. Node(s) disappearing from a logical group : New node(s) will replace them based on their proximity to the group ID becoming the new [Parameters::node_group_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc) close group. After this, all group messages sent to the group ID, will be received by new node(s) as well. It is the responsibility of other remaining nodes of that group to quickly replicate data to the new node(s).
2. Node(s) appearing in the logical group : Some of the group member nodes will move far from the group ID and will not remain under [Parameters::node_group_size](https://github.com/maidsafe/MaidSafe-Routing/blob/master/src/maidsafe/routing/parameters.cc) closest to the group ID. Further to this, these Node(s) will not receive any group message destined to the group ID. These Node(s) should delete data which they are no longer responsible for.


To reliably keep data alive and accessible in this dynamic group, all responsible nodes should replicate data as soon as they become aware of the network churn. Routing provides MatrixChange class to detect such churn quickly and to reliably workout if data replication is required for any new node appearing in the group. Nodes close to a segment of network experiencing a churn event will observe a change in their groupmatrix. If group matrix changes on any churn, routing creates MatrixChange object, containing a list of new and old group matrix nodes. This class provides helper function to evaluate any given group ID to work out if node receiving the churn event:

* Is still part of the group and responsible for data stored at the group.
* Is not part of the group any more and needs to delete stored data related to the group.
* Needs to replicate data to a new node.

```C++
  CheckHoldersResult CheckHolders(const NodeId& target) const;
```

CheckHoldersResult provides list of the new and old holders of the group and proximity_status of the node receiving the churn event wrt the given group ID.


```C++
struct CheckHoldersResult {
  std::vector<NodeId> new_holders;  // New holders = All 4 New holders - All 4 Old holders
  std::vector<NodeId> old_holders;  // Old holders = All 4 Old holder ∩ All Lost nodes
  routing::GroupRangeStatus proximity_status;
};
```




###Caching Mechanism

To enable fast access to popular contents, routing offers some services to allow caching data on intermediate nodes or to read cached data from intermediate nodes if data is available. The functionality is simply achievable by setting a flag in the routing message. If the type of message is a request, the cache in each intermediate node to the final destination is checked for data. If data is available in cache, the intermediate node will serve the request and a reply is sent to the sender. If the type of message is a response, data is stored at each intermediate node from destination to source.


###Callbacks

Offering an efficient platform to exchange messages between peers makes routing an ideal communication component of any P2P system. To allow simple and loosely coupled utilisation of the routing components, routing provides a number of callback functions to the host components. Some of these callbacks are mandatory and be provided by the host application. Other callbacks are additional features and are optional for host application.

Routing's callback functions:

* **MessageReceivedFunctor** : Is called when a a node-level request message is received. Node-level request message is an incoming message destined for the application layer using the routing node.

* **NetworkStatusFunctor** : Is called when a new connection is established or a connection drop happens. It show the percentage health in terms of node's connection to other valid peer nodes in the network or alternatively can be referred to as routing table health.

* **MatrixChangedFunctor** : Any churn event, resulting in change to nodes's group matrix triggers a call to this functor.

* **RequestPublicKeyFunctor** : As a part of the connection process to a non-client peer, routing needs to be provided with the public key of the peer. This is achieved by PKI infrastructure. The callback provides another callback (GivePublicKeyFunctor) which should be called with the valid public key of the connecting non-client peer

* **HaveCacheDataFunctor** & **StoreCacheDataFunctor** : Are called to look for cached data or store data in cache of an intermediate node

* **NewBootstrapEndpointFunctor** : Is called whenever a routing node connects to a peer whose endpoints are capable of bootstrapping a node. Since the network is very dynamic, this is important information for reconnecting to the routing network. A list of these endpoints must be supplied to routing to reconnect to the network.

