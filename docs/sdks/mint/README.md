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
import { MintNftRequestBodyMetadataMetadataObjectAttributesDisplayType, MintNftResponse } from "crossmint-main/dist/sdk/models/operations";

const sdk = new CrossmintMain({
  security: {
    clientSecret: "",
    projectId: "",
  },
});

sdk.mint.mintNft({
  requestBody: {
    metadata: {
      animationUrl: "Niobium communities Developer",
      attributes: [
        {
          displayType: MintNftRequestBodyMetadataMetadataObjectAttributesDisplayType.BoostPercentage,
          traitType: "Paradigm Knolls navigate",
          value: "male Adaptive",
        },
      ],
      description: "Versatile systematic flexibility",
      image: "https://loremflickr.com/640/480",
      name: "Lake Bedfordshire Man",
    },
    recipient: "Hybrid",
    reuploadLinkedFiles: false,
  },
  collectionId: "Handcrafted driver",
}).then((res: MintNftResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  MintNftAlphaRequestBodyMetadataMetadataObjectAttributesDisplayType,
  MintNftAlphaResponse,
} from "crossmint-main/dist/sdk/models/operations";

const sdk = new CrossmintMain({
  security: {
    clientSecret: "",
    projectId: "",
  },
});

sdk.mint.mintNftAlpha({
  requestBody: {
    metadata: {
      animationUrl: "enact Pants compound",
      attributes: [
        {
          displayType: MintNftAlphaRequestBodyMetadataMetadataObjectAttributesDisplayType.Number,
          traitType: "CLI Classical Intersex",
          value: "Gasoline",
        },
      ],
      description: "Multi-layered global strategy",
      image: "https://loremflickr.com/640/480",
      name: "Oriental",
    },
    recipient: "driver Buckinghamshire mindshare",
    reuploadLinkedFiles: false,
  },
  collectionId: "payment Tasty oof",
}).then((res: MintNftAlphaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  MintNftIdempotentAlphaRequestBodyMetadataMetadataObjectAttributesDisplayType,
  MintNftIdempotentAlphaResponse,
} from "crossmint-main/dist/sdk/models/operations";

const sdk = new CrossmintMain({
  security: {
    clientSecret: "",
    projectId: "",
  },
});

sdk.mint.mintNftIdempotentAlpha({
  requestBody: {
    metadata: {
      animationUrl: "Northwest laborum",
      attributes: [
        {
          displayType: MintNftIdempotentAlphaRequestBodyMetadataMetadataObjectAttributesDisplayType.Number,
          traitType: "Estonia disintermediate",
          value: "abnormally",
        },
      ],
      description: "De-engineered systemic methodology",
      image: "https://loremflickr.com/640/480",
      name: "green Soap",
    },
    recipient: "withdrawal maximize",
    reuploadLinkedFiles: false,
  },
  collectionId: "tender partnerships",
  nftName: "mobile",
}).then((res: MintNftIdempotentAlphaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { MintStatusResponse } from "crossmint-main/dist/sdk/models/operations";

const sdk = new CrossmintMain({
  security: {
    clientSecret: "",
    projectId: "",
  },
});

sdk.mint.mintStatus({
  collectionId: "interfaces",
  id: "<ID>",
}).then((res: MintStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { MintStatusListResponse } from "crossmint-main/dist/sdk/models/operations";

const sdk = new CrossmintMain({
  security: {
    clientSecret: "",
    projectId: "",
  },
});

sdk.mint.mintStatusList({
  collectionId: "World Movies Northwest",
  page: 9598.86,
  perPage: 2733.12,
}).then((res: MintStatusListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.MintStatusListRequest](../../models/operations/mintstatuslistrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.MintStatusListResponse](../../models/operations/mintstatuslistresponse.md)>**

