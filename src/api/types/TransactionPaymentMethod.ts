/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * One of cash, card, or other.
 */
export type TransactionPaymentMethod = "card" | "cash" | "other";

export const TransactionPaymentMethod = {
    Card: "card",
    Cash: "cash",
    Other: "other",
} as const;
