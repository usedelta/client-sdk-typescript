/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as UsedeltaApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Returns {
    interface Options {
        environment: core.Supplier<string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

/**
 * Provides the returns information
 */
export class Returns {
    constructor(protected readonly _options: Returns.Options) {}

    /**
     * Create a new return
     * @throws {@link UsedeltaApi.BadRequestError}
     * @throws {@link UsedeltaApi.UnauthorizedError}
     * @throws {@link UsedeltaApi.ForbiddenError}
     * @throws {@link UsedeltaApi.ConflictError}
     * @throws {@link UsedeltaApi.InternalServerError}
     */
    public async postReturns(
        request: UsedeltaApi.Return,
        requestOptions?: Returns.RequestOptions
    ): Promise<UsedeltaApi.Return> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "orders/returns"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@usedelta/client-sdk-typescript",
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            body: await serializers.Return.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Return.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new UsedeltaApi.BadRequestError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new UsedeltaApi.UnauthorizedError(_response.error.body);
                case 403:
                    throw new UsedeltaApi.ForbiddenError(_response.error.body);
                case 409:
                    throw new UsedeltaApi.ConflictError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new UsedeltaApi.InternalServerError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.UsedeltaApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.UsedeltaApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.UsedeltaApiTimeoutError();
            case "unknown":
                throw new errors.UsedeltaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a specific return
     * @throws {@link UsedeltaApi.NotFoundError}
     * @throws {@link UsedeltaApi.InternalServerError}
     */
    public async getReturnById(
        returnId: UsedeltaApi.ReturnId,
        requestOptions?: Returns.RequestOptions
    ): Promise<UsedeltaApi.Return> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `orders/returns/${await serializers.ReturnId.jsonOrThrow(returnId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@usedelta/client-sdk-typescript",
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Return.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new UsedeltaApi.NotFoundError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new UsedeltaApi.InternalServerError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.UsedeltaApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.UsedeltaApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.UsedeltaApiTimeoutError();
            case "unknown":
                throw new errors.UsedeltaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this._options.apiKey);
        return value;
    }
}