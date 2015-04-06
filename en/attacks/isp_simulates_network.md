# An ISP simulates a network

##Attack description

In this attack an ISP creates a simulated or fake network. On this network the ISP gets data that the user has requested, but does not actually store data the user has attempted to store.

##Attack purpose

The purpose of this attack is to force users to lose data that may be important to them or simply discredit the SAFE Network.

##Attack avoidance

In this case the bootstrapping SAFE Network client or Vault will not be able to connect to the bootstrap Vaults listed in the cache file. This file contains the IP port and public key of bootstrap Vaults.

As the bootstrap session is encrypted with the public key of any bootstrap Vaults then the connect request will fail. The SAFE Network client then detects this is not a valid network.

##Improved attack description

An ISP's machine pretends to be the user's machine and asks for the bootstrap information on the users behalf.

##Improved attack avoidance

In this case an ISP's machine could request the information and pass it back to the user. That information is encrypted to the user, so an ISP cannot really access it (unless they can break RSA 4096). The user then connects to their closest Vaults. If the closest Vaults are fake they will not be able to process the connect request, which is encrypted to each end. So again this attack fails.

This is only applicable for SAFE Network clients that have not yet logged in. On receipt of the login packet, the SAFE client encrypts a close Vault request to the bootstrap Vault. Again this is returned encrypted, so the attack is circumvented.
