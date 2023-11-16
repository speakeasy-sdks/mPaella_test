/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Blockchain you would like to use for this collection
 */
export enum Chain {
    Polygon = "polygon",
    Solana = "solana",
}

/**
 * See https://docs.crossmint.com/docs/metadata for more info.
 */
export class Metadata extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "imageUrl" })
    imageUrl?: string;

    /**
     * Collection name (Max length: 32)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * NFT collection symbol (Polygon ONLY)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "symbol" })
    symbol?: string;
}

export class CreateCollectionCustomRequestBody extends SpeakeasyBase {
    /**
     * Blockchain you would like to use for this collection
     */
    @SpeakeasyMetadata()
    @Expose({ name: "chain" })
    chain?: Chain;

    /**
     * See https://docs.crossmint.com/docs/metadata for more info.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata: Metadata;

    /**
     * (Optional) Any URLs in the metadata object will be resolved and reuploaded to IPFS [Default: true]
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reuploadLinkedFiles" })
    reuploadLinkedFiles?: boolean;
}

export class CreateCollectionCustomRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CreateCollectionCustomRequestBody;

    /**
     * The ID of the named collection, which you will use to create new NFTs and get status
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
    collectionId: string;
}

export class CreateCollectionCustomResponse extends SpeakeasyBase {
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
    rawResponse: AxiosResponse;
}
