/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as DeltaApi from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Orders {
    interface Options {
        environment: core.Supplier<string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

/**
 * Provides the orders information
 */
export class Orders {
    constructor(protected readonly _options: Orders.Options) {}

    /**
     * Get all orders
     * @throws {@link DeltaApi.NotFoundError}
     * @throws {@link DeltaApi.InternalServerError}
     */
    public async getOrders(
        request: DeltaApi.GetOrdersRequest = {},
        requestOptions?: Orders.RequestOptions
    ): Promise<DeltaApi.Order> {
        const { from: from_, to, next, first } = request;
        const _queryParams = new URLSearchParams();
        if (from_ != null) {
            _queryParams.append("from", from_);
        }

        if (to != null) {
            _queryParams.append("to", to);
        }

        if (next != null) {
            _queryParams.append("next", next.toString());
        }

        if (first != null) {
            _queryParams.append("first", first.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "orders"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@usedelta/client-sdk-typescript",
                "X-Fern-SDK-Version": "0.0.29",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Order.parseOrThrow(_response.body, {
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

    /**
     * Create a new order
     * @throws {@link DeltaApi.BadRequestError}
     * @throws {@link DeltaApi.UnauthorizedError}
     * @throws {@link DeltaApi.ForbiddenError}
     * @throws {@link DeltaApi.ConflictError}
     * @throws {@link DeltaApi.InternalServerError}
     */
    public async postOrders(
        request: DeltaApi.OrderWithoutId,
        requestOptions?: Orders.RequestOptions
    ): Promise<DeltaApi.Order> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "orders"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@usedelta/client-sdk-typescript",
                "X-Fern-SDK-Version": "0.0.29",
            },
            contentType: "application/json",
            body: await serializers.OrderWithoutId.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Order.parseOrThrow(_response.body, {
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
     * Get a specific order
     * @throws {@link DeltaApi.NotFoundError}
     * @throws {@link DeltaApi.InternalServerError}
     */
    public async getOrderById(
        orderId: DeltaApi.OrderId,
        requestOptions?: Orders.RequestOptions
    ): Promise<DeltaApi.Order> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `orders/${await serializers.OrderId.jsonOrThrow(orderId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@usedelta/client-sdk-typescript",
                "X-Fern-SDK-Version": "0.0.29",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Order.parseOrThrow(_response.body, {
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

    /**
     * Update a specific order
     * @throws {@link DeltaApi.BadRequestError}
     * @throws {@link DeltaApi.UnauthorizedError}
     * @throws {@link DeltaApi.ForbiddenError}
     * @throws {@link DeltaApi.ConflictError}
     * @throws {@link DeltaApi.InternalServerError}
     */
    public async patchtOrders(
        orderId: DeltaApi.OrderId,
        request: DeltaApi.OrderWithoutId,
        requestOptions?: Orders.RequestOptions
    ): Promise<DeltaApi.Order> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `orders/${await serializers.OrderId.jsonOrThrow(orderId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@usedelta/client-sdk-typescript",
                "X-Fern-SDK-Version": "0.0.29",
            },
            contentType: "application/json",
            body: await serializers.OrderWithoutId.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Order.parseOrThrow(_response.body, {
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

    protected async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this._options.apiKey);
        return value;
    }
}
