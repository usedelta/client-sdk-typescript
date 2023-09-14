/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as UsedeltaApi from "../../api";
import * as core from "../../core";

export const OrderId: core.serialization.Schema<serializers.OrderId.Raw, UsedeltaApi.OrderId> =
    core.serialization.string();

export declare namespace OrderId {
    type Raw = string;
}