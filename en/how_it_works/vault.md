# Vaults
Vaults are created on a user's computer when they install the MaidSafe client and join the SAFE Network.

The Vault on the user's computer can not be seen by the user. Instead the user sees a virtual mounted drive that provides access to their distributed data.

When a user creates or alters files on their virtual drive, the file goes through several processes to ensure the file is secure and makes best use of the SAFE Network resources.

## Vault persona
Vaults have different persona and each persona serves a different role in the functioning of the network. These persona can be organised into 4 main groups:
* **Client managers**<br/>
This is a group of persona of routing nodes closest to a client node. They are aware of their role as they have a connection that is not a routing table node, it therefore must be a client. Examples of Client Manager types are MaidManager (the group that looks after a Maid account) and MpidManager, the group that looks after public name and public shares/drive for public clients.
* **NAE manager**<br/>
Network Addressable Element manager groups. The NAE Managers understand their function as they are close to the address that equals the name of the network addressable element (not a Network Addressable Node, but data or function elements). Examples of these are DataManagers (look after data pointers) and VersionManagers (responsible for directory versions and any other mutating directly addressable node).
* **Node manager**<br/>
Node Manager – This is the group surrounding a node and they understand that they are Node Managers as the node appears in their routing table. PmidManagers (the group looking after nodes holding data) represent an example of a Node Manager type.
* **Managed node**<br/>
This is a routing node in a group of Node Managers such as a PmidNode (a node holding a data element).

It is vital that these persona groups obtain authority to act in these roles, otherwise a node could claim to belong to any group and perform any function. This authority is gained by each persona sending their persona type in a message to the next group. The next group then accumulates the results, checking and validating the signatures of the entire group.

## Data on the SAFE Network

There are 2 mechanisms utilised by the network that authorise an End User to carry out certain actions via the Client. Authority is obtained by group consensus whenever a Client is putting (storing) new data. Alternatively, [cryptographic signatures](http://en.wikipedia.org/wiki/Digital_signature) are used if the Client is amending already stored data (a version) or sending safecoin, for example.

** Group Consensus**<br/>
When an End User attempts to put a new piece of data, the file is encrypted and broken up into chunks as part of the self encryption process, it is passed to a close group of Client managers. This close group are comprised of the closest vault IDs to the users vault ID in terms of [XOR](http://en.wikipedia.org/wiki/Exclusive_or) distance. This is distance measured in the mathematical sense as opposed to the geographical sense. At least twenty eight of the thirty two Client managers much reach consensus before any network operations are carried out.

The Client managers then pass the chunks to thirty two Data managers, chosen by the network as their IDs are closest to the IDs of the data chunk, so the chunk ID also determines it's location on the network.

The network utilises a Scatter/Gather approach, based on [Rabin’s Information Dispersal Algorithm](http://people.seas.harvard.edu/~salil/rabin2011-slides/rabin2011-mitzenmacher.pdf), enabling small data loss (up to 4 pieces) without the requirement to retransmit data

Once consensus is reached, the Data manager passes the chunks to thirty two Data holder managers, who in turn pass the chunks for storage with Data holders. If a Data holder manager reports that a Data holder has gone offline, the Data manager decides, based on rankings assigned to Vaults, into which other Vault to put the chunk of data.

This way the chunks of data from the original file are constantly being monitored and supported to ensure the original data can be accessed and decrypted by the original user.

Any movement of data chunks can only be made if there is a consensus (28 of 32) from the surrounding Vaults. The Vaults cannot act in isolation.

All communications on the SAFE Network are carried out through close groups of 32 nodes. This prevents a rogue node(s) from behaving maliciously. It is not possible for a user to choose their own node ID, or to decide where their data is stored, this is calculated by the network. Every time a node disconnects from the network and reconnects, it is assigned a totally new and random ID.

[Click here to see a short video on how Vaults work](https://www.youtube.com/watch?v=txvKSeCaEP0)

** Cryptographic Signatures**<br/>
When End Users are making changes to existing data, such as changing the content of a file, or sending another End User safecoin, the network does not use group consensus as this layer of complexity and increased network load is not required. 

Cryptographic signatures mathematically validate the owner of any piece of data and can prove this beyond any doubt, provided the End User has kept their private key safe. If the End User is the owner of any piece of data and can prove this, by digitally signing their request with their private key, the network permits them access to change the data. 

