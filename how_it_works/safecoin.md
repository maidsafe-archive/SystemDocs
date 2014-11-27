#Safecoins

Safecoins can be earned, traded or purchased. The value of safecoins is determined by the demand for them.

Safecoins are used to access services on the SAFE Network. This encourages constant reuse which results in increasing demand for a finite resource. As a result, the value of the safecoins increases over time.

While the coins themselves increase in value, the amount of network services (resources) they buy also increases.


## Safecoin transfer mechanism
On the SAFE Network, Vaults assume various [personas or roles](../vault.html), depending on the requests they receive.  For example, the Data manager persona is responsible for managing the integrity and availability of a given piece of data on the network.

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

