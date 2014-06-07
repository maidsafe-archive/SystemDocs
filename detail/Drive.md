### Overview

The MaidSafe-Drive library presents a user-mode interface to the kernel-mode modules Eldos' [Callback File System][cbfs], [Fuse][fuse] and [OSXFuse][osxfuse] available for Windows, Linux and Mac platforms respectively. In each case a virtual drive can be mounted and presented as a native drive on the system. Filesystem operations performed on the drive are filtered to relevant callback functions the user-mode code has registered to handle. Directories/files are encrypted using the facilities present in [Encrypt][encrypt], while they are stored/retrieved directly to/form the network via [Network-Filesystem][nfs], [Routing][routing] and [RUDP][rudp]. The space available/used on the drive is derived from the values a client reports it's Vault's to have offered to/used on the network.   

### Details

The MaidSafe-Drive API includes the following files:

* [drive_api.h][drive_api] defines the base class with shared interface to the platform specific derived classes defined in the header files outlined below.	
* [win_drive.h][win_drive] includes user-mode code specific to Windows and [Callback File System][cbfs].	
* [unix_drive.h][unix_drive] includes user-mode code specific to Linux and [Fuse][fuse].	
* [config.h][config] provides convenient typdef's and constants.		

Further details describing the class interfaces, etc., can be found within the files and also in the supporting material available to the library.

[fuse]: http://fuse.sourceforge.net/
[osxfuse]: http://osxfuse.github.io/
[cbfs]: https://www.eldos.com/cbfs/
[encrypt]: https://github.com/maidsafe/MaidSafe-Encrypt/wiki
[nfs]: https://github.com/maidsafe/MaidSafe-Network-Filesystem/wiki
[routing]: https://github.com/maidsafe/MaidSafe-Routing/wiki
[rudp]: https://github.com/maidsafe/MaidSafe-RUDP/wiki
[drive_api]: https://github.com/maidsafe/MaidSafe-Drive/blob/master/include/maidsafe/drive/drive_api.h
[win_drive]: https://github.com/maidsafe/MaidSafe-Drive/blob/master/include/maidsafe/drive/win_drive.h
[unix_drive]: https://github.com/maidsafe/MaidSafe-Drive/blob/master/include/maidsafe/drive/unix_drive.h
[config]: https://github.com/maidsafe/MaidSafe-Drive/blob/master/include/maidsafe/drive/config.h

  