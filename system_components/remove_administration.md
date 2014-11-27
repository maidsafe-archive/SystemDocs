# Remove administration

The SAFE Network is autonomous and therefore no administrators are required to manage and maintain data, or the network itself. Each Vault constantly adapts to its local environment and ongoing data integrity checks detect corruption and mutation within data chunks, by checking the hash of each chunk.

The network automatically maintains four live copies of each piece of data, but also up to 16 dead copies, as offline machines are likely to re-join the network at some point in the future.

Data is also stored at random across the 2^512 address space by the network. This automatically distributes the load evenly across the network, which is a task traditionally undertaken by network administrators.
