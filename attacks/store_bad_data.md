# Store bad data

##Attack description

If an attacker was to subvert the self encryption to attempt to create illegal or immoral data of under 1Mb in size, and named with the hash of its content, then potentially the attacker would be able to store this immoral data on the SAFE Network.

As self encrypted data is highly obfuscated and nearly impossible to decode, then storing data normally would not yield this attack. There is no mechanism to force the data onto any specific Vault, but the data would simply be on the SAFE Network.

##Attack purpose

The purpose of this attack would be purely to discredit the network. It is unlikely any attacker would know where the data was stored and the network does not disclose this information at any rate. In any case an attacker could state they did manage to do this to alarm users.

##Attack avoidance

Due to not knowing where the immoral data is stored in the SAFE Network, this attack is already thwarted as the attacker could not retrieve it. In itself this is a form of protection, however the SAFE Network also goes a step further.

As data is stored in the SAFE Network, the key used to store it is also used to encrypt the content. This key is then hashed itself and the content renamed to this key. The original key and content are then deleted. In this manner, the Vault storing the data has no ability to decrypt its stored chunks of data.

The SAFE Network can ask for a chunk, and the Vault will hash this request and look in its storage for the hash of the requested chunk. On finding this, the Vault will use the requested key to decode the content in memory and send the data on named with the requesting key. This will then be able to reform as an immutable data chunk, but only for the requesting Vault.

This therefore is similar to an attacker fully encrypting the data themselves and storing on any computer or network.
