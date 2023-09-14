/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as UsedeltaApi from "../../api";
import * as core from "../../core";

export const FulfillmentOrdersItem: core.serialization.ObjectSchema<
    serializers.FulfillmentOrdersItem.Raw,
    UsedeltaApi.FulfillmentOrdersItem
> = core.serialization.object({
    platformId: core.serialization.property("platform_id", core.serialization.string().optional()),
});

export declare namespace FulfillmentOrdersItem {
    interface Raw {
        platform_id?: string | null;
    }
}