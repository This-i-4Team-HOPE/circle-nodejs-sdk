/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { FiatMoneyUsd } from "./fiat-money-usd";
// May contain unused imports in some cases
// @ts-ignore
import { FiatPayoutCreationRequestDestination } from "./fiat-payout-creation-request-destination";
// May contain unused imports in some cases
// @ts-ignore
import { MetadataPayout } from "./metadata-payout";
// May contain unused imports in some cases
// @ts-ignore
import { WalletLocation } from "./wallet-location";

/**
 *
 * @export
 * @interface FiatPayoutCreationRequest
 */
export interface FiatPayoutCreationRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof FiatPayoutCreationRequest
   */
  idempotencyKey: string;
  /**
   *
   * @type {WalletLocation}
   * @memberof FiatPayoutCreationRequest
   */
  source?: WalletLocation;
  /**
   *
   * @type {FiatPayoutCreationRequestDestination}
   * @memberof FiatPayoutCreationRequest
   */
  destination: FiatPayoutCreationRequestDestination;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof FiatPayoutCreationRequest
   */
  amount: FiatMoneyUsd;
  /**
   *
   * @type {MetadataPayout}
   * @memberof FiatPayoutCreationRequest
   */
  metadata: MetadataPayout;
}