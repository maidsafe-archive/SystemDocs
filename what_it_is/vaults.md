# Vaults
The SAFE Network consists of software processes (nodes) which are known as Vaults. Each Vault resides on the hard drive of the user's computer and fulfils multiple functions, specialising and adapting to the needs of the network. One of their main roles is the storage of encrypted data that has been passed to it from other Vaults around the network.

Another function, or persona, of a Vault is to manage other Vaults. As chunks of data are passed between Vaults the manager part of the Vault detects and monitors data integrity.

Vaults can also have a Transaction manager or Transaction validator persona. These personas are used for managing safecoin transfers.

Vaults know nothing of the data they have been asked to store (it can only be decrypted by the client) and because the data is only a small chunk, it is not possible to decipher what the original source data was, for example, a document or communications.

For every Vault that holds data there are another thirty one Vaults holding the same data. This means that if a Vault goes offline or a data chunk becomes corrupted, that data is not lost. Each Vault automatically finds another Vault to store the data.

Vaults are not visible to the users of the SAFE Network. Instead the user only sees a virtual mounted drive on their computer. With the Vaults constantly talking to, and monitoring each other, a user accesses data instantaneously from the mounted drive.
