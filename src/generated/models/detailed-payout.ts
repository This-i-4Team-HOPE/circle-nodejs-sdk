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

import { BankDestination } from "./bank-destination";
import { FiatMoneyUsd } from "./fiat-money-usd";
import { FinalAdjustments } from "./final-adjustments";
import { PayoutErrorCode } from "./payout-error-code";
import { RiskEvaluation } from "./risk-evaluation";
import { UnwithdrawalObject } from "./unwithdrawal-object";

/**
 *
 * @export
 * @interface DetailedPayout
 */
export interface DetailedPayout {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof DetailedPayout
   */
  id?: string;
  /**
   * The identifier of the source wallet used to fund a payout.
   * @type {string}
   * @memberof DetailedPayout
   */
  sourceWalletId?: string;
  /**
   *
   * @type {BankDestination}
   * @memberof DetailedPayout
   */
  destination?: BankDestination;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof DetailedPayout
   */
  amount?: FiatMoneyUsd;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof DetailedPayout
   */
  fees?: FiatMoneyUsd;
  /**
   * Status of the payout. Status `pending` indicates that the payout is in process; `complete` indicates it finished successfully; `failed` indicates it failed.
   * @type {string}
   * @memberof DetailedPayout
   */
  status?: DetailedPayoutStatusEnum;
  /**
   * A payout tracking reference. Will be present once known.
   * @type {any}
   * @memberof DetailedPayout
   */
  trackingRef?: any | null;
  /**
   * External network identifier which will be present once provided from the applicable network.   Examples: * **Input/Output Message Accountability Data (IMAD/OMAD)**: unique number given to each FedWire payment when using the Federal Reserve Bank Service which can be used to investigate and track wire transfers.
   * @type {string}
   * @memberof DetailedPayout
   */
  externalRef?: string;
  /**
   *
   * @type {PayoutErrorCode}
   * @memberof DetailedPayout
   */
  errorCode?: PayoutErrorCode | null;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof DetailedPayout
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   *
   * @type {FinalAdjustments}
   * @memberof DetailedPayout
   */
  adjustments?: FinalAdjustments | null;
  /**
   *
   * @type {UnwithdrawalObject}
   * @memberof DetailedPayout
   */
  return?: UnwithdrawalObject | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof DetailedPayout
   */
  createDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof DetailedPayout
   */
  updateDate?: string;
}

export const DetailedPayoutStatusEnum = {
  Pending: "pending",
  Complete: "complete",
  Failed: "failed"
} as const;

export type DetailedPayoutStatusEnum =
  typeof DetailedPayoutStatusEnum[keyof typeof DetailedPayoutStatusEnum];
