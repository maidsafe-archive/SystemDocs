# Attacks

We work very hard to ensure system attack vectors are analysed and (now) documented. This is an important aspect of any such system and will require constant updating as more vectors are discovered.

Attacks can be classified in two seperate categories, system bugs and logic errors. This section focusses on any logic errors that could introduce an attack opportunity. It is recodnised, that, as with any system enough resources, cash and determination could kill it off. We try to limit the vectors here to be realistic, although we have addressed some seemingly unrealistic attacks as they have been discussed in the community.

##notes

To make things fast we removed many signature checks and now with such an accurate routing layer we base decisions on closeness to particular addresses for authority.  We make joining very cryptographically secure, so this is key that the join is very secure and it is. We have a small bit of code to do that will make this even more secure, but that's another mail. Imagine it is extremely difficult to get into the network at a known point. So your vault address is not able to be manipulated by anyone to give a known address for any attack of that order. for this experiment we assume the opposite though :-)

I believe there is no single point of failure in any of the vault network. So for this thought experiment we imagine an attacker can get a group of closely connected nodes (which we think is near impossible to do, but for this experiment it makes sense to imagine there is a flaw we have not uncovered and this attack happens).

So in these experiments in house we assume even a tiny chance is an attack, so it it's at all possible we imagine it's easy. This does not mean we ignore the laws of physics though, traversing the address range is considered not a possible attack. So any small chink in the armour is considered a full on attack.

Note: a group of responsibility as below has a limited attack range. To attack the whole list of addresses managed by a group then the group size would have to be equal to our routing matrix size. This is 64 nodes as it stands. There could be a single address they can manipulate, but to manipulate all addresses within the group of 4 then our tests have shown that you need to attack all 64 nodes. When the matrix is less than 64 we get routing errors, therefore this is the size of group to be able to confirm the close 4 and also to be responsible for the addresses contained within that group. I think best case scenario is an attacker would have to acquire 64 nodes to control a whole groups internal data.


##The attacker becomes a group of MaidManagers
They could
1. Issue delete messages to DM's
2. Issue put messages to DM
3. delete a MaidAccount
4. Fill up a Maid allowance (make the account full)
Result of attack
1. This would mean a chunk never actually gets deleted as they upset the count and it will never got to zero on successful deletes. Net effect, the network keeps data it maybe should not.
1a. The ability to send deletes to every successive address would require several trillion years
1b. Likely attack would be limited to known chunk names.
1c. Attack is not limited by group size in this case, the MM could emulate a single Maid they are definitely responsible for.
2. This requires the data, so this attack would emulate a Maid with no vault. So this is an attack against proof of resource. It is limited though as the store would mean there has to be a pmid hint. We do not catch that just now, but the DM could check the health of the pmid in question and find it's dead. This attack can be pretty securely locked down I think if we measured it every happened.
3. This is a good thing for a Maid as they get all that space back. IT has no lasting effect on the user at all. If the attacker were the user as well it would mean the users could get unlimited space and perhaps bypass proof of resource, this again can be killed by a DM check on pmid hint.
4. This would work I think, it would inconvenience a Maid for sure. It is possible the Maid would spot this though at the users side. In this case creating a new Maid could be considered when the users vault is secured (as it probably is anyway).


##The attacker becomes a group of DataManagers
They could
1. Delete data on Pmids
2. Put data on Pmids
3. Report failed integrity checks on a Pmid.
Result of attack
1. This would be valid and cause the pmid to delete the data at no reduction in rank. Very limited to perhaps a single chunk
1a. This would remove a chunk from the network and is possible (limited as in note). Very limited to perhaps a single chunk
2. as with MM this would require the data so is naturally limited.
2a. This is a better way to attack proof of resource, but is very limited in the data it could store as in note above.
3. This again is an amortised attack and would only be able to report a pmid corrupt for a single chunk. If the pmid holds many chunks (they will) then this is a slight de-rank.


##The attacker becomes a group of PmidManagers
They could
1. Delete all data from a Pmid
2. Return false health from a pmid
Result of attack
1. This is a valid act and would not harm the pmid or the chunks.
2. This is a way to affect the Maid and would cause a (single) user some hassle. If the vault were shared the number of users may be increased.
2a. The user may note a vault fault and delete it and create another. The affect would be limited to this hassle. So it should be easy for a user to do this at the API level.
 
##The attacker becomes a Pmid
The attack would be thwarted here, as the vault storage devices are heavily monitored by both DM and PM groups. The DM groups would equal the amount of chunks held which could be considerable. A rouge vault should be detected very fast and de-ranked, becoming useless.


##The attacker becomes a Maid
In this case they are a user and are pretty much locked down in terms of attack vectors. They need a vault etc. and that is all checked by MaidManagers.

It seems the most serious attack would be DM delete data attack. This is limited in it's ability, but does exist and we should think of this one as serious. At the moment if such an attack were carried out (it is extremely difficult) then the simple answer is to increase the group size of the nodes. Not the replicant count, only the close group size. It is extremely limited though to possibly a single chunk.

All ideas and comments welcomed though to add to the continuous improvement.


