/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Status of the order on the connected platform.
 */
export type OrderStatus = "OPEN" | "CLOSED" | "CANCELLED";

export const OrderStatus = {
    Open: "OPEN",
    Closed: "CLOSED",
    Cancelled: "CANCELLED",
} as const;
