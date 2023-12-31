/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const Customer: core.serialization.ObjectSchema<serializers.Customer.Raw, DeltaApi.Customer> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("..")).CustomerId).optional(),
        connectionId: core.serialization.property("connection_id", core.serialization.string().optional()),
        platformId: core.serialization.property("platform_id", core.serialization.string().optional()),
        address1: core.serialization.string().optional(),
        address2: core.serialization.string().optional(),
        city: core.serialization.string().optional(),
        country: core.serialization.string().optional(),
        email: core.serialization.string().optional(),
        phone: core.serialization.string().optional(),
        postalCode: core.serialization.property("postal_code", core.serialization.string().optional()),
    });

export declare namespace Customer {
    interface Raw {
        id?: serializers.CustomerId.Raw | null;
        connection_id?: string | null;
        platform_id?: string | null;
        address1?: string | null;
        address2?: string | null;
        city?: string | null;
        country?: string | null;
        email?: string | null;
        phone?: string | null;
        postal_code?: string | null;
    }
}
