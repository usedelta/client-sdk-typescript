/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface JournalEntryLineItemsItem {
    /** description of the line item associated with the journal entry. */
    description?: string;
    /** Amount for the line item. Positive for debit entries and negative for credit entries. */
    totalAmount?: number;
    /** Unique identifier of the account associated with the journal entry. */
    accountId?: string;
    /** Name of the account associated with the journal entry. */
    accountName?: string;
}
