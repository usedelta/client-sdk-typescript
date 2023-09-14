/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const ReturnWithoutId: core.serialization.ObjectSchema<
    serializers.ReturnWithoutId.Raw,
    DeltaApi.ReturnWithoutId
> = core.serialization.lazyObject(async () => (await import("..")).Return);

export declare namespace ReturnWithoutId {
    type Raw = serializers.Return.Raw;
}
