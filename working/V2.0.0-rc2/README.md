# V2.0.0-rc2 schemas

This folder contains schemas for the V2.0.0-rc2 security profile.  This includes:

* Client authentication [schema](./client-authentication/jwt-bearer-auth-schema.json) (for use with `private_key_jwt` and `client_secret_jwt` authentication)
* Hybrid flow authorization request [schema](./hybrid-flow/authorization-request-schema.json)
* CIBA decoupled flow relevant [schemas](./ciba-flow/README.md)
* ID token [schema](./id-token/id-token-body-schema.json)
* Generic JWS (JOSE) header [schema](./common/JOSE-header-schema.json)
* [Examples](./examples/README.md) of various request and response
* An example [validator](./validator/README.md)

These are assistive in nature, and supplementary to the Security Profile documentation.  It is highly recommended to follow that documentation first.

## Schema format

The schemas here are written using [JSON schema draft-07](https://json-schema.org/draft-07/json-schema-release-notes.html).
