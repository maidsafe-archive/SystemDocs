# Security - Self encryption
Security of a user's data is critical in the SAFE Network and this is, in part, provided by the self encryption process. The SAFE Network requires that data be unrecognisable as data and resistant to decryption, even in the event of an encryption algorithm being compromised.

Self encryption is used to mix up and encrypt data before it is sent out to the SAFE Network. This process is automatic and happens instantaneously.

As data is saved to a user's virtual hard-drive, it is broken up into a minimum of three chunks, [hashed](http://en.wikipedia.org/wiki/Hash_function) and then encrypted. To further obfuscate the data, every chunk is passed through an [XOR](http://en.wikipedia.org/wiki/Exclusive_or) function using the hashes of other chunks.
Each chunk is then broken in thirty two pieces and key value pairs are added to a table on the users computer called a data map. The data map contains the locations of each chunk that makes up the file. The data map, with hashes before and after encryption, is used when retrieving and decoding the user's data, as the encryption process is non reversible.

For additional security the data map is also run through this self encryption process.

The SAFE Network uses [data deduplication](http://en.wikipedia.org/wiki/Data_deduplication) to ensure that space is used efficiently when storing multiple copies of data which have been uniquely encrypted. The network is able to distinguish identical pieces of data by comparing the hashes of each chunk. As is described in [2.2.2](http://maidsafe.net/SystemDocs/system_components/guaranteed_vault_identification.html), vaults also use hashes to identify themselves.

[Click here to see a video explaining the self encryption process](https://www.youtube.com/watch?v=Jnvwv4z17b4)

Here is an overview of the self encryption process.

![Self encryption figure](./img/self-encryption.png)
