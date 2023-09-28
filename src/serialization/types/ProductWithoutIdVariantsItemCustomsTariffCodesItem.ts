/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const ProductWithoutIdVariantsItemCustomsTariffCodesItem: core.serialization.ObjectSchema<
    serializers.ProductWithoutIdVariantsItemCustomsTariffCodesItem.Raw,
    DeltaApi.ProductWithoutIdVariantsItemCustomsTariffCodesItem
> = core.serialization.object({
    nomenclature: core.serialization
        .lazy(async () => (await import("..")).ProductWithoutIdVariantsItemCustomsTariffCodesItemNomenclature)
        .optional(),
    isoCountryCode: core.serialization.property("iso_country_code", core.serialization.string().optional()),
    code: core.serialization.string().optional(),
});

export declare namespace ProductWithoutIdVariantsItemCustomsTariffCodesItem {
    interface Raw {
        nomenclature?: serializers.ProductWithoutIdVariantsItemCustomsTariffCodesItemNomenclature.Raw | null;
        iso_country_code?: string | null;
        code?: string | null;
    }
}