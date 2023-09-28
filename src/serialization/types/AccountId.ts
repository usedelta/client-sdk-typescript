/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const AccountId: core.serialization.Schema<serializers.AccountId.Raw, DeltaApi.AccountId> =
    core.serialization.string();

export declare namespace AccountId {
    type Raw = string;
}