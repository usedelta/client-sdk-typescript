/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as UsedeltaApi from "../../api";
import * as core from "../../core";

export const ProductVariantsItemCustomsTariffCodesItem: core.serialization.ObjectSchema<
    serializers.ProductVariantsItemCustomsTariffCodesItem.Raw,
    UsedeltaApi.ProductVariantsItemCustomsTariffCodesItem
> = core.serialization.object({
    nomenclature: core.serialization
        .lazy(async () => (await import("..")).ProductVariantsItemCustomsTariffCodesItemNomenclature)
        .optional(),
    isoCountryCode: core.serialization.property("iso_country_code", core.serialization.string().optional()),
    code: core.serialization.string().optional(),
});

export declare namespace ProductVariantsItemCustomsTariffCodesItem {
    interface Raw {
        nomenclature?: serializers.ProductVariantsItemCustomsTariffCodesItemNomenclature.Raw | null;
        iso_country_code?: string | null;
        code?: string | null;
    }
}