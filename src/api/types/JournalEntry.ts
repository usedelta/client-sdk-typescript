/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DeltaApi from "..";

export interface JournalEntry {
    id?: DeltaApi.JournalEntryId;
    /** Unique identifier of the integration on delta. */
    connectionId?: string;
    /** Unique identifier of platform for the journal entry. */
    journalId?: string;
    /** Description of the journal entry. */
    description?: string;
    /** Transaction date of the journal entry. */
    transactionDate?: string;
    /** Creation date of the return on the integration platform. */
    createdAt?: string;
    /** Last update on the return of the integration platform. */
    updatedAt?: string;
    /** ISO 4217 currency code associated with the journal entry. */
    currency?: string;
    /** A list of line items associated with the journal entry. */
    lineItems?: DeltaApi.JournalEntryLineItemsItem[];
}
