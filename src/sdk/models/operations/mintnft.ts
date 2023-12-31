/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class MintNftRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata: any;

    /**
     * Recipient address in the format of `<chain>:<address>` or <br> `email:<email_address>:<chain>`.
     *
     * @remarks
     * See https://docs.crossmint.com/docs/recipients for more info.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recipient" })
    recipient: string;

    /**
     * (Optional) Any URLs in the metadata object will be resolved and reuploaded to IPFS [Default: true]
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reuploadLinkedFiles" })
    reuploadLinkedFiles?: boolean;
}

export class MintNftRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: MintNftRequestBody;

    /**
     * Every project can mint to their pre-built collections (with IDs 'default-solana' or 'default-polygon'), or use the [`create-collection`](https://docs.crossmint.com/reference/create-collection) endpoint
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
    collectionId: string;
}

export class MintNftResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Invalid arguments, please make sure you're following the api specification.
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * Success.
     */
    @SpeakeasyMetadata()
    mintResponse?: any;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
