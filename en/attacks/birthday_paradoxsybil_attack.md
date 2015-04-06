# Birthday Paradox/Sybil attack

##Attack description
In this attack, an attacker ﬂoods the network with Vaults it controls, to surround a single Vault with 3 or more malicious Vaults in order to exert control over that Vault.

##Attack purpose

Using this case, an attacker could request deletion of data chunks by acting as Data managers with the controlled Vaults. This could cause the Data holders to delete the chunks in response to a seemingly legitimate request, and prevent access to that data for legitimate users.

While it is not possible to deliberately position the malicious Vaults around a desired point in the SAFE Network, with around 0.8% of the network’s Vaults under the (temporary) control of an attacker, it is likely the attacker will have at least one Vault surrounded on the SAFE Network, allowing it to exert control over that Vault and reach quorum on such false actions.

##Attack avoidance

The SAFE Network requires all requests be processed by at least two groups of Vaults.

A SAFE Network client passes a request to its 4 Data managers, who verify the request based on the client’s signature. The request is then passed to a deterministically selected group of 4 other Vaults which also verify the request based on its signature.

By deterministically selecting the second group of Data managers, this attack no longer holds true for the SAFE Network, since it is not possible for the attacker to gain control over a Vault by simply surrounding it.

To circumvent this, the attacker would require the ability to surround speciﬁc Vaults in the SAFE Network. This cannot be achieved, as it would require being able to effectively generate different values which, when hashed with SHA-512, result in close hashes around one particular point.
