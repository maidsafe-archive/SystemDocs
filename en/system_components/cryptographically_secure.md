# Cryptographically secure
In the SAFE network Vaults first create a cryptographic [key pair](http://en.wikipedia.org/wiki/Public-key_cryptography) to join the network.

As each Vault communicates with any other Vault these keys are used to secure the connection.

Unlike traditional secured communications mechanisms that require key exchanges (such as [diffie Hellman](http://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)) the SAFE Network provides these keys to Vaults from the [routing](https://github.com/maidsafe/MaidSafe-Routing) layer.

The benefit of this is that even compromised hardware can be traversed in the SAFE Network. This deters [Man In The Middle (MiTM) attacks](http://en.wikipedia.org/wiki/Man-in-the-middle_attack).

As each Vault can encrypt messages to and from each Vault it communicates with, security of the whole network is enhanced.
