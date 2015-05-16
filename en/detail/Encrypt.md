### Encrypt Overview

Self encrypting files (convergent encryption plus obfuscation)

A version of [convergent encryption](http://en.wikipedia.org/wiki/Convergent_encryption) with an additional obfuscation step. This pattern allows secured data that can also be [de-duplicated](http://en.wikipedia.org/wiki/Data_deduplication). This library presents an API that can be utilised in any application that provides a POSIX like filesystem interface, dealing very effectively with the content part of any data (in tests the parallelised approach can actually be faster than reading/writing data as a single stream). It is important to realise two important aspects of this library:

This library deals with file content only
This library provides very secure data, but does return a data structure (DataMap) that in turn requires to be secured.

![](https://raw.githubusercontent.com/maidsafe/self_encryption/master/img/self-encryption.png)

## Video of the process
[self_encryption process and use case video](https://www.youtube.com/watch?v=Jnvwv4z17b4)

###Examples
####Using ```self_encryptor```


This library splits a file into encrypted chunks and also produces a data map for the same. This data map with encrypted chunks enables the file to be reconstituted. Instructions to use the 'basic_encryptor' example are as follows:

1. Install RUST(Nightly build).

    * OSX / Linux: ```
curl -s https://static.rust-lang.org/rustup.sh | sudo sh -s -- --channel=nightly```

    * Windows: Download Exe installer from http://www.rust-lang.org/install.html

2. Install gcc.

    * Linux: ```
sudo apt-get install gcc```

    * Windows: Any compatible gcc such as [TDM-GCC](http://tdm-gcc.tdragon.net/download)

3. Clone this repo / Download as zip and extract archive.

    * To clone via Git: ```git clone http://github.com/maidsafe/self_encryption.git```
    
4. Browse to repo locally in terminal / command prompt.
    * ```
cd self_encryption```

5. Encrypt a file:

```
cargo run --example basic_encryptor -- -e <full_path_to_any_file>```

You should now have the example binary in ```
../self_encryption/target/debug/examples/``. 
The data_map for the given file and it's encrypted chunks will be written to the current directory.

5. Decrypt a file
```
cargo run --example basic_encryptor -- -d <full_path_to_data_map> <full_destination_path_including_filename>```

This will restore the original file to the given destination path.



