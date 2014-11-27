# Safecoin requests and roles
There are different safecoin types of requests.
* PUT - used to put safecoins (data) to a specified location
* GET - used to get safecoins (data) from a specified location
* EXCHANGE - used to change safecoins (data) between two specified locations

Safecoins are another type of data and it has PUT and GET requests defined for it on the SAFE Network. However, unlike normal data, there is no DELETE request available.

The PUT request for safecoins has a "no duplication allowed" property. This means that if there is already a safecoin with the same name (first 32 bits), the PUT request is rejected. This check is handled by the Data manager receiving the request.

An EXCHANGE allows a requester to update the details of the safecoin but only if it follows the necessary rules.

* Owner is approved by the majority of 3rd party Vaults (escrow).
* Owner can (previous and current owners considered as approved themselves) update all fields.
* Each 3rd party Vaults (escrow) can only update their correspondent field once.
* Each time previous and current owner fields get updated, the safecoin version must be increased by one, and all escrow fields are erased.

The above rules are enforced by the Pmid manager holding the safecoin data. As the ownership field, together with the 3rd party Vaults (escrow) fields, are used as a 'transaction', the Pmid manager effectively becomes the Transaction manager. In this instance, the safecoin data can also be considered as a receipt object as well.
