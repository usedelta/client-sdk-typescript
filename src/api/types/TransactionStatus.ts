/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * One of success, failed, pending, canceled, refunded, or other.
 */
export type TransactionStatus = "success" | "failed" | "pending" | "canceled" | "refunded" | "other";

export const TransactionStatus = {
    Success: "success",
    Failed: "failed",
    Pending: "pending",
    Canceled: "canceled",
    Refunded: "refunded",
    Other: "other",
} as const;
