/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const ReturnWithoutId: core.serialization.ObjectSchema<
    serializers.ReturnWithoutId.Raw,
    DeltaApi.ReturnWithoutId
> = core.serialization.object({
    id: core.serialization.string(),
    connectionId: core.serialization.property("connection_id", core.serialization.string().optional()),
    platformId: core.serialization.property("platform_id", core.serialization.string().optional()),
    status: core.serialization.lazy(async () => (await import("..")).ReturnWithoutIdStatus).optional(),
    quantity: core.serialization.number().optional(),
    shopperMessage: core.serialization.property("shopper_message", core.serialization.string().optional()),
    carrier: core.serialization.string().optional(),
    trackingNumber: core.serialization.property("tracking_number", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
    returnedOrders: core.serialization.property(
        "returned_orders",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).ReturnWithoutIdReturnedOrdersItem))
            .optional()
    ),
});

export declare namespace ReturnWithoutId {
    interface Raw {
        id: string;
        connection_id?: string | null;
        platform_id?: string | null;
        status?: serializers.ReturnWithoutIdStatus.Raw | null;
        quantity?: number | null;
        shopper_message?: string | null;
        carrier?: string | null;
        tracking_number?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
        returned_orders?: serializers.ReturnWithoutIdReturnedOrdersItem.Raw[] | null;
    }
}
