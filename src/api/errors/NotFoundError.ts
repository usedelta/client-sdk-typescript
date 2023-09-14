/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";
import * as UsedeltaApi from "..";

export class NotFoundError extends errors.UsedeltaApiError {
    constructor(body: UsedeltaApi.Error_) {
        super({
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}