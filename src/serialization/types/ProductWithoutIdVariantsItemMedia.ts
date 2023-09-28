/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const ProductWithoutIdVariantsItemMedia: core.serialization.ObjectSchema<
    serializers.ProductWithoutIdVariantsItemMedia.Raw,
    DeltaApi.ProductWithoutIdVariantsItemMedia
> = core.serialization.object({
    url: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
});

export declare namespace ProductWithoutIdVariantsItemMedia {
    interface Raw {
        url?: string | null;
        type?: string | null;
    }
}
