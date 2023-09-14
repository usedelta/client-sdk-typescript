/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DeltaApi from "..";

/**
 * The price information about the item.
 */
export interface ProductVariantsItemPricingDetails {
    /** The current gross retail price of the item. */
    price?: number;
    /** The former gross retail price of the item. */
    formerPrice?: number;
    /** The manufacturer's recommended gross retail price of the item. */
    suggestedPrice?: number;
    /** The unit cost of the item. */
    unitCost?: number;
    /** The currency of the item. (ISO 4217) */
    isoCurrencyCode?: string;
    /** The tax rate of the item. */
    taxRate?: DeltaApi.ProductVariantsItemPricingDetailsTaxRate;
}
