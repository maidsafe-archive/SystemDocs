# Proof of resource
Proof of resource enables the network to validate actions or services using a mathematically verifiable mechanism.

This process measures a Vaults ability to store and retrieve data chunks. This depends on the following user's computer criteria:

* CPU speed
* Bandwidth availability
* Disk space
* On-line time

This allows the proof to be a useful, measurable and an immediately verifiable entity. Proof of resource is a very efficient mechanism with zero transaction fees.

Proof of resource in the SAFE Network uses a mechanism similar to a [zero knowledge proof](http://en.wikipedia.org/wiki/Zero-knowledge_proof). In this case the checking mechanism does not require to know the content of any data to be checked, but must know the data is in fact held and held in a manner that is accurate.

The proof of resource follows a series of steps.

1. A checking group of Vaults creates a random string
2. This random string is sent encrypted to all holders of the data
3. The data holder takes this string, appends it to the original data, and hashes the result
4. The result is collected and decrypted by the checking group and compared
5. If any Vault returns a different result then it is believed compromised and de-ranked

This mechanism is triggered on Get requests and during account transfers. Account transfers are where information about a data chunk, or information about nodes holding a chunk are passed to new members of a [close group](http://systemdocs.maidsafe.net/content/en/how_it_works/vault.html). Proof of resource is non-deterministic and randomised by use by users. It is considered to be secure and uses zero knowledge, not to conceal content (as anyone can ask for any data), but to ensure any data which is contaminated is not required to be transferred.

Here is an overview of the proof of resource process.

![Proof of resource figure](./img/por-diagram.png)
