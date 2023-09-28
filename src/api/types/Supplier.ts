/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DeltaApi from "..";

export interface Supplier {
    id?: DeltaApi.SupplierId;
    /** Unique identifier of the integration on delta. */
    connectionId?: string;
    /** Unique identifier of platform for the customer. */
    platformId?: string;
    /** Name of the supplier. */
    name?: string;
    /** Address of the supplier. */
    address1?: string;
    /** Address of the supplier. */
    address2?: string;
    /** City of the supplier. */
    city?: string;
    /** ISO country code. */
    country?: string;
    /** Email of the supplier. */
    email?: string;
    /** Phone number of the supplier. */
    phone?: string;
    /** Postal Code of the supplier. */
    postalCode?: string;
    /** ISO currency code of the supplier. */
    currency?: string;
    /** Status of the supplier (active, inactive). */
    status?: string;
}
