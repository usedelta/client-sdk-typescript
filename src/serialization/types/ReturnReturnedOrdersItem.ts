/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const ReturnReturnedOrdersItem: core.serialization.ObjectSchema<
    serializers.ReturnReturnedOrdersItem.Raw,
    DeltaApi.ReturnReturnedOrdersItem
> = core.serialization.object({
    id: core.serialization.number().optional(),
    platformId: core.serialization.property("platform_id", core.serialization.string().optional()),
    returnedItems: core.serialization.property(
        "returned_items",
        core.serialization
            .list(
                core.serialization.lazyObject(
                    async () => (await import("..")).ReturnReturnedOrdersItemReturnedItemsItem
                )
            )
            .optional()
    ),
});

export declare namespace ReturnReturnedOrdersItem {
    interface Raw {
        id?: number | null;
        platform_id?: string | null;
        returned_items?: serializers.ReturnReturnedOrdersItemReturnedItemsItem.Raw[] | null;
    }
}
