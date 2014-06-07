## Overview

The Passport API provides a self-certifying Public Key Infrastructure, PKI, independent of the requirement for any central directory. A variety of key types are available for performing different tasks, while public keys, like any other piece of data, are stored at random locations on the [maidsafe][0] network. Authorised entities can retrieve public keys from the network in order to validate any other entity or perform various other operations both securely and autonomously. The API relies on a cryptographic component that forms part of the [common][1] project.      

## Description

The following files comprise Passport's public API.

* [passport.h][3] includes the Passport class definition and various free functions which together satisfy the requirements for completely secure and anonymous transactions/communication on the network. The Passport class members are identities defined in the header [types.h][4].
* [types.h][4] defines network identities for authentication, data storage/retrieval and secure communication. 

[0]: https://github.com/maidsafe/MaidSafe/wiki
[1]: https://github.com/maidsafe/MaidSafe-Common/wiki
[3]: https://github.com/maidsafe/MaidSafe-Passport/blob/master/include/maidsafe/passport/passport.h
[4]: https://github.com/maidsafe/MaidSafe-Passport/blob/master/include/maidsafe/passport/types.h
