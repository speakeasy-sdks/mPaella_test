# Edit
(*edit*)

### Available Operations

* [editNft](#editnft) - Edit NFT

## editNft

Edit a minted NFT's metadata on IPFS. <br> **This API is subject to change as it is currently in it's alpha form.** <br> <h2>Editing is not supported for compressed Solana NFTs</h2>

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";
import { DisplayType } from "crossmint-main/dist/sdk/models/operations";

async function run() {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "<YOUR_API_KEY_HERE>",
      projectId: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.edit.editNft({
    requestBody: {
      metadata: {
        attributes: [
          {
            traitType: "<value>",
            value: "<value>",
          },
        ],
        description: "Up-sized regional hardware",
        image: "https://loremflickr.com/640/480",
        name: "<value>",
      },
    },
    collectionId: "<value>",
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.EditNftRequest](../../sdk/models/operations/editnftrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.EditNftResponse](../../sdk/models/operations/editnftresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
