# How is Data Stored and Retrieved?

[maidsafe.org](https://maidsafe.org/t/how-is-data-stored-and-retrieved/426)

When a file is uploaded, the SAFE Network shatters it into 1Mb chunks, then it makes 4 copies of each chunk and encrypts4 them before planting in vaults throughout the Network. Because of this process, none of the vaults can read any chunk stored with them. Even if they somehow managed to decrypt the 1Mb chunk, they would only have a fragment of the original file and still not know who it belongs too.

Example #1: A user uploads a 10Mb file.
The file is split into 10 chunks (1Mb each) and made into 4 copies. This means there are 40 chunks spread out to 40 vaults. When the user requests that file, they call on 40 vaults. But only the fastest of each (4 vaults per 1Mb chunk) are used to complete the retrieval. The speed at which the user can retrieve their completed file is limited by the fastest copy of the slowest 1Mb chunk arriving at their location.

Example #2: A user uploads a 1Gb file.
The file is split up into 1000 chunks (1Mb each) and made into 4 copies. This means there are 4000 chunks spread out to 4000 vaults. When the user requests that file, they call on 4000 vaults. Only the fastest of each (4 vaults per 1Mb chunk) are used to complete the retrieval. Again the speed at which the user can retrieve their completed file is only limited by the fastest copy of the slowest 1Mb chunk arriving at their location.

Instead of a whole 10Mb file being called from only 4 Vaults, you call 40 (1Mb chunks) from 40 Vaults. This makes a BIG difference in retrieval speed.

Q: What happens in the unlikely event that all 4 vaults which share the same 1Mb chunk are down?

A: The Network solves this problem by duplicating the chunks to a new vault whenever a vault goes offline.
