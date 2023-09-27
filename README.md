# crossmint-main

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/mPaella_test
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/mPaella_test
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { CrossmintMain } from "crossmint-main";
import { CollectionInfoResponse } from "crossmint-main/dist/sdk/models/operations";

const sdk = new CrossmintMain({
  security: {
    clientSecret: "",
    projectId: "",
  },
});

sdk.collection.collectionInfo({
  collectionId: "provident",
}).then((res: CollectionInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [collection](docs/sdks/collection/README.md)

* [collectionInfo](docs/sdks/collection/README.md#collectioninfo) - Collection information
* [createCollection](docs/sdks/collection/README.md#createcollection) - Create collection
* [createCollectionCustom](docs/sdks/collection/README.md#createcollectioncustom) - Create a collection with a custom provided UUID
* [disableRoyaltyInformation](docs/sdks/collection/README.md#disableroyaltyinformation) - Remove royalties
* [editRoyaltyInformation](docs/sdks/collection/README.md#editroyaltyinformation) - Set royalties
* [getRoyaltyInformation](docs/sdks/collection/README.md#getroyaltyinformation) - Fetch royalty configuration
* [listCollections](docs/sdks/collection/README.md#listcollections) - List all collections

### [edit](docs/sdks/edit/README.md)

* [editNft](docs/sdks/edit/README.md#editnft) - Edit NFT

### [mint](docs/sdks/mint/README.md)

* [mintNft](docs/sdks/mint/README.md#mintnft) - Mint an NFT
* [mintNftAlpha](docs/sdks/mint/README.md#mintnftalpha) - Mint an NFT - Compressed
* [mintNftIdempotentAlpha](docs/sdks/mint/README.md#mintnftidempotentalpha) - Mint an NFT (Idempotent) - Compressed
* [mintStatus](docs/sdks/mint/README.md#mintstatus) - Mint Status
* [mintStatusList](docs/sdks/mint/README.md#mintstatuslist) - Mint Status List
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
