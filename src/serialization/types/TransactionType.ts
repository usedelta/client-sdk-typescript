/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as UsedeltaApi from "../../api";
import * as core from "../../core";

export const TransactionType: core.serialization.Schema<serializers.TransactionType.Raw, UsedeltaApi.TransactionType> =
    core.serialization.enum_(["sale", "refunt", "other"]);

export declare namespace TransactionType {
    type Raw = "sale" | "refunt" | "other";
}
