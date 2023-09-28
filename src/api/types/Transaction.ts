/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DeltaApi from "..";

export interface Transaction {
    id: DeltaApi.TransactionId;
    /** Unique identifier of the integration on delta. */
    connectionId?: string;
    /** The platform-specific ID of the transaction. */
    platformId?: string;
    /** The platform-specific ID of the associated order. */
    orderId?: string;
    /** One of sale, refund, or other. */
    type?: DeltaApi.TransactionType;
    /** The gateway associated with the transaction. */
    paymentGateway?: string;
    /** One of cash, card, or other. */
    paymentMethod?: DeltaApi.TransactionPaymentMethod;
    /** One of success, failed, pending, canceled, refunded, or other. */
    status?: DeltaApi.TransactionStatus;
    /** The amount of the transaction. */
    totalAmount?: number;
    /** The currency of the transaction. (ISO 4217) */
    isoCurrencyCode?: string;
    /** The date when the transaction was created. (ISO 8601) */
    createdAt?: string;
    /** The date when the transaction was last updated. (ISO 8601) */
    updatedAt?: string;
}