/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Fulfillment status of the order on the connected platform, can be one of - NULL None of the line items in the order have been fulfilled. - FULFILLED Every line item in the order has been fulfilled. - PARTIALLY At least one line item in the order has been fulfilled. - RETURNED Every line item in the order has been returned and the order canceled.
 */
export type OrderFulfillmentStatus = "NULL" | "FULFILLED" | "PARTIALLY" | "RETURNED";

export const OrderFulfillmentStatus = {
    Null: "NULL",
    Fulfilled: "FULFILLED",
    Partially: "PARTIALLY",
    Returned: "RETURNED",
} as const;
