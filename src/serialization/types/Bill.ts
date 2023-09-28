/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const Bill: core.serialization.ObjectSchema<serializers.Bill.Raw, DeltaApi.Bill> = core.serialization.object({
    id: core.serialization.lazy(async () => (await import("..")).BillId).optional(),
    connectionId: core.serialization.property("connection_id", core.serialization.string().optional()),
    platformId: core.serialization.property("platform_id", core.serialization.string().optional()),
    balance: core.serialization.string().optional(),
    booked: core.serialization.boolean().optional(),
    cancelled: core.serialization.boolean().optional(),
    credit: core.serialization.boolean().optional(),
    currency: core.serialization.string().optional(),
    currencyRate: core.serialization.property("currency_rate", core.serialization.string().optional()),
    currencyUnit: core.serialization.property("currency_unit", core.serialization.string().optional()),
    dueDate: core.serialization.property("due_date", core.serialization.string().optional()),
    externalBillNumber: core.serialization.property("external_bill_number", core.serialization.string().optional()),
    externalBillSeries: core.serialization.property("external_bill_series", core.serialization.string().optional()),
    billDate: core.serialization.property("bill_date", core.serialization.string().optional()),
    supplierNumber: core.serialization.property("supplier_number", core.serialization.string().optional()),
    supplierName: core.serialization.property("supplier_name", core.serialization.string().optional()),
    journalEntries: core.serialization.property(
        "journal_entries",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).BillJournalEntriesItem))
            .optional()
    ),
    total: core.serialization.string().optional(),
    duePaymentDate: core.serialization.property("due_payment_date", core.serialization.string().optional()),
    lineItems: core.serialization.property(
        "line_items",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).BillLineItemsItem))
            .optional()
    ),
});

export declare namespace Bill {
    interface Raw {
        id?: serializers.BillId.Raw | null;
        connection_id?: string | null;
        platform_id?: string | null;
        balance?: string | null;
        booked?: boolean | null;
        cancelled?: boolean | null;
        credit?: boolean | null;
        currency?: string | null;
        currency_rate?: string | null;
        currency_unit?: string | null;
        due_date?: string | null;
        external_bill_number?: string | null;
        external_bill_series?: string | null;
        bill_date?: string | null;
        supplier_number?: string | null;
        supplier_name?: string | null;
        journal_entries?: serializers.BillJournalEntriesItem.Raw[] | null;
        total?: string | null;
        due_payment_date?: string | null;
        line_items?: serializers.BillLineItemsItem.Raw[] | null;
    }
}