/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as DeltaApi from "../../../../../api";
import * as core from "../../../../../core";

export const InventorySet: core.serialization.Schema<serializers.InventorySet.Raw, DeltaApi.InventorySet> =
    core.serialization.object({
        id: core.serialization.string(),
        connectionId: core.serialization.property("connection_id", core.serialization.string().optional()),
        variantId: core.serialization.property("variant_id", core.serialization.string().optional()),
        barcode: core.serialization.string().optional(),
        sku: core.serialization.string(),
        totalStock: core.serialization.property("total_stock", core.serialization.number()),
        changeDate: core.serialization.property("change_date", core.serialization.string().optional()),
        locationId: core.serialization.property("location_id", core.serialization.string().optional()),
        locationPlatformId: core.serialization.property("location_platform_id", core.serialization.string()),
    });

export declare namespace InventorySet {
    interface Raw {
        id: string;
        connection_id?: string | null;
        variant_id?: string | null;
        barcode?: string | null;
        sku: string;
        total_stock: number;
        change_date?: string | null;
        location_id?: string | null;
        location_platform_id: string;
    }
}
