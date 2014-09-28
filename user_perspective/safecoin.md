# Safecoin

History has demonstrated that having the most cutting-edge technology does not in itself guarantee wide scale use.  To ensure the SAFE network is fully and efficiently utilised, a token-based scheme is proposed where all stakeholder groups have the ability to earn these tokens (safecoins) in a manner that is both fair and equitable.

Safecoin (http://maidsafe.net/safecoin) may be earned, traded or purchased. The whole SAFE network is configured and designed to incentivise all parts of the community. The incentivisation is a critical component of a fully decentralised Internet.

In essence, safecoin is a fair and transparent way of incentivising developers, backers and end users to use SAFE. Safecoin will have a predictable cap in excess of 4 billion (2<sup>32</sup>), which can be further subdivided to facilitate trading. Their value will be determined solely by the market.

Safecoins will be used to access services on the SAFE network, encouraging constant reuse of the coins. This increasing demand for a finite resource will help drive an increasing value of the coins over time. While the coins themselves increase in value, the amount of network services (resources) they buy will also increase (this will be managed by the Proof of Resource algorithmn).
This will create a much desired increasing value for safecoin holders, while delivering exponential decreases in the cost of resources.

![Resources Graph](https://raw.github.com/maidsafe/Whitepapers/master/resources/resources_graph.png)

It is hoped that this implementation will ensure computing resources are shared amongst all users at the lowest possible cost.  MaidSafe believes this approach will provide the most cost-effective and efficient computing platform in the world, realising the company’s vision of an Internet for everyone, free from spying, privacy erosion and data loss.

## Safecoin Transfer Mechanism
On the SAFE network, vaults assume various personas or roles, depending on the requests they receive.  For example, the DataManager persona is responsible for managing the integrity and availability of a given piece of data on the network.  A separate persona, the TransactionManager, is proposed to handle all the token-related transactions.  A TransactionManager group will be a trusted group of nodes which are closest to any given transaction identity. The TransactionManager is responsible for the logic that enables transactions to be completed.

The transfer mechanism is defined as: ‘allowing a transaction (transfer of credit from A's wallet to B's wallet) between two user's persona groups to be completed’. The transaction shall be open and read only to public (allowing an upper layer third party broker app to validate there is transaction happening/completed).

The SAFE wallet is defined as : the place holding the credits (and the credit change history) for an account.

The procedure of a transfer (user_A transfers credit to user_B) can be illustrated as :

1.	User A makes a function call : user_A.Transfer(user_B, amount, wallet)
2.	When the Maid Manager group of user A receives a request, they :

    i)    debit the amount from user A's wallet

    ii)   send a request to the TransactionManager

    iii)  send a notification to the upper layer API
3.	When the Transaction Manager group receives a notification, they :

    i)    send a notification to user B's persona

    ii)   create an internal transaction
4.	When user B's Maid Manager group receives a valid notification they :

    i)    send an acknowledgement to the TransactionManager group

    ii)   credit user B's wallet with the amount

![Transfer Mechanism](https://raw.githubusercontent.com/maidsafe/Whitepapers/master/resources/transfer_mechanism_diagram.png)

## Safecoin Requests / Persona Roles

Safecoin data is one kind of data, so it has PUT and GET request being defined. However, unlike normal data, there is no DELETE request defined for it. The PUT request for safecoin is "no duplication allowed", i.e. if there is already a safecoin data having same name (first 32 bits), the new put request shall be rejected. This will be handled by the DataManager receiving the request.

A new request, EXCHANGE, is defined to allow approved requester update the pay_load of the token data. The rules defined as :
* Only the owner that be approved by the majority of escrows and owners (previous / current owners considered as approved themselves) can update all fields.
* Each escrow can only update their correspondent field once
* Each time prev / curr owner field get updated, the version_number must be increased by 1 step, and all escrow fields shall be erased

The above rules will be enforced by the PmidManager holding the safecoin data. As the ownership field, together with the escrow fields, are used as a 'transaction', the PmidManager effectively becomes the TransactionManager. In this instance, the safecoin data can also be considered as a receipt object as well.

The safecoin data also served as "wallet" to itself, i.e. a wallet that holds one token only. A user level bookkeeper, holding the list of token one user owns, can be completed as a client only application. That list of token information can be stored in user's local machine or uploaded to the network as encrypted data.


#### References

[ref Network] MaidSafe Network website : www.maidsafe.net

[ref Autonomous] Autonomous Network, David Irvine, Fraser Hutchison, Steve Mucklisch : https://github.com/maidsafe/MaidSafe/wiki/unpublished_papers/AutonomousNetwork.pdf?raw=true

[ref Routing] MaidSafe Routing github site : https://github.com/maidsafe/MaidSafe-Routing/wiki

[ref BitCoin] Bitcoin : A Peer-to-Peer Electronic Cash System, Satoshi Nakamoto, https://bitcoin.org/bitcoin.pdf

[ref RUDP] MaidSafe RUDP github site : https://github.com/maidsafe/MaidSafe-RUDP/wiki

[ref Persona] Vault Documentation : https://github.com/maidsafe/MaidSafe-Vault/wiki/Documentation

[ref Escrow] The Escrow service for Bitcoin : http://btcrow.com/

[ref BIP 16/17] BIP 16/17 in layman's term : https://bitcointalk.org/index.php?topic=61125.0
