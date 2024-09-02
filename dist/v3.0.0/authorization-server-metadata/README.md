# PNZ Authorisation Server Metadata

## Schema

The [schema](metadata-schema.json) may be used to validate authorisation server metadata.  For example:

- `npx ajv validate -c ajv-formats -s .\metadata-schema.json -d .\example.json`

This validates the indicated `example.json`.
