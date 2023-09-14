/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as DeltaApi from "../../../../api";
import * as core from "../../../../core";

export const JournalEntryLineItem: core.serialization.ObjectSchema<
    serializers.JournalEntryLineItem.Raw,
    DeltaApi.JournalEntryLineItem
> = core.serialization.object({
    description: core.serialization.string(),
    totalAmount: core.serialization.property("total_amount", core.serialization.number()),
    accountId: core.serialization.property("account_id", core.serialization.string()),
    accountName: core.serialization.property("account_name", core.serialization.string()),
});

export declare namespace JournalEntryLineItem {
    interface Raw {
        description: string;
        total_amount: number;
        account_id: string;
        account_name: string;
    }
}
