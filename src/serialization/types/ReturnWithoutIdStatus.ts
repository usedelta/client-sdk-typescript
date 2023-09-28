/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const ReturnWithoutIdStatus: core.serialization.Schema<
    serializers.ReturnWithoutIdStatus.Raw,
    DeltaApi.ReturnWithoutIdStatus
> = core.serialization.enum_(["ANNOUNCED", "TRANSIT", "DELIVERED", "CANCELED", "COMPLETED", "OTHER"]);

export declare namespace ReturnWithoutIdStatus {
    type Raw = "ANNOUNCED" | "TRANSIT" | "DELIVERED" | "CANCELED" | "COMPLETED" | "OTHER";
}
