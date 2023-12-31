/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Cateogory of the account.
 */
export type AccountCategory = "asset" | "expense" | "income" | "liability" | "equity" | "unknown";

export const AccountCategory = {
    Asset: "asset",
    Expense: "expense",
    Income: "income",
    Liability: "liability",
    Equity: "equity",
    Unknown: "unknown",
} as const;
