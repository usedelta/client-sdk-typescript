/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const OrderLineItemsItem: core.serialization.ObjectSchema<
    serializers.OrderLineItemsItem.Raw,
    DeltaApi.OrderLineItemsItem
> = core.serialization.object({
    id: core.serialization.number().optional(),
    platformId: core.serialization.property("platform_id", core.serialization.string().optional()),
    variantId: core.serialization.property("variant_id", core.serialization.string().optional()),
    barcode: core.serialization.string().optional(),
    sku: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    fulfillmentStatus: core.serialization.property("fulfillment_status", core.serialization.string().optional()),
    serialNumber: core.serialization.property("serial_number", core.serialization.string().optional()),
    requiresShipping: core.serialization.property("requires_shipping", core.serialization.boolean().optional()),
    weight: core.serialization.number().optional(),
    unitWeight: core.serialization.property("unit_weight", core.serialization.string().optional()),
    quantity: core.serialization.number().optional(),
    totalDiscount: core.serialization.property("total_discount", core.serialization.number().optional()),
    subtotalPrice: core.serialization.property("subtotal_price", core.serialization.number().optional()),
    totalPrice: core.serialization.property("total_price", core.serialization.number().optional()),
    taxRate: core.serialization.property("tax_rate", core.serialization.number().optional()),
    totalTax: core.serialization.property("total_tax", core.serialization.number().optional()),
    unitCost: core.serialization.property("unit_cost", core.serialization.number().optional()),
    isoCurrencyCode: core.serialization.property("iso_currency_code", core.serialization.string().optional()),
    deliveryTime: core.serialization.property("delivery_time", core.serialization.number().optional()),
    countryOfOrigin: core.serialization.property("country_of_origin", core.serialization.string().optional()),
    inventory: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
});

export declare namespace OrderLineItemsItem {
    interface Raw {
        id?: number | null;
        platform_id?: string | null;
        variant_id?: string | null;
        barcode?: string | null;
        sku?: string | null;
        name?: string | null;
        fulfillment_status?: string | null;
        serial_number?: string | null;
        requires_shipping?: boolean | null;
        weight?: number | null;
        unit_weight?: string | null;
        quantity?: number | null;
        total_discount?: number | null;
        subtotal_price?: number | null;
        total_price?: number | null;
        tax_rate?: number | null;
        total_tax?: number | null;
        unit_cost?: number | null;
        iso_currency_code?: string | null;
        delivery_time?: number | null;
        country_of_origin?: string | null;
        inventory?: Record<string, unknown> | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
