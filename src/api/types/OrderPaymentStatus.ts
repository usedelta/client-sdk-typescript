/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Payment status of the order on the connected platform.
 */
export type OrderPaymentStatus = "PAYED" | "NOT_PAYED" | "LOST";

export const OrderPaymentStatus = {
    Payed: "PAYED",
    NotPayed: "NOT_PAYED",
    Lost: "LOST",
} as const;
