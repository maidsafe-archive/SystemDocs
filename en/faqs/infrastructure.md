# Infrastructure

These FAQs relate to questions about the components and processes that make the network function.


### Does the SAFE Network require continuous Internet connection from all participants?

No, the SAFE Network will rate each connection type and adjust for the resources it provides, in order to account for unavailability (through powering off or device failure).

It's not a problem to be disconnected for shorter periods, however. If your node is unavailable for longer periods it will negatively impact on the service you receive from the network.

### What does decentralised mean in the SAFE Network?

The SAFE Network, and in particular the MaidSafe approach is that decentralised means fully decentralised. This term is used extensively in the tech community. For the SAFE Network decentralised means the following:

1. No servers at all
2. No information from any server infrastructure (no DNS, no time servers...etc...)
3. No connection to any server based networks
4. No centralised data structures across nodes
5. No controlling party (or parties)
6. Zero control by humans for administration of data access
6. Fully inclusive (no ability to ban people or apply barriers to basic network access)
7. Borderless network; no borders or controls over network reach

###Is your storage capacity limited?

After the network reaches critical mass, the storage capacity of each user will only be limited by the number of safecoins they have, or are willing to use to store their data.

These safecoins can be earned by providing resource, or bought. The SAFE Network uses a process of deduplication [http://en.wikipedia.org/wiki/D...](http://en.wikipedia.org/wiki/Data_deduplication) to enable the most efficient use of network storage space. As the network is comprised of all the resources of the networks users, the infrastructure costs are a fraction of any existing server centric storage providers.


###Who pays for the storage?

Users (Farmers) provide their spare computing resource to the network and it is this resource on which the networks data is hosted. Users who contribute disk space to the SAFE Network are rewarded with safecoins by the network.

###How long is my data stored for?

All data is stored on the SAFE Network forever unless the user decides to delete it. Data that has been held for a long time, but not accessed, will be moved into archive.

###How do you ensure that no pieces of data are lost after a user goes offline?

The SAFE Network automatically maintains a minimum of four live copies of any piece of data at any time. As a users turns off their computer, their vault managers (the group responsible for looking after network nodes) notify the network and all the data chunks being held by that data manager are recreated elsewhere. This process happens very quickly, in around 20 milliseconds.

###Could you decentralise websites like YouTube?

Yes, you can decentralise any applications or webs service that exist on the Internet today.


###How does the SAFE Network deal with Sybil attacks?

The SAFE Network requires all requests be processed by at least two groups of Vaults.
The SAFE Network client passes a request to its four Data managers, who verify the request based on the client’s signature. The request in then passed to a deterministically selected group of four other Vaults which also verify the request based on its signature.

By deterministically selecting the second group of Data managers, this attack no longer holds true for the SAFE Network, since it is not possible for the attacker to gain control over a Vault by simply surrounding it.

To circumvent this, the attacker would require the ability to surround specific Vaults in the SAFE Network. This cannot be achieved, as it would require being able to effectively generate different values which, when hashed with SHA-512, result in close hashes around one particular point.

###How does the SAFE Network deal with data redundancy to ensure whatever data is shared remain accessible?

Each file is encrypted and split into chunks during our encryption process (Self Encryption). The network keeps and maintains four copies of each encrypted chunk and moves these fragments around the network as nodes become unavailable, either through failure or power down. In order to cope with the churn, the network is able to reconfigure globally extremely quickly (20 milliseconds). The chunks are spread globally for increased robustness.

The SAFE Network is completely autonomous and all these operations are handled by the system and completely without our knowledge.


###How is data stored and retrieved?

Data is stored and retrieved using the self encryption process. Self encryption is used to mix up and encrypt data before it is sent out to the SAFE Network. This process is automatic and happens instantaneously. As data is saved to a user’s virtual hard-drive it is broken up into at least three chunks. A data map is created and for each chunk a hash, (a unique digital finger print) is created and written to the data map. For additional security the data map is also run through this self encryption process.

Each chunk is then encrypted to create random, non-repeating data. Finally, combined with the original hashes, the chunks are further encrypted. The output of each chunk is then added to the data map.

The data map, with hashes before and after encryption, is used when retrieving and decoding the user’s data, as the encryption process is non reversible. The data is decrypted and reconstituted with the users PIN, keyword and password.

###When files are split into chunks, the network takes a hash (a digital fingerprint) of each. Can the original hash be traced back to a user?

In short, no. Chunks are not linked to a specific user on the network and anonymity (and security as arguably they are the same thing) is at the very heart of the network. At a very high level, there are a number of features that provide anonymity.

* RUDP (Reliable UDP) encrypts every message hop to hop as they traverse the network
* The routing layer scrubs IP addresses after hop1
* The storage and retrieval of data is carried out using an identifier known only to the network that is not linked to a person or public name
* There is no server login and therefore no central point of knowledge or attack
* Passwords are not stored or transmitted on the network
* All messages are encrypted and the identifier of the sender/receiver is not what the user logs in as, the identifier is stored inside an encrypted packet


