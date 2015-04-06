## Network Filesystem Overview

The SAFE-Network-Filesystem, NFS, is a policy-based library implementing a RESTful API. Specifically, the main NFS class template accepts template parameters, themselves class types, either template or otherwise, that define the network operations put, get, delete and post. The design scales over various parameters and simplifies the logic required to package up messages for distribution, via [Routing](https://github.com/maidsafe/MaidSafe-Routing/wiki), on behalf of a client or [Vault](https://github.com/maidsafe/MaidSafe-Vault/wiki) persona.

### Details

The API covers a number of files defining the main NetworkFileSystem class template, the policy classes and various support/helper structures and functions. The full list of files, along with a brief explanation of each, is given below. Note that files named with the following scheme *-inl.h implement non-specialised member functions, member templates and function templates declared in the corresponding *.h file and are not included in the list.

* [maid_node_nfs](https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/client/maid_node_nfs.h) defines the NetworkFileSystem class template whose template arguments determine the put, get, delete and post policies an instantiated object will use for network operations.
* data_policies.h includes a DataPolicy class template used by clients and the various persona's defined in [Vault](https://github.com/maidsafe/MaidSafe-Vault/wiki).
* client_post_policies.h used by a client for network communication.
* client_utils.h contains some utility functions and classes available to a client.
* structured_data.h provides the class interface for holding structured data versions.
* [message.h](https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/vault/messages.h) defines the generic Message class whose packaged content is sent to a recipient node on the network responsible, either directly or indirectly, for it's content. Note that it may require a number of hops for a message to reach it's destination, the details of which are taken care of in the DHT implementation provided by [Routing](https://github.com/maidsafe/MaidSafe-Routing/wiki).
* reply.h defines the Reply class, that is initialised to provide information on the outcome of an network operation.
* person_id.h defines a struct containing a recipient nodes' identity on the network as well as the target persona of a message.
* [data_getter.h](https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/client/data_getter.h) defines a class used to retrieve public keys of various types stored on the network, see [Passport](https://github.com/maidsafe/MaidSafe-Passport/wiki) for the key types available.
* [pmid_registration.h](https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/vault/pmid_registration.h) contains a class whose members allow the authenticated registration of a [Vault](https://github.com/maidsafe/MaidSafe-Vault/wiki).
* [types.h](https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/types.h) includes convenient type definitions and enum's used for messaging.
* [utils.h](https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/utils.h) includes utility functions and classes used by the library.

### Application

LifeStuff client transactions/communications are packaged via a ClientMaidNfs object, as outlined below.

```C++
typedef PutDataPolicy<Maid, Persona::kClientMaid> Put;
typedef GetDataPolicy<Maid, Persona::kClientMaid> Get;
typedef DeleteDataPolicy<Maid, Persona::kClientMaid> Delete;
typedef ClientPostPolicy<Maid, Persona::kClientMaid> Post;

typedef NetworkFileSystem<Put, Get, Delete, Post> ClientMaidNfs;
```

Here, the ClientMaidNfs is defined as an instance of NetworkFileSystem, with policies PutDataPolicy, GetDataPolicy, DeleteDataPolicy and ClientPostPolicy, all class templates, each taking template arguments for a signing identity and the persona type of the object, a Maid and Persona::kClientMaid, respectively, in this case.

The NetworkFileSystem class template and defined policy classes exposed by this library are also used to compose the various vault persona Nfs objects required by [Vault's](https://github.com/maidsafe/MaidSafe-Vault/wiki).


[0]: https://github.com/maidsafe/MaidSafe-Routing/wiki
[1]: https://github.com/maidsafe/MaidSafe-Vault/wiki
[2]: https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/client/maid_node_nfs.h
[3]: https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/vault/messages.h
[4]: https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/client/data_getter.h
[5]: https://github.com/maidsafe/MaidSafe-Passport/wiki
[6]: https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/vault/pmid_registration.h
[7]: https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/types.h
[8]: https://github.com/maidsafe/MaidSafe-Network-Filesystem/blob/master/include/maidsafe/nfs/utils.h
