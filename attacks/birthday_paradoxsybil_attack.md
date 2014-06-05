# Birthday Paradox/Sybil attack
##Attack Description

We identiﬁed through both simulation, and mathematical prediction, that it would be possible to carry out a ‘birthday paradox’ attack on the network, whereby an attacker simply wishing to cause harm or disruption could ﬂood the network with nodes it controlled, knowing they only need to surround a single address with 3 or more malicious nodes, in order to exert control over that node. While as previously discussed, it is not possible to deliberately position these nodes around a desired point in the network, we identiﬁed that with around 0.8% of the network’s nodes under the (temporary) control of an attacker, it was likely the attacker would have at least one node surrounded on the network, allowing it to exert control over that node as managers, reaching quorum on false actions.

##Attack Purpose

By way of example, we proposed a proof-of-concept attack,
whereby an attacker would request deletion of any chunks it
could, by acting as the chunk information managers (as deﬁned in section IV), thereby causing the chunk holders to delete the chunks in response to a legitimate request, preventing access to that data for legitimate users. If the attacker were inclined to act out of ﬁnancial motivation, they could request a copy of the chunk prior to its deletion, and request the user pay a ransom before uploading it to the network again.



If parts of the network were attacked in such a manner then there may be opportunities to create fake rules to be introduced. In a large scale attack fo this kind considerable network damage could occur. Theft of safecoin, double spend, delete data etc. would all be possible.

##Attack Avoidance

Requiring all requests be processed by (at least) two groups of nodes rather than one. Under this proposed modiﬁcation, a client would pass its request to its 4 managers, who verify the request based on the client’s signature, then pass this request to a deterministically selected group of 4 other nodes, which would also verify the request based on its signature. By deterministically selecting the second group of managers, the birthday paradox no longer holds true for the network, since it would not be possible for the attacker to gain control over a node by simply surrounding it - the attacker would require the ability to surround speciﬁc nodes in the
network, which is believed to be a difﬁcult task which would require being able to effectively generate different values which, when hashed with SHA-512, result in close hashes around one particular point.
