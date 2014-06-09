# Autonomous Network

There have been many examples of at pseudo autonomous networks, these would include networks like Amazon Dynamo and many other internal networks locked behind firewalls. To secure such networks to be able to exist on the public and hostile Internet requires considerable effort. To take this further by **decentralising 100% of all components** makes this effort significantly more difficult.

The requirements of such a network are at minimum:

1. Cryptographically secured
2. A system of guaranteed node identification
3. A p2p network that is very accurate and can guarantee node proximity to any address
4. Ensure home routers are able to allow connections both ways (NAT traversal)

For such a network to be accessible for the public at large then we require further efforts:

5. A mechanism where people can prove they have provided resources
6. A mechanism of resource measurement and reward

If such a network were to exist and be fuelled by peoples own computers then the problems are increased to include:

7. Dealing with very high levels of churn (computers going off and on, potentially staying off)
8. Removing any administration requirement

#Overview

##Cryptographic security (1)

In the MaidSafe network nodes first create a cryptographic key pair to join the network. This is a process that requires one of these keys at least is presented and available to the network (see next section). As each node then communicates with any other node these keys are used to secure the connection. Unlike traditional secured communications mechanisms that require key exchanges (such as [diffie Hellman](http://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)) the MaidSafe network provides these keys to nodes from the [routing](https://github.com/maidsafe/MaidSafe-Routing) layer. The side effect of this is that even compromised hardware can be traversed in this network. This is a deterrent to Man In The Middle (MiTM) attacks. Replay attacks are also guarded against via the accumulator patter found in MaidSafe vaults. This pattern effectively cancels any duplicate messages, which are normal in the network.

As each node can encrypt messages to and from each node it communicates with the basic building block of the network allows enhanced levels of security. It is not enough though, not until we can be sure that we are communicating with a node we can validate as to be the node we think it is, failure to do so would result in a Sparticus attack.

##Identify nodes (2)

Node identification is essential if nodes are to be responsible in a measured way for resource management. Without identification this would mean any node can impersonate another (the Sparticus attack) and do untold damage. There are known methods to identify digital identities, such as a certificate authority (such as Verisign) or in some cases a web of trust. As this system has no servers, no human involvement and no trust then neither of these options is acceptable. In the MaidSafe network this is solved by a relatively simple process.

This process involves creating 2 key pairs. One key air is a revocation key and is used only to create and invalidate a real key. The real key-pair is created, the public key is signed by the revocation private key and this packet (public key plus signature) is stored on the network as a Node Identification key type. This key is stored in the location close to the Hash (SHA512) of the packet. This Hash is then used as the node identity.

The network can retrieve this Identification packet at request from any node. The only way to alter this packet is by a message signed by the same ID as the ID that signed the packet. This relatively simple process allows nodes to be identified as they advertise themselves as the Hash of the Identification packet that they created and stored. As only the creator has the private key of this public key contained in the Identification packet then we can assume this is the correct node. All messages should be encrypted with this ID in any case, so fraudulent nodes would not decrypt such messages, including connect requests which are required to join the network.

##Accurate DHT (3)

###History of the journey

Kademlia is possibly the best known of all DHT networks. MaidSafe initially tested many DHT implementations in python, actually becoming administrators of a well known project. It was decided that a c++ implementation had to be undertaken, but Kadmelia proved continually to be less accurate than the requirements of an autonomous network. The requirement for accuracy is a simple one. To delete or mutate data then it is vital to ensure that all copies of that data be located with a high degree of accuracy. To improve the traditional kademlia implementation MaidSafe added some enhancements:

* Beta Refresh (provide backof times for data refresh to remove race conditions and flooding)
* Down list modification (transmit dead node details to providers of the node information)
* Force K (improve lookup efficiency by increasing queries in flight)

    This library can be found at [maidsafe-dht](https://github.com/maidsafe/MaidSafe-DHT).

All of this proved to be less than acceptable, although arguably this was one of the most accurate implementations of Kademlia. After involving academia via some research projects there was very little that could be done to make Kademlia accurate or fast enough for our needs. Another issue was the iterative approach to convergence on a target meant that routers were being tested to extreme as they opened up ports for each node with each iteration. In many examples of  published research it was also found systems like emule and gnutella had up to 30% of addresses which were duplicates. This was a serious concern as it would prove to be far from acceptable for any accuracy. It appears that DHT implementations were largely insecure and less than efficient. This would be acceptable for public file sharing networks or even video sharing where limited loss is acceptable.

###A new DHT

To overcome these limitations there had to be some serious changes. This solution required the speed and accuracy of [D1HT](http://www.cos.ufrj.br/~monnerat/.../Monnerat_et_Amorim_D1HT_2006.pdf) with the scalability of Kademlia. Not only that, but iterative lookups would have to be replaced with a recursive solution to alleviate the router issues. Such a recursive solution would alter Kadmelia significantly. Several improvements were made to Kademlia, including:

* Recursive lookup (parallelism of 4, with bad node detection and bypassing)
* Continuously connected to each node in routing table (required a rewrite of UDP, called [reliable UDP](https://github.com/maidsafe/MaidSafe-RUDP))
* Addition of Delete / Edit capabilities
* Addition of Group and Single messages
* Very fast convergence on target
* Ability to message nodes closest to a target node

These additions allowed this DHT to pass our minimum tests. At scale the DHT is now able to ensure that closest nodes to any target are returned. In tests this has proven to be accurate with 100% pass on all tests. The probability of errors is so small as not be measured in tests, which can be found in the Routing codebase.

The DHT is now seperated into two libraries. The routing library performs network level lookups of node and data addresses. This componant is vital for the efficienty of the network. In an approach different from traditional DHT networks MaidSafe does not necessarily store data clsoe to the address in the DHT. As the address closeness is purely a measure of location and not node capability then storing data at that locations is not acceptable.

The vault library is responsible for data storing and locating. The vault network measures and dynamically allocates resources to data in a random fashion, until the data settles on the network. A pointer to the data is stored in the DHT address space, but on a vault. This pointer is very small and can be handled in high churn networks very quickly. This distinction allows the network to rank resources and match those this the requirements placed upon the network by users. This key difference requires the storage and processing part of the network to be much more intelligent than a traditional DHT. This is a vital part often overlooked in MaidSafe, but is likely a key componant.

##NAT traversal (4)

A network for public access and provisioning requires all nodes can not only communicate to the network, but that the network can also communicate to these nodes. Many home connections are made via routers that supply private addresses that cannot appear on the Internet. A commonly used mechanism is to make use of [STUN](http://en.wikipedia.org/wiki/STUN) servers. This is not acceptable in a decentralised network. In MaidSafe rUDP is used in a mechanisms that emulates a decentralised STUN server, with the DHT providing connect information to negotiating nodes. The process is described below:

Booststrap node = [B]; Our node = [U], Other node who is not sharing the same IP as [U] = [O]

1. On initial bootstrap, receive IP and port [B] detects.
2. If IP = a local IP then directly connected [stop]
3. Send Detection packet to [B] which in turn sends a packet to [O].
4. Both [B] and [O] send message to [U] and await reply.
5. If [O] receives a reply, it messages [B] with success. [B] reports back to [U] that we are behind a full cone NAT.  [stop]
6. If [O] cannot get a reply, it asks [B] to message [U] with an attempt to connect to [O] (which may fail), at the same time [O] tries to connect to [U]. If successful [O] reports back to [B] with success, and is then behind a port restricted NAT [stop].
7. If 6. fails [U] is behind another type of NAT, probably symmetric, although these is some success at predicting port increment or decrement symmetric NAT devices, it is not efficient enough so [stop] with fail at this point.  On all attempts failing the node should report NAT traversal fail to the application. This is not the final attempt as the network will actually implement a relay configuration for 2 nodes behind symmetric routers when necessary. This situation, however, should mean that a server node or an autonomous network node should fail as the remaining operations would be bandwidth restrictive at this time to complete.

Efficient NAT traversal is the dilemma facing almost all decentralisation project that wish to implement planetary scale networks that require zero configuration by users of such networks. This is a significant improvement on existing solutions.

##Proof of resource (5 & 6)

###Version 1

The vault network required that each user installed a vault. This vault will generate the keys required to operate on the network. Clients obtain the keys on installation. The client has to create an account on the network to be able to store any data. A registration token is created by the client signed by both the vault key and the client keys. This process allows the network to be sure this client owns the vault. A separate registration is attached to the vault to ensure there is only one client per vault (optional).

On receipt of the registration token the nodes closest to the client address allow the client to store the vault keys. Tis allows the vault to actually start and offer services. As the client stores or mutates data on the network the close nodes will confirm with the close nodes to the vault from the registration token that it has provided at least the resources the client intends to use. This check is called vault_health check and is made frequently.

To ensure this is secure as well as fair there is an overdraft mechanism in place to allow vaults to 'catch up' with vaults in terms of resource management. This process is very accurate and provable, but does place a barrier to adoption as clients require to own a vault and mobile users are excluded form the network. There are mechanisms to share vaults with other users, but the negotiation of this is very difficult for users.

###version 2 (current)

With the advent of an underlying crypto token (safecoin) then the network can be simplified. If vaults were rewarded for supplying resources by being awarded tokens on at a rate proportional to the vaults rank then there is no need to tie clients to vaults. This has an added advantage as clients may no longer have to have their account managed (even in a secured manner). An account can be as small as data stored and ignoring data deleted then these accounts are tiny. This reduction in account size is significant and allows the network to handle churn more efficiently.

As a client no longer require to be linked to vaults this also removes a security issue that, although, had no obvious attack, it was exposing more information that required.

As the network creates tokens, users may use these to purchase network resources in an anonymous manner. This will require an exchange or purchasing mechanism, but this is not a significant body of work. It is envisaged this could be developed in a short time-scale.

Rank is an internal measure of the vaults stored verses lost data and is used to manage network authority in addition to the authority a vault has in relation to it's XOR closeness to an address. This rank is used to regulate the safecoin earning rate of vaults. This rate may decrease on oversupply of resources and increase on increased demand for resources. The external value of safecoin is a separate issue and discussed  extensively in the community.

##Network churn (7)

Network churn is a term to describe nodes going off line frequently and without notice much of the time. This is a situation that favours a very fast reconfiguring network. In the case of MaidSafe and the network distance from addresses which is used as a large part of the authorisation metric. In MaidSafe a nodes distance from an address is a measure of that nodes authority to make decisions on that address in a particular circumstance.

This is is also one of the concerns people have when they hear of MaidSafe. Almost immediately the first question is, what if the computer storing my data goes off line. Then when they hear there are multiple copies, they ask, what is they all go off and so on. When people hear that we use this effect as a security mechanism they are surprised.

In terms of data loss, the replicated copies of data are spread across the network in a random and uniform manner. This should put data copies far away form each other. The network holds multiple on line and off line copies in a manner that the mixture maintains the most efficient nodes hold data based on it's use and also the nodes on line times. This balance operates with great efficiency. It should be noted that this is a probability and is selected and measured to ensure the probability is beyond the bounds of possibility.

In terms of security, churn provides an attackers nightmare, a moving target. As the network re-configures quickly on churn events the shape of the network alters around any data element. This change makes attacking such parts of the network more difficult. As the network grows this churn provides even greater security as the nodes close to data is altering faster. This effect is ignored during security analysis as it does introduce 'fixes' to many attacks. To measure attacks we switch off churn where we can, in addition to sync, caching and send acknowledgement in routing attack tests on the network require churn to be managed where possible.

 ##Zero administration

In an autonomous network there should be no administration required by the need user to manage the network or computer the network vaults are installed on. A great deal of work has gone into ensuring this is the case in the MaidSafe network. There are two options so far that can be set and these are the recourse usage limit (for vaults) and wallet address (agian for vaults). It is unlikely any client application will require network level settings to be applied. In terms of resource usage then sensible defaults are used.
