# edit

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
          traitType: "ab",
          value: "quis",
        },
        {
          displayType: EditNftRequestBodyMetadataAttributesDisplayType.BoostNumber,
          traitType: "deserunt",
          value: "perferendis",
        },
        {
          displayType: EditNftRequestBodyMetadataAttributesDisplayType.BoostPercentage,
          traitType: "repellendus",
          value: "sapiente",
        },
        {
          displayType: EditNftRequestBodyMetadataAttributesDisplayType.Number,
          traitType: "odit",
          value: "at",
        },
      ],
      description: "at",
      image: "maiores",
      name: "Bernadette Schmidt",
    },
    reuploadLinkedFiles: false,
  },
  collectionId: "porro",
  id: "a1ba928f-c816-4742-8b73-9205929396fe",
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

