# Self Authentication

A critical requirement of a network that will not leak privacy is to allow people to interact with it in a manner that only that person is aware of. Self authentication is a mechanism which provides such a service. 

##Introduction

Authentication allows access to a system at a certain level or privilege. This is generally accepted as the privilege granted by an authoritative 3rd party who owns or manages the particular service or resource being accessed.  In cloud-computing or personal computing this is a limiting factor and a significant security risk.

Many systems and people spread data across multiple locations for improved physical security and ease of access. This has created privacy concerns and increased awareness of ownership of data. Many systems offer some level of encryption to ensure privacy of data, but few, if any, provide physical security of data in a manner that maintains privacy. All known systems to date cannot offer physical security as any of these systems can access even encrypted data and delete it or give others access to it. This physical security requires that a person can store data out of reach of all other people.

In almost every case today there is some form of contract, whether implied or actual between the 3rd party service provider and the client. Furthermore the supplier may independently decide or be forced to act on the data, whether deleting encrypted data, going out of business or becoming a victim of damage or theft.  This situation is a crucial impediment to personal freedom, and without a change in technical capabilities that allow the mindset change that appears more prevalent as time goes by, there will be a significant gulf between people’s individual desires and technology’s ability to deliver. This in itself may impede progress and innovation, which would be an enormous failure of Science and Engineering.

##Trust-less systems

Given a traditional resource exchange, the bargain between involved parties tends to be direct and physically local. However, the de-facto replacement of barter by monetary systems in modern societies introduced the requirement of trust in third parties providing and controlling the necessary infrastructure, such as banks and financial authorities.

It is an illogical consideration to have created a technology based solution which requires this demand of trust, and to do so in a manner that is almost uncontrolled. Technology tends to be based on logic, thus it would appear obvious that creating, sharing and retrieving information fed into a computing device by a person should not require that computer to connect to a network of computers with a controller or guardian that is not a system of pure logic.  A significant reason for the current situation is the inability for identities to be created, managed and personally controlled.  This is a reasonable request from people to make from their technology, but so far has been regarded as impossible by technology professionals. A system of personal identity management is fundamental for the removal of the illogical situation of today.

##Overview 

###Requirements

Self-authentication requires a storage mechanism accessible by the users of the system. This may be public (such as a peer-to-peer network) or private (such a a storage area network); this paper assumes that it should also
be a key addressable storage system.

###Methodology

Self-authentication relies on a system where an entity can create a unique key to store a value in the storage system. The value stored with this key should contain an encrypted passport to data. This passport may be cryptographically secure keys and or a list of other keys to make use of the information to be stored and or shared as well as any additional components required.  The location of this initial key should be masked or at least not obvious in the storage mechanism. Further masking should be considered. This simplified approach is the basis for self authentication and is extended into a system that is capable of security in a manner that allows access data to be stored publicly and with no additional requirement such as firewalls or access controls.

### Pseudo implementation

This is a simplified process to describe the bare mechanism that underpins the self authentication process.

####Creation of an Account
Here we will assume there are two inputs from the user of the system: keyword W, and password W. A salt S is also supplied or derived (in a repeatable way) from K and W.  

To generate a unique identifier, we hash the concatenation of the keyword and the salt, H(U + S).  PBKDF2 Password Based Key Derivation File) is used here to strengthen any password keys used.  This is required as user selected passwords are commonly weak. In this example Account specifies session data, i.e. user details or an index of references to further data.

Store On Network[H(K+S)] Symmetric Encrypt[PBKDF2[P][S]](Account)

####Login

Symmetric Decrypt[PBKDF2[P][S]] (Get from network[H(K+S)])

##Issues


###Guessing login information

One issue people may note is the ability for an intruder or hostile person on the network to simply tests for the presence of a user and download the login token. This is similar to continual testing of password on a centralised server. In centralised servers this is alleviated (apprently not too sucessfully) by backing off login attempts.

In MaidSafe this is alleviated in almost the opposite manner. As a person requests a login token, they are provided with one. Invalid tokens are provided on every attempt. This means that an attacker will have to decrypt many millions or more likely trillions of strongly encrypted login tokens. This process should render such attacks computationally infeasible. 

###Multi factor authentication

A relatively modern phenomenon in computer login security is multi factor authentication or sometimes 2fa (2 factor). This involves a second out of band (meaning using a secondary communication mechanism such as a mobile phone) where a central server or similar requests both the user password and the second factor (via phone etc.) to enable the login to be successful.

In a decentralised network this introduction of a server would in fact compromise security (the server owner has to know at least something about you and can control your access).

In a decentralised network there are opportunities for implementing multi factor authentication via projects such as Trezor or similar. It is anticipated a similar applications will be created for project SAFE to ensure protection against key-loggers and similar attacks on modern day operating systems and public access terminals. 

