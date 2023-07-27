/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Display name of your attribute
 */
export enum MintNftRequestBodyMetadataMetadataObjectAttributesDisplayType {
    BoostNumber = "boost_number",
    BoostPercentage = "boost_percentage",
    Number = "number",
}

export class MintNftRequestBodyMetadataMetadataObjectAttributes extends SpeakeasyBase {
    /**
     * Display name of your attribute
     */
    @SpeakeasyMetadata()
    @Expose({ name: "display_type" })
    displayType?: MintNftRequestBodyMetadataMetadataObjectAttributesDisplayType;

    /**
     * The name of the trait
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trait_type" })
    traitType: string;

    /**
     * The value of the trait
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}

/**
 * See https://docs.crossmint.com/docs/metadata for more info.
 */
export class MintNftRequestBodyMetadataMetadataObject extends SpeakeasyBase {
    /**
     * (Optional) [Polygon only] <br> The Mint API natively supports rich metadata within ERC 721 and ERC 1155, including audio, video and/or HTML. <br> Populate the animation_url field as per the OpenSea metadata spec: <br> https://docs.opensea.io/docs/metadata-standards#metadata-structure
     */
    @SpeakeasyMetadata()
    @Expose({ name: "animation_url" })
    animationUrl?: string;

    /**
     * (Optional) Add attributes to your NFT
     */
    @SpeakeasyMetadata({ elemType: MintNftRequestBodyMetadataMetadataObjectAttributes })
    @Expose({ name: "attributes" })
    @Type(() => MintNftRequestBodyMetadataMetadataObjectAttributes)
    attributes?: MintNftRequestBodyMetadataMetadataObjectAttributes[];

    /**
     * A quick and brief description of your NFT (Max length: 64)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * Direct link to your NFT image
     */
    @SpeakeasyMetadata()
    @Expose({ name: "image" })
    image: string;

    /**
     * The name of your NFT (Max length: 32)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

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

export class MintNft200ApplicationJSONEVMONSUBSEQUENTREQUESTSMetadata extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image" })
    image: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class MintNft200ApplicationJSONEVMONSUBSEQUENTREQUESTSONChain extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "chain" })
    chain: string;

    @SpeakeasyMetadata()
    @Expose({ name: "contractAddress" })
    contractAddress: string;

    @SpeakeasyMetadata()
    @Expose({ name: "owner" })
    owner: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tokenId" })
    tokenId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "txId" })
    txId: string;
}

export class MintNft200ApplicationJSONEVMONSUBSEQUENTREQUESTS extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => MintNft200ApplicationJSONEVMONSUBSEQUENTREQUESTSMetadata)
    metadata: MintNft200ApplicationJSONEVMONSUBSEQUENTREQUESTSMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "onChain" })
    @Type(() => MintNft200ApplicationJSONEVMONSUBSEQUENTREQUESTSONChain)
    onChain: MintNft200ApplicationJSONEVMONSUBSEQUENTREQUESTSONChain;
}

export class MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataAttributes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "trait_type" })
    traitType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}

export class MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataPropertiesCreators extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    address?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "share" })
    share?: number;
}

export class MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataPropertiesFiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uri" })
    uri?: string;
}

export class MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataProperties extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    category?: string;

    @SpeakeasyMetadata({
        elemType: MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataPropertiesCreators,
    })
    @Expose({ name: "creators" })
    @Type(() => MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataPropertiesCreators)
    creators?: MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataPropertiesCreators[];

    @SpeakeasyMetadata({
        elemType: MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataPropertiesFiles,
    })
    @Expose({ name: "files" })
    @Type(() => MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataPropertiesFiles)
    files?: MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataPropertiesFiles[];
}

export class MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadata extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataAttributes,
    })
    @Expose({ name: "attributes" })
    @Type(() => MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataAttributes)
    attributes?: MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataAttributes[];

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image" })
    image: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "properties" })
    @Type(() => MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataProperties)
    properties?: MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadataProperties;

    @SpeakeasyMetadata()
    @Expose({ name: "seller_fee_basis_points" })
    sellerFeeBasisPoints?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "symbol" })
    symbol?: string;
}

export class MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSONChain extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "chain" })
    chain: string;

    @SpeakeasyMetadata()
    @Expose({ name: "mintHash" })
    mintHash: string;

    @SpeakeasyMetadata()
    @Expose({ name: "owner" })
    owner: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: string;
}

export class MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTS extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadata)
    metadata: MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "onChain" })
    @Type(() => MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSONChain)
    onChain: MintNft200ApplicationJSONSOLANAONSUBSEQUENTREQUESTSONChain;
}

export class MINTNft200ApplicationJSONEVMONFIRSTMINTREQUESTOnchain extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "chain" })
    chain: string;

    @SpeakeasyMetadata()
    @Expose({ name: "contractAddress" })
    contractAddress: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: string;
}

export class MINTNft200ApplicationJSONEVMONFIRSTMINTREQUEST extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "onchain" })
    @Type(() => MINTNft200ApplicationJSONEVMONFIRSTMINTREQUESTOnchain)
    onchain: MINTNft200ApplicationJSONEVMONFIRSTMINTREQUESTOnchain;
}

export class MINTNft200ApplicationJSONSOLANAONFIRSTMINTREQUESTOnchain extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "chain" })
    chain: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: string;
}

export class MINTNft200ApplicationJSONSOLANAONFIRSTMINTREQUEST extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "onchain" })
    @Type(() => MINTNft200ApplicationJSONSOLANAONFIRSTMINTREQUESTOnchain)
    onchain: MINTNft200ApplicationJSONSOLANAONFIRSTMINTREQUESTOnchain;
}

export class MintNftResponse extends SpeakeasyBase {
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

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}