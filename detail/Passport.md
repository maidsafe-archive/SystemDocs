## Passport Overview

The Passport API provides a self-certifying Public Key Infrastructure, PKI, independent of the requirement for any central directory. A variety of key types are available for performing different tasks, while public keys, like any other piece of data, are stored at random locations on the SAFE network. Authorised entities can retrieve public keys from the network in order to validate any other entity or perform various other operations both securely and autonomously. The API relies on a cryptographic component that forms part of the [common](https://github.com/maidsafe/MaidSafe-Common/wiki) project.

## Description

The following files comprise Passport's public API.

* [passport.h](https://github.com/maidsafe/MaidSafe-Passport/blob/master/include/maidsafe/passport/passport.h) includes the Passport class definition and various free functions which together satisfy the requirements for completely secure and anonymous transactions/communication on the network. The Passport class members are identities defined in the header [types.h](https://github.com/maidsafe/MaidSafe-Passport/blob/master/include/maidsafe/passport/types.h).
* [types.h](https://github.com/maidsafe/MaidSafe-Passport/blob/master/include/maidsafe/passport/types.h) defines network identities for authentication, data storage/retrieval and secure communication.



