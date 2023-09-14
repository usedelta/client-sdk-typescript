/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as UsedeltaApi from "../../api";
import * as core from "../../core";

export const ProductVariantsItem: core.serialization.ObjectSchema<
    serializers.ProductVariantsItem.Raw,
    UsedeltaApi.ProductVariantsItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    platformId: core.serialization.property("platform_id", core.serialization.string().optional()),
    variantId: core.serialization.property("variant_id", core.serialization.string().optional()),
    barcode: core.serialization.string().optional(),
    sku: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    status: core.serialization.string().optional(),
    color: core.serialization.string().optional(),
    size: core.serialization.string().optional(),
    pricingDetails: core.serialization.property(
        "pricing_details",
        core.serialization.lazyObject(async () => (await import("..")).ProductVariantsItemPricingDetails).optional()
    ),
    countryOfOrigin: core.serialization.property("country_of_origin", core.serialization.string().optional()),
    customs: core.serialization.property(
        "Customs",
        core.serialization.lazyObject(async () => (await import("..")).ProductVariantsItemCustoms).optional()
    ),
    totalStock: core.serialization.property("total_stock", core.serialization.number().optional()),
    unitType: core.serialization.property(
        "unit_type",
        core.serialization.lazy(async () => (await import("..")).ProductVariantsItemUnitType).optional()
    ),
    replacement: core.serialization.boolean().optional(),
    replacementTime: core.serialization.property("replacement_time", core.serialization.number().optional()),
    orderMin: core.serialization.property("order_min", core.serialization.number().optional()),
    orderMax: core.serialization.property("order_max", core.serialization.number().optional()),
    pieces: core.serialization.number().optional(),
    requiresShipping: core.serialization.property("requires_shipping", core.serialization.boolean().optional()),
    carrier: core.serialization.string().optional(),
    deliveryType: core.serialization.property("delivery_type", core.serialization.string().optional()),
    deliveryTime: core.serialization.property("delivery_time", core.serialization.number().optional()),
    dimensions: core.serialization
        .lazyObject(async () => (await import("..")).ProductVariantsItemDimensions)
        .optional(),
    media: core.serialization.lazyObject(async () => (await import("..")).ProductVariantsItemMedia).optional(),
    tags: core.serialization.lazyObject(async () => (await import("..")).ProductVariantsItemTags).optional(),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
});

export declare namespace ProductVariantsItem {
    interface Raw {
        id?: string | null;
        platform_id?: string | null;
        variant_id?: string | null;
        barcode?: string | null;
        sku?: string | null;
        name?: string | null;
        status?: string | null;
        color?: string | null;
        size?: string | null;
        pricing_details?: serializers.ProductVariantsItemPricingDetails.Raw | null;
        country_of_origin?: string | null;
        Customs?: serializers.ProductVariantsItemCustoms.Raw | null;
        total_stock?: number | null;
        unit_type?: serializers.ProductVariantsItemUnitType.Raw | null;
        replacement?: boolean | null;
        replacement_time?: number | null;
        order_min?: number | null;
        order_max?: number | null;
        pieces?: number | null;
        requires_shipping?: boolean | null;
        carrier?: string | null;
        delivery_type?: string | null;
        delivery_time?: number | null;
        dimensions?: serializers.ProductVariantsItemDimensions.Raw | null;
        media?: serializers.ProductVariantsItemMedia.Raw | null;
        tags?: serializers.ProductVariantsItemTags.Raw | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
