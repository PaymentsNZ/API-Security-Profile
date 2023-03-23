# V3.0.0-draft2 schemas

This folder contains schemas for the V3.0.0 security profile. This includes:

- Client authentication [schema](./client-authentication/jwt-bearer-auth-schema.json) (for use with `private_key_jwt`)
- Authorization Code Flow request [schema](./authorization-code-flow/authorization-request-schema.json) for Pushed Authorization Requests with PKCE, PAR response [schema](./authorization-code-flow/PAR-response-schema.json) and JARM response [schema](./authorization-code-flow/JARM-response-schema.json)
- Hybrid flow authorization request [schema](./hybrid-flow/authorization-request-schema.json)
- CIBA decoupled flow relevant [schemas](./ciba-flow/README.md)
- ID token [schema](./id-token/id-token-body-schema.json)
- Generic JWS header [schema](./common/JOSE-header-schema.json)
- Authorisation Server Metadata [schema](authorization-server-metadata/metadata-schema.json)

These are assistive in nature, and supplementary to the Security Profile documentation. It is highly recommended to follow that documentation first.

## Testing schema validation

One method of validating test data with JSON schemas is to use `ajv`, via:

```bash
npx ajv-cli --strict=false -s .\schema.json -d .\data.json
```

__Note:__ the `--strict=false` is a `ajv` workaround for "format": "uri", which is valid JSON schema in draft-07, but not recognised by `ajv`
