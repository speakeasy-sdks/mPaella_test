<!-- Start SDK Example Usage -->


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
    collectionId: "Northwest calculate",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->