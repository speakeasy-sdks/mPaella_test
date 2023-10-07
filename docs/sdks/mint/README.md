# Mint
(*mint*)

### Available Operations

* [mintNft](#mintnft) - Mint an NFT
* [mintNftAlpha](#mintnftalpha) - Mint an NFT - Compressed
* [mintNftIdempotentAlpha](#mintnftidempotentalpha) - Mint an NFT (Idempotent) - Compressed
* [mintStatus](#mintstatus) - Mint Status
* [mintStatusList](#mintstatuslist) - Mint Status List

## mintNft

Mint your NFTs and deliver them either to a web3 wallet or to a web2 email address seamlessly with our API.

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";

(async() => {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "",
      projectId: "",
    },
  });

  const res = await sdk.mint.mintNft({
    requestBody: {
      metadata: "Handmade",
    },
    collectionId: "Developer",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.MintNftRequest](../../models/operations/mintnftrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.MintNftResponse](../../models/operations/mintnftresponse.md)>**


## mintNftAlpha

This will mint your NFT with compression on Solana.

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";

(async() => {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "",
      projectId: "",
    },
  });

  const res = await sdk.mint.mintNftAlpha({
    requestBody: {
      metadata: "Account",
    },
    collectionId: "Pants",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.MintNftAlphaRequest](../../models/operations/mintnftalpharequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.MintNftAlphaResponse](../../models/operations/mintnftalpharesponse.md)>**


## mintNftIdempotentAlpha

This pathway allows you to mint NFTs and  guarantee idempotency

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";

(async() => {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "",
      projectId: "",
    },
  });

  const res = await sdk.mint.mintNftIdempotentAlpha({
    requestBody: {
      metadata: "Cotton",
    },
    collectionId: "Intranet",
    nftName: "finesse Estonia disintermediate",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.MintNftIdempotentAlphaRequest](../../models/operations/mintnftidempotentalpharequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.MintNftIdempotentAlphaResponse](../../models/operations/mintnftidempotentalpharesponse.md)>**


## mintStatus

Get the status and associated information for a mint operation

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";

(async() => {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "",
      projectId: "",
    },
  });

  const res = await sdk.mint.mintStatus({
    collectionId: "interfaces",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.MintStatusRequest](../../models/operations/mintstatusrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.MintStatusResponse](../../models/operations/mintstatusresponse.md)>**


## mintStatusList

Get a list of status and associated information for all mint operations in a given collection.

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";

(async() => {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "",
      projectId: "",
    },
  });

  const res = await sdk.mint.mintStatusList({
    collectionId: "World Movies Northwest",
    page: 9598.86,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.MintStatusListRequest](../../models/operations/mintstatuslistrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.MintStatusListResponse](../../models/operations/mintstatuslistresponse.md)>**

