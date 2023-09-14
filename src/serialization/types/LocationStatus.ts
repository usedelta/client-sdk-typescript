/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as UsedeltaApi from "../../api";
import * as core from "../../core";

export const LocationStatus: core.serialization.Schema<serializers.LocationStatus.Raw, UsedeltaApi.LocationStatus> =
    core.serialization.enum_(["active", "inactive", "unknown"]);

export declare namespace LocationStatus {
    type Raw = "active" | "inactive" | "unknown";
}
