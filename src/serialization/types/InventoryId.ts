/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as UsedeltaApi from "../../api";
import * as core from "../../core";

export const InventoryId: core.serialization.Schema<serializers.InventoryId.Raw, UsedeltaApi.InventoryId> =
    core.serialization.string();

export declare namespace InventoryId {
    type Raw = string;
}
