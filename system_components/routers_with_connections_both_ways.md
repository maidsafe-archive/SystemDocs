# Routers with connections both ways
The SAFE Network allows for communication between Vaults.

Many home connections are made using routers which supply private addresses that cannot appear on the Internet. A commonly used mechanism is to make use of [STUN](http://en.wikipedia.org/wiki/STUN) servers.

This mechanism is not acceptable in a decentralised network. In the SAFE Network, RUDP is used in a mechanism that emulates a decentralised STUN server, with the distributed hash table (DHT) providing connection information to negotiating Vaults.

The SAFE Network can handle router connections without the user having to adjust their connection to the network through their router.
