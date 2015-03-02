# Libraries

The SAFE network is comprised of 9 individual libraries. The following section, aimed at the more technical reader, provides a more detailed explanation of what role each library performs and how they work.

The code for each library is available in MaidSafe's [GitHub repository](https://github.com/maidsafe). The libraries are:

1.  Common - a library of utility functions
2.  Passport - provides a self-certifying Public Key Infrastructure, PKI, independent of the requirement for any central directory
3.  RUDP - implementation of Reliable UDP
4.  Routing - routing is a Distributed Hash Table (DHT) library based on Kademlia-like routing tables
5.  Encrypt - MaidSafe Encrypt implements functions related to 'self-encryption' of files and folders
6.  Drive - MaidSafe-Drive is a virtual drive offering services to store and retrieve information to any storage media including network file systems
7.  Network FileSystem - treats the MaidSafe network as a filesystem. Exposes a pseudo restful interface (GET PUT POST DELETE)
8.  Vault Manager - Data Storage, Data Types and the LifeStuff Manager.
9.  Vault - Self healing, self managing and fully distributed network


