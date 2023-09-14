/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";

export class UnauthorizedError extends errors.UsedeltaApiError {
    constructor(body?: unknown) {
        super({
            statusCode: 401,
            body: body,
        });
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
