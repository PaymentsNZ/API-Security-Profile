# V2.1.0 schemas

This folder contains schemas for the V2.1.0 security profile. This includes:

- Client authentication [schema](./client-authentication/jwt-bearer-auth-schema.json) (for use with `private_key_jwt` and `client_secret_jwt` authentication)
- Hybrid flow authorization request [schema](./hybrid-flow/authorization-request-schema.json)
- CIBA decoupled flow relevant [schemas](./ciba-flow/README.md)
- ID token [schema](./id-token/id-token-body-schema.json)
- Generic JWS header [schema](./common/JOSE-header-schema.json)

These are assistive in nature, and supplementary to the Security Profile documentation. It is highly recommended to follow that documentation first.
