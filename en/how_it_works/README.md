# How it works

When a user downloads and installs the Safe Network client, a Vault is configured on their computer.

After joining and signing in to the SAFE Network, the user can see a new virtual mounted drive on their system. Selecting this drive displays their static data that has been encrypted and distributed around other Vaults.

The user's Vault can also handle dynamic data, for example, communications through a VoIP app.

Before the data is stored on the SAFE Network it is automatically encrypted. The self-encryption process involves breaking up the data into small chunks and then encrypting those chunks with the user's login details and the data itself. This means that if anyone wanted to see the data they would need the user's secure login details and have knowledge about the specific chunk of data. None of this information is held on 3rd party systems or servers.

Typically the user connects to the network through a router. The router uses Reliable UDP (RUDP) protocol to connect to the network. RUDP is a more robust protocol than UDP as lost packets are retransmitted and are capable of traversing NAT routers, unlike TCP. The use of RUDP on the SAFE Network enables data to travel through a router without being corrupted or intercepted.

The user's Vault connects to other Vaults as part of the storage and management of data. The Vaults are constantly checked and ranked (by the Data holder managers personna) using the following criteria:

* **Availability** - how often the Vault is on or off
* **Storage** - how much storage space is in the Vault
* **CPU** - how much CPU resource of the Vault
* **Bandwidth** - how fast or slow the access is to the Vault

As demand and resources on the SAFE Network change, the Vaults adapt and continually balance the load of the network. This adjustment process is done automatically by the Vaults themselves. As the SAFE Network is completely autonomous, it can react quickly and without the need for any human intervention.

When a user provides more storage space than the amount they use on the SAFE Network, they are awarded safecoins at random by the network. Safecoins are required to access services on the network. The user can see how many safecoins they have by looking at their wallet. The wallet is automatically set up and configured as part of the SAFE Network client installation and sign up process.

App Builders earn safecoins when they create apps and programs for the SAFE Network. As the apps are used, the App Builder earns safecoins.

Core Developers can also be awarded safecoins by contributing to the SAFE Network codebase.
