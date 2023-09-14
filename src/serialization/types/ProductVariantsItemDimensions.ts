/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as UsedeltaApi from "../../api";
import * as core from "../../core";

export const ProductVariantsItemDimensions: core.serialization.ObjectSchema<
    serializers.ProductVariantsItemDimensions.Raw,
    UsedeltaApi.ProductVariantsItemDimensions
> = core.serialization.object({
    width: core.serialization.number().optional(),
    height: core.serialization.number().optional(),
    length: core.serialization.number().optional(),
    unitSize: core.serialization.property("unit_size", core.serialization.string().optional()),
    weight: core.serialization.number().optional(),
    unitWeight: core.serialization.property("unit_weight", core.serialization.string().optional()),
});

export declare namespace ProductVariantsItemDimensions {
    interface Raw {
        width?: number | null;
        height?: number | null;
        length?: number | null;
        unit_size?: string | null;
        weight?: number | null;
        unit_weight?: string | null;
    }
}
