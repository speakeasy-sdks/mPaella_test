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
    metadata: {
      animationUrl: "perferendis",
      attributes: [
        {
          displayType: MintNftRequestBodyMetadataMetadataObjectAttributesDisplayType.BoostNumber,
          traitType: "natus",
          value: "sed",
        },
      ],
      description: "iste",
      image: "dolor",
      name: "Lester Welch",
    },
    recipient: "in",
    reuploadLinkedFiles: false,
  },
  collectionId: "corporis",
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
    metadata: "iure",
    recipient: "saepe",
    reuploadLinkedFiles: false,
  },
  collectionId: "quidem",
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
      animationUrl: "ipsa",
      attributes: [
        {
          displayType: MintNftIdempotentAlphaRequestBodyMetadataMetadataObjectAttributesDisplayType.Number,
          traitType: "est",
          value: "mollitia",
        },
      ],
      description: "laborum",
      image: "dolores",
      name: "Stacy Champlin",
    },
    recipient: "omnis",
    reuploadLinkedFiles: false,
  },
  collectionId: "nemo",
  nftName: "minima",
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
  collectionId: "excepturi",
  id: "07aff1a3-a2fa-4946-b739-251aa52c3f5a",
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
  collectionId: "possimus",
  page: 135.71,
  perPage: 971.01,
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

