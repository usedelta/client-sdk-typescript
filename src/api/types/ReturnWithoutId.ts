/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DeltaApi from "..";

export interface ReturnWithoutId {
    /** The unique identifier of the return within delta. */
    id: string;
    /** Unique identifier of the connected platform within delta. */
    connectionId?: string;
    /** The platform-specific ID of the return. */
    platformId?: string;
    /** Status of the order return. Can be one of announced, transit, delivered, canceled, completed, or other. */
    status?: DeltaApi.ReturnWithoutIdStatus;
    /** The number of items within the return. */
    quantity?: number;
    /** A message of the shopper for the return. */
    shopperMessage?: string;
    /** The name of the carrier used for the return. */
    carrier?: string;
    /** The tracking number for the return. */
    trackingNumber?: string;
    /** The date when the return was created. (ISO 8601) */
    createdAt?: string;
    /** The date when the return was last updated. (ISO 8601) */
    updatedAt?: string;
    /** The orders and products of the return. */
    returnedOrders?: DeltaApi.ReturnWithoutIdReturnedOrdersItem[];
}
