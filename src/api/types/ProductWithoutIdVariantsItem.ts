/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DeltaApi from "..";

export interface ProductWithoutIdVariantsItem {
    /** Unique identifier of the variant within delta. */
    id?: string;
    /** The platform-specific ID of the product. */
    platformId?: string;
    /** The platform-specific ID of the variant. */
    variantId?: string;
    /** The barcode for the item. */
    barcode?: string;
    /** The SKU of the item. */
    sku?: string;
    /** The name of the item. */
    name?: string;
    /** The status of the item. */
    status?: string;
    /** The color of the item. */
    color?: string;
    /** The size of the item, For example "M". */
    size?: string;
    /** The price information about the item. */
    pricingDetails?: DeltaApi.ProductWithoutIdVariantsItemPricingDetails;
    /** The country of origin of the item. (ISO 3166-1) */
    countryOfOrigin?: string;
    customs?: DeltaApi.ProductWithoutIdVariantsItemCustoms;
    /** The total stock of the item. */
    totalStock?: number;
    /** The unit type of the item. */
    unitType?: DeltaApi.ProductWithoutIdVariantsItemUnitType;
    /** Boolean flag whether the item is replaceable. */
    replacement?: boolean;
    /** The regular replacement delivery time of the item. */
    replacementTime?: number;
    /** The minimum order quantity of the item. */
    orderMin?: number;
    /** The maximum order quantity of the item. */
    orderMax?: number;
    /** The number of package pieces. */
    pieces?: number;
    /** Boolean flag whether the item requires shipping. */
    requiresShipping?: boolean;
    /** The name of the carrier. */
    carrier?: string;
    /** The type of delivery (e.g. Same-Day Delivery, Standard 48h). */
    deliveryType?: string;
    /** The regular delivery time of the item. */
    deliveryTime?: number;
    /** The size and weight information of the item.. */
    dimensions?: DeltaApi.ProductWithoutIdVariantsItemDimensions;
    /** The media files of the item. */
    media?: DeltaApi.ProductWithoutIdVariantsItemMedia;
    /** The individual tags or attributes of the item. */
    tags?: DeltaApi.ProductWithoutIdVariantsItemTags;
    /** The date when the variant was created. (ISO 8601) */
    createdAt?: string;
    /** The date when the variant was last updated. (ISO 8601) */
    updatedAt?: string;
}
