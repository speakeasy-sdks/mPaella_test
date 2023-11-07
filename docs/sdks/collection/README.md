# Collection
(*.collection*)

### Available Operations

* [collectionInfo](#collectioninfo) - Collection information
* [createCollection](#createcollection) - Create collection
* [createCollectionCustom](#createcollectioncustom) - Create a collection with a custom provided UUID
* [disableRoyaltyInformation](#disableroyaltyinformation) - Remove royalties
* [editRoyaltyInformation](#editroyaltyinformation) - Set royalties
* [getRoyaltyInformation](#getroyaltyinformation) - Fetch royalty configuration
* [listCollections](#listcollections) - List all collections

## collectionInfo

Get information about a specific collection

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

  const res = await sdk.collection.collectionInfo({
    collectionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CollectionInfoRequest](../../models/operations/collectioninforequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CollectionInfoResponse](../../models/operations/collectioninforesponse.md)>**


## createCollection

Create a collection with a random UUID

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";
import { CreateCollectionChain } from "crossmint-main/dist/sdk/models/operations";

(async() => {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "",
      projectId: "",
    },
  });

  const res = await sdk.collection.createCollection({
    metadata: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateCollectionRequestBody](../../models/operations/createcollectionrequestbody.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateCollectionResponse](../../models/operations/createcollectionresponse.md)>**


## createCollectionCustom

Create a collection with a custom provided UUID

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";
import { Chain } from "crossmint-main/dist/sdk/models/operations";

(async() => {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "",
      projectId: "",
    },
  });

  const res = await sdk.collection.createCollectionCustom({
    requestBody: {
      metadata: {},
    },
    collectionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.CreateCollectionCustomRequest](../../models/operations/createcollectioncustomrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateCollectionCustomResponse](../../models/operations/createcollectioncustomresponse.md)>**


## disableRoyaltyInformation

Remove all royalties from a given collection. No new NFT sales will yield royalties to the creator.

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

  const res = await sdk.collection.disableRoyaltyInformation({
    collectionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.DisableRoyaltyInformationRequest](../../models/operations/disableroyaltyinformationrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DisableRoyaltyInformationResponse](../../models/operations/disableroyaltyinformationresponse.md)>**


## editRoyaltyInformation

Configure royalties for all NFTs in a collection.

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

  const res = await sdk.collection.editRoyaltyInformation({
    requestBody: {
      recipients: [
        {
          address: "0x71C...",
          basisPoints: 100,
        },
      ],
    },
    collectionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.EditRoyaltyInformationRequest](../../models/operations/editroyaltyinformationrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.EditRoyaltyInformationResponse](../../models/operations/editroyaltyinformationresponse.md)>**


## getRoyaltyInformation

Fetch the royalty config for a collection, from its current state in the blockchain.

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

  const res = await sdk.collection.getRoyaltyInformation({
    collectionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetRoyaltyInformationRequest](../../models/operations/getroyaltyinformationrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetRoyaltyInformationResponse](../../models/operations/getroyaltyinformationresponse.md)>**


## listCollections

List all of your collections on Crossmint

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

  const res = await sdk.collection.listCollections();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListCollectionsResponse](../../models/operations/listcollectionsresponse.md)>**

