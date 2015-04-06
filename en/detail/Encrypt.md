### Overview

The SAFE Network Encrypt library implements functions related to 'self-encryption' of files and folders.

The library's interface is provided in the following files:

* [self_encryptor.h](https://github.com/maidsafe/MaidSafe-Encrypt/blob/master/include/maidsafe/encrypt/self_encryptor.h) - this is the main API and is discussed in more detail below
* [data_map.h](https://github.com/maidsafe/MaidSafe-Encrypt/blob/master/include/maidsafe/encrypt/data_map.h) - a struct which holds the encryption details of a single file
* [config.h](https://github.com/maidsafe/MaidSafe-Encrypt/blob/master/src/maidsafe/encrypt/config.h) - provides const library configuration variables and return codes.  In the future, the use of return codes will be replaced with the error-handling mechanisms provided in the [Common library](https://github.com/maidsafe/MaidSafe-Common/wiki).

The library makes use of [OpenMP](http://en.wikipedia.org/wiki/OpenMP) where available for parallelisation of tasks.  It also depends on the SAFE Network libraries [Common](https://github.com/maidsafe/MaidSafe-Common/wiki), [Private](https://github.com/maidsafe/MaidSafe-Vault-Manager/wiki), [Passport](https://github.com/maidsafe/MaidSafe-Passport/wiki), [RUDP](https://github.com/maidsafe/MaidSafe-RUDP/wiki), [Routing](https://github.com/maidsafe/MaidSafe-Routing/wiki) and [Network-Filesystem](https://github.com/maidsafe/MaidSafe-Network-Filesystem/wiki).


### Background
[Self-encrypting] (http://maidsafe.net/images/opportunistic-caching.png)
a file needs no other input than the file itself. It results in several encrypted chunks of data which need to be put to a persistent key-value store (e.g. the SAFE Network's vault) and a 'DataMap'.

The DataMap is primarily two lists; one containing the pre-encryption [SHA512 hashes](https://en.wikipedia.org/wiki/SHA-2) of the chunks of the file and the other containing the post-encryption hashes. The pre-encryption hashes of two other chunks from the file are used in the encryption/decryption of a single chunk.  The post-encryption hashes are the names of the encrypted chunks, i.e. the key under which they are stored in the DHT.  The result is that given a DataMap, any user can retrieve the encrypted chunks and decrypt them into the original file.

In the case of directories, the assumption is that the contents (a collection of DataMap and meta information) can be serialised to a single file.  This file, if self-encrypted, yields its own DataMap which also needs to be put to the key-value store.  However, the DataMap cannot be stored unencrypted if the contents are to remain secret.  These directory DataMaps are encrypted/decrypted using two pieces of additional information.  In the case of the SAFE Network, the first piece is normally a random ID which is attributed to that folder.  The second is the ID of the parent folder.  The ID's are suitable for use as keys in the key-value store, i.e. they are strings of the same size as a SHA512 hash.  The ID for a given directory becomes the key under which it's encrypted DataMap is stored.


### Details

[self_encryptor.h](https://github.com/maidsafe/MaidSafe-Encrypt/blob/master/include/maidsafe/encrypt/self_encryptor.h) provides free functions for the encryption and decryption of `DataMap`s.  It also declares the `SelfEncryptor` class which is used in the encryption/decryption of files.

The `SelfEncryptor` class is designed to be compatible with the types of calls expected when using Encrypt under a virtual filesystem (VFS) like [FUSE](http://fuse.sourceforge.net/).  It is designed to be a throwaway class; a new instance will be constructed when a file handle is opened in the VFS and will be destructed when the handle is released.  As such, the class is [conditionally thread safe](http://en.wikipedia.org/wiki/Thread_safety#Levels_of_thread_safety).

The constructor requires a pointer to a `DataMap`, access to the DHT via a non-const ref to a `nfs::ClientMaidNfs` and access to a buffer for temporary chunks via a non-const ref to a `data_store::PermanentStore`.  Furthermore, the number of threads to be used when encrypting/decrypting can be provided.

Further details of the individual functions can be found in the [self_encryptor.h](https://github.com/maidsafe/MaidSafe-Encrypt/blob/master/include/maidsafe/encrypt/self_encryptor.h) file itself.


[se]: https://github.com/maidsafe/MaidSafe-Encrypt/blob/master/include/maidsafe/encrypt/self_encryptor.h "#include "maidsafe/encrypt/self_encryptor.h""
[dm]: https://github.com/maidsafe/MaidSafe-Encrypt/blob/master/include/maidsafe/encrypt/data_map.h "#include "maidsafe/encrypt/data_map.h""
[config]: https://github.com/maidsafe/MaidSafe-Encrypt/blob/master/src/maidsafe/encrypt/config.h "#include "maidsafe/encrypt/config.h""

[common]: https://github.com/maidsafe/MaidSafe-Common/wiki "MaidSafe-Common library"
[private]: https://github.com/maidsafe/MaidSafe-Private/wiki "MaidSafe-Private library"
[passport]: https://github.com/maidsafe/MaidSafe-Passport/wiki "MaidSafe-Passport library"
[rudp]: https://github.com/maidsafe/MaidSafe-RUDP/wiki "MaidSafe-RUDP library"
[routing]: https://github.com/maidsafe/MaidSafe-Routing/wiki "MaidSafe-Routing library"
[nfs]: https://github.com/maidsafe/MaidSafe-Network-Filesystem/wiki "MaidSafe-Network-Filesystem library"
[se_video]: http://maidsafe.net/self-encrypt-video

[omp]: http://en.wikipedia.org/wiki/OpenMP
[sha2]: https://en.wikipedia.org/wiki/SHA-2 "Secure Hashing Algorithm v2 - SHA512"
[fuse]: http://fuse.sourceforge.net/ "Filesystem in Userspace"
[thread_safety]: http://en.wikipedia.org/wiki/Thread_safety#Levels_of_thread_safety "Levels of thread safety"

