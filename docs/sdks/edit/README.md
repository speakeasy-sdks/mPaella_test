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

(async() => {
  const sdk = new CrossmintMain({
    security: {
      clientSecret: "",
      projectId: "",
    },
  });

  const res = await sdk.edit.editNft({
    requestBody: {
      metadata: {
        attributes: [
          {
            traitType: "string",
            value: "string",
          },
        ],
      },
    },
    collectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |
