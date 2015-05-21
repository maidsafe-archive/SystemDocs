# Libraries

The SAFE network is comprised of several individual libraries. The following section, aimed at the more technical reader, provides a more detailed explanation of what role each library performs and how they fit together. The following diagram provides an overview of the SAFE Network stack:

![](http://systemdocs.maidsafe.net/content/en/detail/img/stack.png)
    
The code for each library is available in MaidSafe's [GitHub repositories](https://github.com/maidsafe). The libraries are:

1.  Crust- Reliable p2p network connections in Rust with NAT traversal
2.  Routing - A secured DHT, based on a Kademlia-like implementation, that has group based consensus decisions confirmed by Sentinel
3.  Vault - An autonomous network that perform many functions including: data storage, data management, publishing and sharing. Vaults receive responsibilities for anything with a network address from the routing layer.
4.  Encrypt - Self-encrypting files (convergent encryption plus obfuscation) which can be accessed via either a RESTful or POSIX API. The RESTful API offers simplicity (GET, PUT, POST, DELETE), while the POSIX API provides more granular access.
5.  Messaging - This module handles communication between public identities in the network. All communication between MPID's (MaidSafe Public ID) in the network are private and digitally signed.
6.  Compute - Still to be implemented, this module will enable the processing of distributed computing actions, leveraging the massive processing capability of the decentralised system.
7.  Safecoin - A crypto graphic network token that rewards and incentivises all network contributors.
8.  Self-authentication - A mechanism that enables users to create accounts on the SAFE Network and log in from any computer without the need or knowledge of third parties.
9. SAFE Apps -  The networks application layer where all third party apps reside and will access the network via NFS / Messaging / Compute modules.



