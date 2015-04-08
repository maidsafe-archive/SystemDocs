# Efficient - Self authentication

The SAFE Network supports self authentication. This is a mechanism that enables users to create accounts on the SAFE Network and log in from any computer without the need or knowledge of third parties.

To achieve this the authentication privileges (login token) have to be stored on the SAFE Network as part of the self authentication process.

A user creates their own key (K) and password (W). A [salt][wikipedia-salt-crypto] (S) is derived (in a repeatable way) from the key and password.

Then to generate a unique identifier, a hash is created from the concatenated keyword and the salt, H(K + S).

A Password Based Key Derivation File (PBKDF2) is used to strengthen the password. This is required as user selected passwords are commonly weak.

Finally the encrypted access permission is stored on the SAFE Network using the following structure:

**Store On Network [H(K+S)] Symmetric Encrypt [ PBKDF2[P][S] ] (Account)**

Self authentication relies on a system where a Vault can create a unique key, to store a value in the SAFE Network. The value stored with this key contains an encrypted passport to data.

This passport contains a variety of key types that enable different tasks to be performed across the network. 

The location of this initial key is masked or at least not obvious in the SAFE Network. This approach is the basis for self authentication and is extended into the SAFE Network to allow access to data to be stored publicly and with no additional requirement such as firewalls or access controls.

##Guessing login information

An intruder or hostile person on the network can test for the presence of a user and download the login token. This is similar to continual testing of a password on a centralised server. In centralised servers this is alleviated by backing off log in attempts.

In the SAFE Network as a user requests a login token, they are provided with one. Invalid tokens are provided on every attempt. This means that an attacker will have to decrypt many millions of strongly encrypted log in tokens. This process should render such attacks computationally infeasible.

The login token is only useful for authentication after it is validated against the password and user details, which are never sent out onto the SAFE Network.

[wikipedia-salt-crypto]: http://en.wikipedia.org/wiki/Salt_(cryptography)
