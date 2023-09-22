# Edit

### Available Operations

* [editNft](#editnft) - Edit NFT

## editNft

Edit a minted NFT's metadata on IPFS. <br> **This API is subject to change as it is currently in it's alpha form.** <br> <h2>Editing is not supported for compressed Solana NFTs</h2>

### Example Usage

```typescript
import { CrossmintMain } from "crossmint-main";
import { EditNftRequestBodyMetadataAttributesDisplayType, EditNftResponse } from "crossmint-main/dist/sdk/models/operations";

const sdk = new CrossmintMain({
  security: {
    clientSecret: "",
    projectId: "",
  },
});

sdk.edit.editNft({
  requestBody: {
    metadata: {
      animationUrl: "nisi",
      attributes: [
        {
          displayType: EditNftRequestBodyMetadataAttributesDisplayType.Number,
          traitType: "temporibus",
          value: "ab",
        },
      ],
      description: "quis",
      image: "veritatis",
      name: "Christopher Hills",
    },
    reuploadLinkedFiles: false,
  },
  collectionId: "quo",
  id: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
}).then((res: EditNftResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.EditNftRequest](../../models/operations/editnftrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.EditNftResponse](../../models/operations/editnftresponse.md)>**

