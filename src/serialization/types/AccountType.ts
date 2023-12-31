/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const AccountType: core.serialization.Schema<serializers.AccountType.Raw, DeltaApi.AccountType> =
    core.serialization.enum_([
        "accounts_payable",
        "accounts_receivable",
        "bank",
        "credit_card",
        "fixed_asset",
        "other_asset",
        "liability",
        "equity",
        "expense",
        "income",
        "unknown",
    ]);

export declare namespace AccountType {
    type Raw =
        | "accounts_payable"
        | "accounts_receivable"
        | "bank"
        | "credit_card"
        | "fixed_asset"
        | "other_asset"
        | "liability"
        | "equity"
        | "expense"
        | "income"
        | "unknown";
}
