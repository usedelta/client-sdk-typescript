/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const AccountStatus: core.serialization.Schema<serializers.AccountStatus.Raw, DeltaApi.AccountStatus> =
    core.serialization.enum_(["active", "inactive", "pending"]);

export declare namespace AccountStatus {
    type Raw = "active" | "inactive" | "pending";
}
