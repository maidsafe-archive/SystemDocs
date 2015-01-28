#Safecoins

Safecoins can be earned, traded or purchased. The value of safecoins will be determined by market, through the combination of supply and demand. 

## Market price
The number of safecoins in circulation will increase based on network use. Almost all early safecoin holders will be farmers with this supply of resource creating both liquidity
and distribution of wealth. It is anticipated that almost all users will possess at least a few safecoins in their wallet. 

Users may trade their safecoin for services on the network, or for cash (or another digital currency) using an exchange.
The ratio of safecoin being saved (left in new wallets) versus the ratio being issued to Farmers will produce a price point. This point will be the market value of safecoin

Safecoins are used to access services on the SAFE Network. This encourages constant reuse which results in increasing demand for a finite resource. As a result, the value of the safecoins increases over time. While the coins themselves increase in value, the amount of network services (resources) they buy also increases.


## Safecoin transfer mechanism
On the SAFE Network, Vaults assume various [personas or roles](http://maidsafe.net/SystemDocs/what_it_is/vaults.html), depending on the requests they receive.  For example, the Data manager persona is responsible for managing the integrity and availability of a given piece of data on the network.

The Transaction manager, another Vault persona, handles all the safecoin transactions. The Transaction manager is responsible for the logic that enables transactions to be completed. A Transaction manager group is a trusted group of Vaults which are closest to any given transaction identity.

The transaction is open and is read-only to public. This allows an upper layer Third Party Transaction validators to validate that the transaction is happening or completed.

[Click here to see a video that explains what happens when someone makes a safecoin transaction](https://www.youtube.com/watch?v=Bs95jLq_cy0)

##An example safecoin transaction
The following is an example of a transfer of credit from **Alice** to **Bob**.

1.	**Alice** contacts the SAFE Network using a transfer instruction to **Bob**.

2.	When **Alice's** Transaction manager group receives the instruction it debits the amount from **Alice's** wallet.

3. **Alice's** Transaction manager group generates a transaction.<br/>
At the same time the transaction is highlighted to Third Party Transaction validators.

4.	**Bob** is notified that a transaction is taking place and acknowledges it.

5.	**Bob's** Transaction manager group credits **Bob's** wallet.

6.	**Bob's** Transaction manager group updates the transaction to say the transaction has been completed.<br/>
At the same time the transaction is validated by the Third Party Transaction validators.


![Transfer Mechanism](https://raw.githubusercontent.com/maidsafe/Whitepapers/master/resources/transfer_mechanism_diagram.png)

