# ISP simulates network

This attack was actually discussed and brought to our attention by somebody thought to be senior in the crypto world.

##Attack Description

In this case the ISP, creates a simulated or fake network. On this network they get data you request, but do not actually store data you attempt to store.

##Attack Purpose

To force users to lose data that may be important to them or simply discredit the system.

##Attack Avoidance

In this case the bootstrapping client or vault will not be able to connect to the bootstrap nodes listed in the cache file. This file contains the IP port and public key of bootstrap nodes (nodes determined in last session to be directly connected or full cone NAT). As the boostrap session is encrypted with the public key of any bootstrap nodes then the connect request will fail. The client will then detect this is not a valid network.

##Improved Attack

Have the ISP machines pretend to be your machine and ask for the bootstrap info on your behalf.

##Attack Avoidance

In this case the ISP machine could request the info and pass back to you. That information is encrypted to you, so the ISP cannot really access it (unless they break RSA 4096). You then connect to your closes nodes. If the closest nodes are fake they will not be able to process the connect request (encrypted to each end). So again this attack fails.

[client]

This is only applicable for clients, not yet logged in. On receipt of the login packet, the client will then encrypt a close nodes request to the bootstrap node. Again this is returned encrypted. So the attack is circomvented.

