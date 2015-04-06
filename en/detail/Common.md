#Common Overview

The SAFE Network common library provides many components that are widely used by other SAFE Network libraries. Use of these components is strongly encouraged as they are well tested and will evolve over time to increase efficiency and effectiveness.

Generally, the components it presents can be divided into the following groups :

_**Concurrency Helpers**_
* [Active-Object](https://github.com/maidsafe/MaidSafe-Common/wiki/Active-Object) - An implementation of [Active Object Design Pattern](http://en.wikipedia.org/wiki/Active_object). Useful for running operations in a thread safe manner.
* [Asio-Service](https://github.com/maidsafe/MaidSafe-Common/wiki/Asio-Service) - Asynchronous helpers for asynchronous operations and timers based on [Boost ASIO](http://www.boost.org/doc/libs/release/doc/html/boost_asio.html).
* [Safe-Queue](https://github.com/maidsafe/MaidSafe-Common/wiki/Safe-Queue) - An internally synchronised (not lock free) queue based on a [deque](http://en.cppreference.com/w/cpp/container/deque). Please consider [boost lock free](http://www.boost.org/doc/libs/release/doc/html/lockfree.html) structures instead. This container is likely to be deprecated.

_**Type Safety**_
* [Bounded-String](https://github.com/maidsafe/MaidSafe-Common/wiki/Bounded-String) - Create string types with upper and lower 'bounds'
* [Tagged-Value](https://github.com/maidsafe/MaidSafe-Common/wiki/Tagged-Value) - An implementation of [the whole value idiom](http://martin-moene.blogspot.co.uk/2012/07/light-on-whole-value.html)

_**Exception Safety**_
* [Errors-Exceptions](https://github.com/maidsafe/MaidSafe-Common/wiki/Errors-Exceptions) - Error handling system extending ```std::error_code``` and ```std::exception```
* [On-Scope-Exit](https://github.com/maidsafe/MaidSafe-Common/wiki/On-Scope-Exit) - A very handy utility to revert values or perform functions on the event of an exception being thrown.

_**Data Storage**_

The data storage section implements classes which satisfy some of the requirements of the network's RESTful interface; mainly Put, Get and Delete.  They are essentially <key,value> stores, not databases.

Its interface is provided in the following files:

* [permanent_store.h](https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_stores/permanent_store.h) - A persistent storage class using the filesystem as the storage medium.
* [data_buffer.h](https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_stores/data_buffer.h) - A FIFO buffer which uses a combination of disk-based storage and memory-based storage.  It is designed to allow fast read/write to the in-memory portion while a background thread copies the data to the on-disk portion.
* [data_store.h](https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_stores/data_store.h) - A policy-based storage class.  This is currently used in conjunction with the [DataBuffer](https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_stores/data_buffer.h) as the policy.
* [memory_buffer.h](https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_stores/memory_buffer.h) - An in-memory storage class internally using a [`boost::circular_buffer`][boost_circular_buffer] to provide fast, small FIFO storage for non-persistent data.

_**Data Types**_

The data types section is used to pull together the various types of data which the network can handle.  Some types are defined here, others simply are enumerated.  Enumerations of the types are unfortunately required when serialising the data in order to send it to peer nodes on the network.

The interface is provided in the following files:

* [data_type_values.h](https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_types/data_type_values.h) - An enumeration of all data types which can be handled by the MaidSafe Network.
* [immutable_data.h](https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_types/immutable_data.h) - A data type whose content cannot be changed.  Its name is defined as the SHA512 hash of its value.  This is the primary type of data resulting from self-encrypting a file.
* [structured_data_versions.h](https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_types/structured_data_versions.h) - A data type not itself directly put to the network, but rather a means of managing versions of mutable data put to the network.  The versions represent pointers to ImmutableData chunks.
* [mutable_data.h](https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_types/mutable_data.h) - Data types representing serialised versions.  These are used in the context of storing updates to directories; each update becomes a new version.  When a user's directory changes, it is serialised, encrypted if required, and the contents put to the network as ImmutableData.  The name of that piece of ImmutableData is the value of a version (along with a reference to the previous version).  This version is then serialised into a MutableData chunk and stored.  The name of the Directory is a random string and persists for the duration of the directory's lifetime.
* [data_name_variant.h](https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_types/data_name_variant.h) - A [`boost::variant`][boost_variant] of the names of the various types which the network handles.  This is primarily used in the Data Stores, where there is a requirement to hold various types of similarly-structured data, but with different actual name types.

_**General Utilities**_
* [Utils](https://github.com/maidsafe/MaidSafe-Common/wiki/Utils) - A varied mix of utilities, such as hex conversions, random number generators etc.
* [Key Value Buffer](https://github.com/maidsafe/MaidSafe-Common/wiki/Key-Value-Buffer) - A buffered disk writing system with caching ability.
* [Node Id](https://github.com/maidsafe/MaidSafe-Common/wiki/Node-Id) - Utilities to handle 512 bit addresses as used throughout MaidSafe libraries.

_**Cryptographic Helpers**_
* [Crypto Utils](https://github.com/maidsafe/MaidSafe-Common/wiki/Crypto-Utils) - Symmetric encryption, Hash wrappers, secure password wrapper, N+P key sharing (based on Shamir's algorithm)
* [Asymmetric Encryption](https://github.com/maidsafe/MaidSafe-Common/wiki/Asymmetric-Encryption) - Wrapper for asymmetric encryption methods (including safe encrypt), currently supporting RSA.

_**Debug helpers**_
* [Test Runner](https://github.com/maidsafe/MaidSafe/wiki/Running-Tests)
* [Logging](https://github.com/maidsafe/MaidSafe/wiki/Logging-Options)

_**NetWork Viewer**_

[NetWork Viewer](http://visualiser.maidsafe.net:8080/auth) is a UI tool presented by MaidSafe to visualize the MaidSafe-Routing network. It can aid your understanding of how the network functions while facilitating the debugging of routing algorithms.



[boost_circular_buffer]: http://www.boost.org/doc/libs/release/doc/html/circular_buffer.html
[boost_variant]: http://www.boost.org/doc/libs/release/doc/html/variant.html

[permanent_store_h]: https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_stores/permanent_store.h "#include "maidsafe/data_stores/permanent_store.h""
[data_buffer_h]: https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_stores/data_buffer.h "#include "maidsafe/data_stores/data_buffer.h""
[data_store_h]: https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_stores/data_store.h "#include "maidsafe/data_stores/data_store.h""
[memory_buffer_h]: https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_stores/memory_buffer.h "#include "maidsafe/data_stores/memory_buffer.h""
[data_type_values_h]: https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_types/data_type_values.h "#include "maidsafe/data_types/data_type_values.h""
[immutable_data_h]: https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_types/immutable_data.h "#include "maidsafe/data_types/immutable_data.h""
[structured_data_versions_h]: https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_types/structured_data_versions.h "#include "maidsafe/data_types/structured_data_versions.h""
[mutable_data_h]: https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_types/mutable_data.h "#include "maidsafe/data_types/mutable_data.h""
[data_name_variant_h]: https://github.com/maidsafe/MaidSafe-Common/blob/master/include/maidsafe/common/data_types/data_name_variant.h "#include "maidsafe/data_types/data_name_variant.h""
