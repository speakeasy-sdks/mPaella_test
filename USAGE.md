<!-- Start SDK Example Usage [usage] -->
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
        collectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->