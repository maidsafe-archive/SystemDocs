### Can ISP's thwart the SAFE network

The network uses encrypted [UDP](http://en.wikipedia.org/wiki/User_Datagram_Protocol) payloads to move data around the network. So UDP with unreadable content and hard to distinguish from regular Internet traffic. This will make it extremely difficult for ISP's to detect SAFE network traffic and therefore stop it. Furthermore, all nodes connect on different random ports, so port filtering (a way of controlling access) will not work.

###Is there any way to compromise or disrupt MaidSafe, such as setting up a very large number of computers with poor upload speeds but huge hard drives?

The number of computers would have to massively outnumber the network nodes. When a node joins, its ID is altered by existing nodes and put at a random location. You would have to add a significant number of nodes and be extremely lucky in getting 4 close to each other in the address space. Even then the damage may be limited to a single chunk group.

###How does the network deal with data redundancy, to ensure whatever data is shared remains accessible?

Each file is encrypted and split into chunks during our encryption process (Self Encryption). The network keeps and maintains 4 copies of each encrypted chunk and moves these fragments around the network as nodes become unavailable, either through failure or power down. In order to cope with this churn, the network is able to reconfigure globally extremely quickly (as fast as 20 milliseconds). These steps ensure data is always available, provided the user retrieving the data has an Internet connection and the correct credentials.

###How you deal with the latency inherit in a distributed network like SAFE?

Multiple things facilitate the solution here. Firstly, not one person stores a chunk of data, there are multiple copies of a chunk kept at any given time with a minimum of 4. Furthermore, the network also ranks nodes, for example, if a vault node fails to retrieve a piece of data then a new node replaces it as the holder and the original node gets deranked. If the issue persists, this node will get de-ranked to a point where in future it will not be asked to store any more data. So the network ends up determining which node is effective for storing data. Finally, if a piece of data you’re requesting becomes popular and is retrieved often, it will be cached in more nodes, making the retrieval times even faster. All this will ensure that popular data gets retrieved more quickly

###Why would a distributed network be more secure than a traditional server with the same encryption that you use within SAFE?

This is where physical security plays a big part. Firstly, giving full control of a file to one entity lets them either decrypt it and read it’s content or delete your data. Conversely, decentralisation spreads the data providing multiple sources for each file. Furthermore, actions in the network are also a made based on group consensus, so just one node wanting to do something doesn't enable the task to be completed. Only by majority group agreement are tasks carried out. This makes SAFE extremely robust as the effort to get a group of close nodes together in this network is extremely unlikely.









