# Vaults
Vaults are created on a user's computer when they install the MaidSafe client and join the SAFE Network.

The Vault on the user's computer can not be seen by the user. Instead the user sees a virtual mounted drive that provides access to their distributed data.

When a user creates or alters files on their virtual drive, the file goes through several processes to ensure the file is secure and makes best use of the SAFE Network resources.

## Vault persona
Vaults can have a different data handling persona. Each persona serves a different role in the SAFE Network.
* **Client managers**<br/>
Client manager Vaults receives the chunks of self encrypted data from the user's Vault.
* **Data managers**<br/>
These Vaults manage the chunks of data from the Client manager Vaults. They also monitor the status of the SAFE Network.
* **Data holders**<br/>
Data holder Vaults are used to hold the chunks of data.
* **Data holder managers**<br/>
Data holder managers monitor the Data holder Vaults. They report to the Data manager if any of the chunks are corrupted or changed. They also report when a Data holder has gone offline.
* **Vault managers**<br/>
The Vault manager keeps the software updated and the Vault running; restarting it on any error.
* **Transaction managers**<br/>
The Transaction manager helps to manage safecoin tranfers.

## Data on the SAFE Network
When a file is encrypted and broken up into chunks as part of the self authentication process it is passed to a close group of Client managers. This close group is selected at random by the network and at least twenty eight of the thirty two Client managers much reach consensus before any network operations are carried out.

The Client managers then pass the chunks to thirty two Data managers who the distribute the chunks around thirty two Data holders.

The Data holders are constantly checked by the Data holder managers.

If a Data holder manager reports that a Data holder has gone offline, the Data manager decides, based on rankings assigned to Vaults, into which other Vault to put the chunk of data.

This way the chunks of data from the original file are constantly being monitored and supported to ensure the original data can be accessed and decrypted by the original user.

Any movement of data chunks can only be made if there is a consensus (28 of 32) from the surrounding Vaults. The Vaults cannot act in isolation.


Finally, to ensure security and resilience, Vaults are non-geographically located using an exclusive OR (XOR) function.


[Click here to see a short video on how Vaults work](https://www.youtube.com/watch?v=txvKSeCaEP0)
