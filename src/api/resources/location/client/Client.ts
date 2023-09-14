/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as DeltaApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Location {
    interface Options {
        environment: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

/**
 * Provides the location information
 */
export class Location {
    constructor(protected readonly _options: Location.Options) {}

    /**
     * Create a new location
     * @throws {@link DeltaApi.BadRequestError}
     * @throws {@link DeltaApi.UnauthorizedError}
     * @throws {@link DeltaApi.ForbiddenError}
     * @throws {@link DeltaApi.ConflictError}
     * @throws {@link DeltaApi.InternalServerError}
     */
    public async postLocation(
        request: DeltaApi.Location,
        requestOptions?: Location.RequestOptions
    ): Promise<DeltaApi.Location> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "inventories/locations"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@usedelta/client-sdk-typescript",
                "X-Fern-SDK-Version": "0.0.5",
            },
            contentType: "application/json",
            body: await serializers.Location.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Location.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DeltaApi.BadRequestError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new DeltaApi.UnauthorizedError(_response.error.body);
                case 403:
                    throw new DeltaApi.ForbiddenError(_response.error.body);
                case 409:
                    throw new DeltaApi.ConflictError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new DeltaApi.InternalServerError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.DeltaApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DeltaApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DeltaApiTimeoutError();
            case "unknown":
                throw new errors.DeltaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a specific location
     * @throws {@link DeltaApi.NotFoundError}
     * @throws {@link DeltaApi.InternalServerError}
     */
    public async getLocationById(
        locationId: DeltaApi.LocationId,
        requestOptions?: Location.RequestOptions
    ): Promise<DeltaApi.Location> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `inventories/locations/${await serializers.LocationId.jsonOrThrow(locationId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@usedelta/client-sdk-typescript",
                "X-Fern-SDK-Version": "0.0.5",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Location.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new DeltaApi.NotFoundError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new DeltaApi.InternalServerError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.DeltaApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DeltaApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DeltaApiTimeoutError();
            case "unknown":
                throw new errors.DeltaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
