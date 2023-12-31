/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Billing address for the order
 */
export interface OrderShippingAddress {
    /** The first name of the customer. */
    firstName?: string;
    /** The last name of the customer. */
    lastName?: string;
    /** The first address line of the address. */
    address1?: string;
    /** The second address line of the address. */
    address2?: string;
    /** The company name of the customer. */
    companyName?: string;
    /** The postal code of the address. */
    postalCode?: string;
    /** The city of the address. */
    city?: string;
    /** the region of the address. */
    region?: string;
    /** The country of the address (ISO 3166-1). */
    countryCode?: string;
    /** The email address of the customer. */
    email?: string;
    /** The phone number of the customer. */
    phone?: string;
}
