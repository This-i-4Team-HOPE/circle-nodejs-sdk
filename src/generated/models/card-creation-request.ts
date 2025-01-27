/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BillingDetails } from "./billing-details";
import { MetadataCardAndAch } from "./metadata-card-and-ach";

/**
 *
 * @export
 * @interface CardCreationRequest
 */
export interface CardCreationRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof CardCreationRequest
   */
  idempotencyKey: string;
  /**
   * Universally unique identifier (UUID v4) of the public key used in encryption. NOTE the sandbox environment uses the default value of `key1`. For this reason the example supplied is `key1` rather than a UUID.
   * @type {string}
   * @memberof CardCreationRequest
   */
  keyId?: string;
  /**
   * PGP encrypted base64 encoded string. Contains Number and CVV. * **Number**: Card number. No spaces or other separators. REQUIRED * **CVV (Card Verification Number)**: Three or four digit security code. REQUIRED\'
   * @type {string}
   * @memberof CardCreationRequest
   */
  encryptedData: string;
  /**
   *
   * @type {BillingDetails}
   * @memberof CardCreationRequest
   */
  billingDetails: BillingDetails;
  /**
   * Two digit number representing the card\'s expiration month.
   * @type {number}
   * @memberof CardCreationRequest
   */
  expMonth: number;
  /**
   * Four digit number representing the card\'s expiration year.
   * @type {number}
   * @memberof CardCreationRequest
   */
  expYear: number;
  /**
   *
   * @type {MetadataCardAndAch}
   * @memberof CardCreationRequest
   */
  metadata: MetadataCardAndAch;
}
