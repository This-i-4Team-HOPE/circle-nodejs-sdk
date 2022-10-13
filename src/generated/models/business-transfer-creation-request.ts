/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { Money } from "./money";
// May contain unused imports in some cases
// @ts-ignore
import { TransferRequestVerifiedBlockchainLocation } from "./transfer-request-verified-blockchain-location";

/**
 *
 * @export
 * @interface BusinessTransferCreationRequest
 */
export interface BusinessTransferCreationRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof BusinessTransferCreationRequest
   */
  idempotencyKey: string;
  /**
   *
   * @type {TransferRequestVerifiedBlockchainLocation}
   * @memberof BusinessTransferCreationRequest
   */
  destination: TransferRequestVerifiedBlockchainLocation;
  /**
   *
   * @type {Money}
   * @memberof BusinessTransferCreationRequest
   */
  amount: Money;
}