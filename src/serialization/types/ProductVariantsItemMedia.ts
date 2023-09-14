/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as UsedeltaApi from "../../api";
import * as core from "../../core";

export const ProductVariantsItemMedia: core.serialization.ObjectSchema<
    serializers.ProductVariantsItemMedia.Raw,
    UsedeltaApi.ProductVariantsItemMedia
> = core.serialization.object({
    url: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
});

export declare namespace ProductVariantsItemMedia {
    interface Raw {
        url?: string | null;
        type?: string | null;
    }
}