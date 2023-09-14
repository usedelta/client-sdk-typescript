/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as UsedeltaApi from "../../api";
import * as core from "../../core";

export const ProductVariantsItemUnitType: core.serialization.Schema<
    serializers.ProductVariantsItemUnitType.Raw,
    UsedeltaApi.ProductVariantsItemUnitType
> = core.serialization.enum_(["piece", "weight"]);

export declare namespace ProductVariantsItemUnitType {
    type Raw = "piece" | "weight";
}