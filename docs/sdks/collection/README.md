# Collection
(*collection*)

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

async function run() {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "<YOUR_API_KEY_HERE>",
      projectId: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.collection.collectionInfo({
    collectionId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CollectionInfoRequest](../../sdk/models/operations/collectioninforequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CollectionInfoResponse](../../sdk/models/operations/collectioninforesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCollection

Create a collection with a random UUID

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";
import { CreateCollectionChain } from "crossmint-main/dist/sdk/models/operations";

async function run() {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "<YOUR_API_KEY_HERE>",
      projectId: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.collection.createCollection({
    metadata: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.CreateCollectionRequestBody](../../sdk/models/operations/createcollectionrequestbody.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateCollectionResponse](../../sdk/models/operations/createcollectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCollectionCustom

Create a collection with a custom provided UUID

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";
import { Chain } from "crossmint-main/dist/sdk/models/operations";

async function run() {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "<YOUR_API_KEY_HERE>",
      projectId: "<YOUR_API_KEY_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreateCollectionCustomRequest](../../sdk/models/operations/createcollectioncustomrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateCollectionCustomResponse](../../sdk/models/operations/createcollectioncustomresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## disableRoyaltyInformation

Remove all royalties from a given collection. No new NFT sales will yield royalties to the creator.

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";

async function run() {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "<YOUR_API_KEY_HERE>",
      projectId: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.collection.disableRoyaltyInformation({
    collectionId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DisableRoyaltyInformationRequest](../../sdk/models/operations/disableroyaltyinformationrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DisableRoyaltyInformationResponse](../../sdk/models/operations/disableroyaltyinformationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## editRoyaltyInformation

Configure royalties for all NFTs in a collection.

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";

async function run() {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "<YOUR_API_KEY_HERE>",
      projectId: "<YOUR_API_KEY_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.EditRoyaltyInformationRequest](../../sdk/models/operations/editroyaltyinformationrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.EditRoyaltyInformationResponse](../../sdk/models/operations/editroyaltyinformationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getRoyaltyInformation

Fetch the royalty config for a collection, from its current state in the blockchain.

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";

async function run() {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "<YOUR_API_KEY_HERE>",
      projectId: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.collection.getRoyaltyInformation({
    collectionId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetRoyaltyInformationRequest](../../sdk/models/operations/getroyaltyinformationrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetRoyaltyInformationResponse](../../sdk/models/operations/getroyaltyinformationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCollections

List all of your collections on Crossmint

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";

async function run() {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "<YOUR_API_KEY_HERE>",
      projectId: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.collection.listCollections();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListCollectionsResponse](../../sdk/models/operations/listcollectionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
