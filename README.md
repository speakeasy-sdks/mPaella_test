# crossmint-main

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/mPaella_test
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/mPaella_test
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [collection](docs/sdks/collection/README.md)

* [collectionInfo](docs/sdks/collection/README.md#collectioninfo) - Collection information
* [createCollection](docs/sdks/collection/README.md#createcollection) - Create collection
* [createCollectionCustom](docs/sdks/collection/README.md#createcollectioncustom) - Create a collection with a custom provided UUID
* [disableRoyaltyInformation](docs/sdks/collection/README.md#disableroyaltyinformation) - Remove royalties
* [editRoyaltyInformation](docs/sdks/collection/README.md#editroyaltyinformation) - Set royalties
* [getRoyaltyInformation](docs/sdks/collection/README.md#getroyaltyinformation) - Fetch royalty configuration
* [listCollections](docs/sdks/collection/README.md#listcollections) - List all collections

### [mint](docs/sdks/mint/README.md)

* [mintNft](docs/sdks/mint/README.md#mintnft) - Mint an NFT
* [mintNftAlpha](docs/sdks/mint/README.md#mintnftalpha) - Mint an NFT - Compressed
* [mintNftIdempotentAlpha](docs/sdks/mint/README.md#mintnftidempotentalpha) - Mint an NFT (Idempotent) - Compressed
* [mintStatus](docs/sdks/mint/README.md#mintstatus) - Mint Status
* [mintStatusList](docs/sdks/mint/README.md#mintstatuslist) - Mint Status List

### [edit](docs/sdks/edit/README.md)

* [editNft](docs/sdks/edit/README.md#editnft) - Edit NFT
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { CrossmintMain } from "crossmint-main";

async function run() {
    const sdk = new CrossmintMain({
        security: {
            clientSecret: "<YOUR_API_KEY_HERE>",
            projectId: "<YOUR_API_KEY_HERE>",
        },
    });

    let res;
    try {
        res = await sdk.collection.collectionInfo({
            collectionId: "<value>",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://staging.crossmint.com/api` | `env` (default is `staging`) |

#### Example

```typescript
import { CrossmintMain } from "crossmint-main";

async function run() {
    const sdk = new CrossmintMain({
        serverIdx: 0,
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

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `env: models.ServerEnv`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CrossmintMain } from "crossmint-main";

async function run() {
    const sdk = new CrossmintMain({
        serverURL: "https://staging.crossmint.com/api",
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
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { crossmint-main } from "CrossmintMain";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new CrossmintMain({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `clientSecret` | apiKey         | API key        |
| `projectId`    | apiKey         | API key        |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
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
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
