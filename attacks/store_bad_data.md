# Store bad data

#Attack Description

This is not an attack on data per se' but an attack to discredit the network. As self encrypted data is highly obfuscated and practically impossible to decode, then storing data normally would not yield this attack. If an attacker was to subvert the self encryption to attempt to create illegal or immoral and have that content under 1Mb and named with the hash of its content then potentially an attacker would be able to store immoral data. There would be no mechanism to force the data on any machine, simply it would be in the network. 

#Attack Purpose

The purpose would be purely to discredit the network. It is unlikely any attacker would know where the data was stored and the network does not disclose this information at any rate. In any case an attacker could state they did manage to do this to alarm users.

#Attack Avoidance

This attack is thwarted in any case, apart from not knowing where the data was stored, an attacker could retrieve it. In itself this is a form of protection the network goes a step further. 

As data is stored the key used to store is used to encrypt the content. This key is then hashed itself and the content renamed to this key. The original key and content are then deleted. In this manner the node storing the data has no ability to decrypt even unencrypted chunks of data. The network can ask for a chunk and the node will hash this request, look in its chunk store for the hash of the requested chunk. On finding this the node will use the requested key to decode the content in memory and send the data on named with the requesting key. This will be able to reform as an immutable data chunk, but only for the requesting node. This then is similar to an attacked fully encrypting the data themselves and storing on any computer or network. 
