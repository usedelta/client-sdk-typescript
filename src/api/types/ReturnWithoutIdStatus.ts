/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Status of the order return. Can be one of announced, transit, delivered, canceled, completed, or other.
 */
export type ReturnWithoutIdStatus = "ANNOUNCED" | "TRANSIT" | "DELIVERED" | "CANCELED" | "COMPLETED" | "OTHER";

export const ReturnWithoutIdStatus = {
    Announced: "ANNOUNCED",
    Transit: "TRANSIT",
    Delivered: "DELIVERED",
    Canceled: "CANCELED",
    Completed: "COMPLETED",
    Other: "OTHER",
} as const;
