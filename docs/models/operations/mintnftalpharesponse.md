# MintNftAlphaResponse


## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `error`                                                                                     | [shared.ErrorT](../../models/shared/errort.md)                                              | :heavy_minus_sign:                                                                          | Invalid arguments, please make sure you're following the api specification.                 |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `rawResponse`                                                                               | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `mintNftAlpha200ApplicationJSONObject`                                                      | [MintNftAlpha200ApplicationJSON](../../models/operations/mintnftalpha200applicationjson.md) | :heavy_minus_sign:                                                                          | Success.                                                                                    |