# Self Encryption

The process of self encryption has some properties important to the secure storage and transmission of data elements. Such elements require to be unrecodnisible as data and resistant to decryption, even in the event of an encryption algorithm being comprimised. The reasons of the self encryption process used in MaidSafe are plentyful, but include

1. The data is to be stored on consumer computers. Any data recodnisable as illegal or immoral would be a disinsentive to use the system.
2. As the data is being stored in a public and hostile environment, then it may be kept for a long period of time. An attacker for instance could keep some data encrypted, hopeing for an attack on any encryption algorithm, then decrypting the file.
3. To efficiently store data on a global network, data de duplication is a side effect that can maximise space required to store all data. In essense to store XGb will take up only a % of XGb on the nework.
4. As data has to be encrypted then the encryption keys should be deduced securely from the data itself, otherwise keys need to be hard coded, or users of the system need to type in passwords continually (there are of course alternatives to make this simpler).

###Notes

As the mechanism used is a variant on [convergent encryption](http://en.wikipedia.org/wiki/Convergent_encryption) then it would be possible to recodnise data if an attacker had the original file. This depends on access to the data, which in itslef is an issue MaidSafe seeks to resoslve. In the MaidSafe network physical security is also an important issue.

This requires that the network iself locate the data and make access to this extremely difficult if not actually computationally infeasable. In terms of access MaidSafe refuses range based searches on data stored per vault. A user would have to obtain physical access to a vault to check the encrypted elements stored.

If this is still not enough security then there is the possibility of users altering files slightly to mask data. There is no link between consumers of data and the data itslef in any case. User ID's, login ID's and data manipulation ID's are in fact different cryptographic identities and routing objects. This enforces a physically secure store of data.

##Detailed Descripton

Details of the enncryption process can be found [here](https://github.com/maidsafe/MaidSafe-Encrypt/wiki/Documentation)

