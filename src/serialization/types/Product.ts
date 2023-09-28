/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DeltaApi from "../../api";
import * as core from "../../core";

export const Product: core.serialization.ObjectSchema<serializers.Product.Raw, DeltaApi.Product> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        connectionId: core.serialization.property("connection_id", core.serialization.string().optional()),
        platformId: core.serialization.property("platform_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        category: core.serialization.string().optional(),
        status: core.serialization.string().optional(),
        media: core.serialization.list(core.serialization.unknown()).optional(),
        variants: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).ProductWithoutIdVariantsItem))
            .optional(),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
    });

export declare namespace Product {
    interface Raw {
        id?: string | null;
        connection_id?: string | null;
        platform_id?: string | null;
        name?: string | null;
        description?: string | null;
        category?: string | null;
        status?: string | null;
        media?: unknown[] | null;
        variants?: serializers.ProductWithoutIdVariantsItem.Raw[] | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}