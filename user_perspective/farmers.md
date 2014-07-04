# Farmers

Safecoin is farmed, this means farmers get paid safecoin for looking after data, as they provide their unused computing resources to the SAFE network. In a similar way, Builders (application developers) are paid safecoin for supplying tools (apps) to manage and manipulate data (producer and consumer devices).  A coin type structure is a special type of digital asset. These require a mechanism to allow creation of the asset, otherwise anyone could create coins and become rich (well they would not become rich they would simply destroy the eco-system).  After creation then these coins are network types and can be handled with several very small and concise rules, all of which are cryptographically secured.

##Installation and maintenance

The farmer aspect of the SAFE network is actually two programs that are generally invisible to the end user. These programs are the vault and the vault manager. The vault manager keeps the software updated and the vault running, restarting it on any error. The vault manager starts the vault and passes any keys to the vault via IPC or local TCP connection. The vault itself is the


##Mining

A safecoin is only able to be created under certain circumstances, when a user Gets data from the network, for example.

<<<<<<< HEAD
This process starts via the MaidManager group through the DataManager group and eventually to the PmidManager group.  The storing node (that is giving the data) takes the address of the data, the message ID and the address of its close nodes (the PmidManagers). It then hashes all of these into a mining request. The mining request is sent to the network to store a coin. If there is space in the safecoin address space (there should be, the address space is 2^32 in size) then the storing nodes (Transaction Managers) can check and validate that the hash is correct. The storing nodes also check the address of the requestors close group and the message ID of the Get request (this is intact and comes from the MaidManagers of the requesting node).
If any of these checks by the network show the requests to be invalid, the mining request is immediately dropped as a failure. In summary:
=======
A person Gets data from the network. This happens via the MaidManager group through the DataManager group and eventually to the PmidManager group.  The storing node (that is giving the data) takes the address of the data, the message ID and the address of it’s close nodes (the PmidManagers). It then hashes all of these into a mining request. The mining request is sent to the network to store a coin. If there is space in the safecoin address space (2^32) then the storing nodes there, (Transaction Managers) can check the hash is correct. They can check the address of the requestors close group and the message id of the Get request (this is intact and comes from the MaidManagers of the requesting node).  This means there is a lot of checking a request is valid and is still valid (if any nodes change the request is dropped as a failure).
>>>>>>> FETCH_HEAD

mining request == Hash(messageid + Get Request message + coin owner (pmid Node) + pmid Managers + Data Managers of the requested chunk)

This happens every X Get attempts and this X is calculated by an algorithm that slows or speeds up mining requests, based on network data stored and free space available. A hack attempt would be computationally infeasible and require an attack group possibly larger than the networks population.

In conclusion, a safecoin mine attempt is a secure PUT of a transferable digital asset. These rules can be applied in similar systems, but is possibly only required here. A very similar approach allows Builders to receive rewards, but at a rate of X/10.
