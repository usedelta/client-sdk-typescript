/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Accounts } from "./api/resources/accounts/client/Client";

export declare namespace DeltaApiClient {
    interface Options {
        environment?: core.Supplier<environments.DeltaApiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        platformKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class DeltaApiClient {
    constructor(protected readonly _options: DeltaApiClient.Options) {}

    protected _accounts: Accounts | undefined;

    public get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this._options));
    }
}
