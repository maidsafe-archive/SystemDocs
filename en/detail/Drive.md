## Drive Overview

The SAFE Network Drive library presents a user-mode interface to the kernel-mode modules Eldos' [Callback File System](https://www.eldos.com/cbfs/), [Fuse](http://fuse.sourceforge.net/) and [OSXFuse](http://osxfuse.github.io/) available for Windows, Linux and Mac platforms respectively. In each case a virtual drive can be mounted and presented as a native drive on the system. Filesystem operations performed on the drive are filtered to relevant callback functions the user-mode code has registered to handle. Directories/files are encrypted using the facilities present in [Encrypt](https://github.com/maidsafe/MaidSafe-Encrypt/wiki), while they are stored/retrieved directly to/form the network via [Network-Filesystem](https://github.com/maidsafe/MaidSafe-Network-Filesystem/wiki), [Routing](https://github.com/maidsafe/MaidSafe-Routing/wiki) and [RUDP](https://github.com/maidsafe/MaidSafe-RUDP/wiki). The space available/used on the drive is derived from the values a client reports it's Vault's to have offered to/used on the network.

### Details

The Drive API includes the following files:

* [drive_api.h](https://github.com/maidsafe/MaidSafe-Drive/blob/master/include/maidsafe/drive/drive_api.h) defines the base class with shared interface to the platform specific derived classes defined in the header files outlined below.
* [win_drive.h](https://github.com/maidsafe/MaidSafe-Drive/blob/master/include/maidsafe/drive/win_drive.h) includes user-mode code specific to Windows and [Callback File System](https://www.eldos.com/cbfs/).
* [unix_drive.h](https://github.com/maidsafe/MaidSafe-Drive/blob/master/include/maidsafe/drive/unix_drive.h) includes user-mode code specific to Linux and [Fuse](http://fuse.sourceforge.net/).
* [config.h](https://github.com/maidsafe/MaidSafe-Drive/blob/master/include/maidsafe/drive/config.h) provides convenient typdef's and constants.

Further details describing the class interfaces, etc., can be found within the files and also in the supporting material available to the library.




