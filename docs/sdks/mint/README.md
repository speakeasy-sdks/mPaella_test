# mint

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
    metadata: "in",
    recipient: "corporis",
    reuploadLinkedFiles: false,
  },
  collectionId: "iste",
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
      animationUrl: "saepe",
      attributes: [
        {
          displayType: MintNftAlphaRequestBodyMetadataMetadataObjectAttributesDisplayType.BoostNumber,
          traitType: "ipsa",
          value: "reiciendis",
        },
        {
          displayType: MintNftAlphaRequestBodyMetadataMetadataObjectAttributesDisplayType.Number,
          traitType: "mollitia",
          value: "laborum",
        },
        {
          displayType: MintNftAlphaRequestBodyMetadataMetadataObjectAttributesDisplayType.BoostNumber,
          traitType: "dolorem",
          value: "corporis",
        },
      ],
      description: "explicabo",
      image: "nobis",
      name: "Guadalupe Hickle",
    },
    recipient: "accusantium",
    reuploadLinkedFiles: false,
  },
  collectionId: "iure",
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
    metadata: "doloribus",
    recipient: "sapiente",
    reuploadLinkedFiles: false,
  },
  collectionId: "architecto",
  nftName: "mollitia",
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
  collectionId: "dolorem",
  id: "a2fa9467-7392-451a-a52c-3f5ad019da1f",
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
  collectionId: "voluptatibus",
  page: 8781.94,
  perPage: 4686.51,
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

