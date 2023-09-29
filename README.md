# Delta Node Library (Typescript)

[![npm shield](https://img.shields.io/npm/v/@usedelta/client-sdk-typescript)](https://www.npmjs.com/package/@usedelta/client-sdk-typescript)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

This is the Delta Node.js library that provides access to the Delta API from JS/TypeScript.

## Documentation

API reference documentation is available [here](https://usedelta.alphadoc.io/).

## Installation

```
npm install --save @usedelta/client-sdk-typescript
# or
yarn add @usedelta/client-sdk-typescript
```

## Usage

```typescript
import { DeltaApiClient } from "@usedelta/client-sdk-typescript";

const client = new DeltaApiClient({
  apiKey: "YOUR_API_KEY",
  environment: "https://staging.api.usedelta.io/v1"; // or https://api.usedelta.io/v1
});

client.accounts.getAccounts().then(accounts => {
  // do something with accounts
});
```
