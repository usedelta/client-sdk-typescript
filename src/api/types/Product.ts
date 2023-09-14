/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as UsedeltaApi from "..";

export interface Product {
    id: UsedeltaApi.ProductId;
    /** Unique identifier of the integration on delta. */
    connectionId?: string;
    /** The platform-specific ID of the product. */
    platformId?: string;
    /** The name of the product. */
    name?: string;
    /** The description of the product. */
    description?: string;
    /** The category of the product. */
    category?: string;
    /** The status of the product. */
    status?: string;
    /** The media files of the product. */
    media?: unknown[];
    /** Variant of the product */
    variants?: UsedeltaApi.ProductVariantsItem[];
    /** The date when the product was created. (ISO 8601) */
    createdAt?: string;
    /** The date when the product was last updated. (ISO 8601) */
    updatedAt?: string;
}
