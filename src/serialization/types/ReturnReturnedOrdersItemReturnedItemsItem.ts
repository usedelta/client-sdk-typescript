/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const ReturnReturnedOrdersItemReturnedItemsItem: core.serialization.ObjectSchema<
    serializers.ReturnReturnedOrdersItemReturnedItemsItem.Raw,
    DeltaApi.ReturnReturnedOrdersItemReturnedItemsItem
> = core.serialization.object({
    id: core.serialization.number().optional(),
    platformId: core.serialization.property("platform_id", core.serialization.string().optional()),
    variantId: core.serialization.property("variant_id", core.serialization.string().optional()),
    barcode: core.serialization.string().optional(),
    sku: core.serialization.string().optional(),
    quantity: core.serialization.number().optional(),
    reason: core.serialization.string().optional(),
    condition: core.serialization
        .lazy(async () => (await import("..")).ReturnReturnedOrdersItemReturnedItemsItemCondition)
        .optional(),
});

export declare namespace ReturnReturnedOrdersItemReturnedItemsItem {
    interface Raw {
        id?: number | null;
        platform_id?: string | null;
        variant_id?: string | null;
        barcode?: string | null;
        sku?: string | null;
        quantity?: number | null;
        reason?: string | null;
        condition?: serializers.ReturnReturnedOrdersItemReturnedItemsItemCondition.Raw | null;
    }
}
