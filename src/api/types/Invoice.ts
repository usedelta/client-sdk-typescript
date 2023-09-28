/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DeltaApi from "..";

export interface Invoice {
    id?: DeltaApi.InvoiceId;
    /** Unique identifier of the integration on delta. */
    connectionId?: string;
    /** Unique identifier of platform for the invoice. */
    platformId?: string;
    /** Balance of the invoice. */
    balance?: string;
    /** Booked flag for the invoice. */
    booked?: boolean;
    /** Cancelled flag for the invoice. */
    cancelled?: boolean;
    /** Currency of the invoice. */
    currency?: string;
    /** Currency rate of the invoice. */
    currencyRate?: string;
    /** Currency unit of the invoice. */
    currencyUnit?: string;
    /** Customer name of the invoice. */
    customerName?: string;
    /** Customer number of the invoice. */
    customerNumber?: string;
    /** Customer due date of the invoice. */
    dueDate?: string;
    /** External invoice 1 reference of the invoice. */
    externalInvoiceReference1?: string;
    /** External invoice 2 reference of the invoice. */
    externalInvoiceReference2?: string;
    /** Date of the invoice. */
    invoiceDate?: string;
    /** Invoice type. */
    invoiceType?: string;
    /** Journal Entry id of the invoice. */
    journalId?: string;
    /** Journal Entry series of the invoice. */
    journalSeries?: string;
    /** Way of delivery of the invoice. */
    wayOfDelivery?: string;
    /** Sent flag of the invoice. */
    sent?: boolean;
    /** Total value of the invoice, including taxes. */
    total?: string;
    /** Due date of the invoice. */
    duePaymentDate?: string;
    /** A list of line items associated with the invoice. */
    lineItems?: DeltaApi.InvoiceLineItemsItem[];
}