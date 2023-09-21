/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Collection } from "./collection";
import { Edit } from "./edit";
import { Mint } from "./mint";
import * as shared from "./models/shared";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://staging.crossmint.com/api"] as const;

/**
 * Select between production (www) and testing (staging) environments
 */
export enum ServerEnv {
    Www = "www",
    Staging = "staging",
}

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows setting the env variable for url substitution
     */
    env?: ServerEnv;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "1.10.4";
    genVersion = "2.122.1";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * NFT Minting APIs: N/A
 */
export class CrossmintMain {
    public collection: Collection;
    public edit: Edit;
    public mint: Mint;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        let defaults: any = {};

        const serverDefaults = [
            {
                env: props?.env?.toString() ?? "staging",
            },
        ];
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
            defaults = serverDefaults[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            serverDefaults: defaults,
            retryConfig: props?.retryConfig,
        });

        this.collection = new Collection(this.sdkConfiguration);
        this.edit = new Edit(this.sdkConfiguration);
        this.mint = new Mint(this.sdkConfiguration);
    }
}
