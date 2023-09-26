/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class MintStatusListRequest extends SpeakeasyBase {
    /**
     * Every project can mint to their pre-built collections (with IDs 'default-solana' or 'default-polygon'),  or use the [`create-collection`](https://docs.crossmint.com/reference/create-collection) endpoint
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
    collectionId: string;

    /**
     * The page number you want to query, starting at 1
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page: number;

    /**
     * How many items you want to be returned in the page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
    perPage?: number;
}

export class MintStatusListResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
