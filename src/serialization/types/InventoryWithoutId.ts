/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const InventoryWithoutId: core.serialization.ObjectSchema<
    serializers.InventoryWithoutId.Raw,
    DeltaApi.InventoryWithoutId
> = core.serialization.object({
    id: core.serialization.string().optional(),
    connectionId: core.serialization.property("connection_id", core.serialization.string().optional()),
    variantId: core.serialization.property("variant_id", core.serialization.string().optional()),
    barcode: core.serialization.string().optional(),
    sku: core.serialization.string().optional(),
    totalStock: core.serialization.property("total_stock", core.serialization.number().optional()),
    locationId: core.serialization.property("location_id", core.serialization.string().optional()),
    locationPlatformId: core.serialization.property("location_platform_id", core.serialization.string().optional()),
});

export declare namespace InventoryWithoutId {
    interface Raw {
        id?: string | null;
        connection_id?: string | null;
        variant_id?: string | null;
        barcode?: string | null;
        sku?: string | null;
        total_stock?: number | null;
        location_id?: string | null;
        location_platform_id?: string | null;
    }
}
