/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";

export class ForbiddenError extends errors.UsedeltaApiError {
    constructor(body?: unknown) {
        super({
            statusCode: 403,
            body: body,
        });
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
