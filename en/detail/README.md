# Libraries

The SAFE network is comprised of several individual libraries. The following section, aimed at the more technical reader, provides a more detailed explanation of what role each library performs and how they fit together. The following diagram provides an overview of the SAFE Network stack:

![](http://systemdocs.maidsafe.net/content/en/detail/img/stack.png)
    
The code for each library is available in MaidSafe's [GitHub repositories](https://github.com/maidsafe). The libraries are:

1.  [Crust](http://systemdocs.maidsafe.net/content/en/detail/Crust.html)- Reliable p2p network connections in Rust with NAT traversal. [Access the Crust API docs.](http://maidsafe.net/crust/crust/)
2.  [Routing](http://systemdocs.maidsafe.net/content/en/detail/Routing.html) - A secured DHT, based on a Kademlia-like implementation, that has group based consensus decisions confirmed by Sentinel. [Access the Routing API docs.](http://maidsafe.net/routing/routing/)
3.  [Vault](http://systemdocs.maidsafe.net/content/en/detail/Vault.html) - An autonomous network that perform many functions including: data storage, data management, publishing and sharing. Vaults receive responsibilities for anything with a network address from the routing layer. [Access the Vault API docs.](http://maidsafe.net/maidsafe_vault/maidsafe_vault/index.html) 
4.  [Encrypt](http://systemdocs.maidsafe.net/content/en/detail/Encrypt.html) - Self-encrypting files (convergent encryption plus obfuscation) which can be accessed via either a RESTful or POSIX API. The RESTful API offers simplicity (GET, PUT, POST, DELETE), while the POSIX API provides more granular access. [Access the encrypt API docs.](http://maidsafe.net/self_encryption/self_encryption/)
5.  Client - the main entry point to the network, providing RESTful API access, posix API access and more (listed below)
    6.  Messaging - This module handles communication between public identities in the network. All communication between MPID's (MaidSafe Public ID's) in the network are private and digitally signed.
    6.  Compute - Still to be implemented, this module will enable the processing of distributed computing actions, leveraging the massive processing capability of the decentralised system.
    7.  Safecoin - A crypto graphic network token that is integral to the network, rewarding and incentivising all network contributors. API access wil enable balance check, transfer, escrow and multi-sig functionality.
    8.  Self-authentication - A mechanism that enables users to create accounts on the SAFE Network and log in from any computer without the need or knowledge of third parties.
    9. SAFE Apps -  The networks application layer where all third party apps reside and will access the network via NFS / Messaging / Compute modules.

Access to all library APIs is completely unrestricted to app developers. 

