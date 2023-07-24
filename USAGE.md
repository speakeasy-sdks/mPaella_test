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
  collectionId: "corrupti",
}).then((res: CollectionInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->