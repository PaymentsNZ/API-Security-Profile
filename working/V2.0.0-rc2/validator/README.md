# Security Profile example validator

This is a staging project to facilitate the development of schema and schema-validation for Payments NZ Banking API standard.  This repository contains a validation implementation sample to support the development by API providers and consumers using the standard and in particular the security profile.

## Example validation

The example validation is written in NodeJS (v10), and uses [AJV](https://ajv.js.org/).  

### Set up

Clone the repo first, then simply do a `yarn` to set up the project.  This installs required node modules.  

### Run the validator

Do a `yarn validate` to run a sample validation.

#### Specifying data and schema

To run the example validation with specified schema and data use

```bash
yarn validate --src <data-to-validate.json> --schema <schema-to-use.jsom>
```

#### Examples

The following are some supplied examples.

##### JWT Bearer authentication

This is used to validate the content of the `private_key_jwt` or `client_secret_jwt` used for client credential authentication.

```bash
yarn validate --src ../examples/private-key-jwt-content.json --schema ../client-authentication/jwt-bearer-auth-schema.json
```

##### JOSE header

This can be used to check the JOSE header of JWS tokens validates correctly.

```bash
yarn validate --src ../examples/jose-header-data.json --schema ../common/JOSE-header-schema.json
```

##### OIDC hybrid flow authentication request

```bash
yarn validate --src ../examples/authentication-request-2.json --schema ../hybrid-flow/authentication-request-schema.json
```

##### OIDC hybrid flow ID token response

```bash
yarn validate --src ../examples/id-token-response-2.json --schema ../id-token/id-token-body-schema.json
```

##### Token request response

```bash
yarn validate --src ../examples/token-request-response.json --schema ../ciba-flow/token-request-response-schema.json
```

##### CIBA authentication request

```bash
yarn validate --src ../examples/ciba-authentication-request-object.json --schema ../ciba-flow/CIBA-authentication-request-object-schema.json
```

##### CIBA login hint token

```bash
yarn validate --src ../examples/login-hint-token-sample.json --schema ../ciba-flow/CIBA-login-hint-token-schema.json
```

##### CIBA authentication request response

```bash
yarn validate --src ../examples/ciba-authentication-request-response.json --schema ../ciba-flow/CIBA-authentication-request-response-schema.json
```

##### CIBA ping callback

```bash
yarn validate --src ../examples/ping-callback.json --schema ../ciba-flow/CIBA-ping-callback-schema.json
```
