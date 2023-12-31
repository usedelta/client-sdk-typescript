/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const Transaction: core.serialization.ObjectSchema<serializers.Transaction.Raw, DeltaApi.Transaction> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("..")).TransactionId),
        connectionId: core.serialization.property("connection_id", core.serialization.string().optional()),
        platformId: core.serialization.property("platform_id", core.serialization.string().optional()),
        orderId: core.serialization.property("order_id", core.serialization.string().optional()),
        type: core.serialization.lazy(async () => (await import("..")).TransactionType).optional(),
        paymentGateway: core.serialization.property("payment_gateway", core.serialization.string().optional()),
        paymentMethod: core.serialization.property(
            "payment_method",
            core.serialization.lazy(async () => (await import("..")).TransactionPaymentMethod).optional()
        ),
        status: core.serialization.lazy(async () => (await import("..")).TransactionStatus).optional(),
        totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
        isoCurrencyCode: core.serialization.property("iso_currency_code", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
    });

export declare namespace Transaction {
    interface Raw {
        id: serializers.TransactionId.Raw;
        connection_id?: string | null;
        platform_id?: string | null;
        order_id?: string | null;
        type?: serializers.TransactionType.Raw | null;
        payment_gateway?: string | null;
        payment_method?: serializers.TransactionPaymentMethod.Raw | null;
        status?: serializers.TransactionStatus.Raw | null;
        total_amount?: number | null;
        iso_currency_code?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
