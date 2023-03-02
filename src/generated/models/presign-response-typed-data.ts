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
import { NetworkFeeQuote } from "./network-fee-quote";
// May contain unused imports in some cases
// @ts-ignore
import { PresignDomain } from "./presign-domain";
// May contain unused imports in some cases
// @ts-ignore
import { PresignMessage } from "./presign-message";
// May contain unused imports in some cases
// @ts-ignore
import { PresignMessageTypes } from "./presign-message-types";

/**
 * The typed data
 * @export
 * @interface PresignResponseTypedData
 */
export interface PresignResponseTypedData {
  /**
   *
   * @type {PresignDomain}
   * @memberof PresignResponseTypedData
   */
  domain: PresignDomain;
  /**
   *
   * @type {PresignMessage}
   * @memberof PresignResponseTypedData
   */
  message: PresignMessage;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof PresignResponseTypedData
   */
  totalAmount: FiatMoneyUsd;
  /**
   * Who pays for network fee. Can only be endUser or merchant. If it\'s the endUser, totalAmount includes the network fee and networkFeeQuote isn\'t null; If it\'s the merchant, totalAmount doesn\'t include network fee and networkFeeQuote is null.
   * @type {string}
   * @memberof PresignResponseTypedData
   */
  feeChargeModel: PresignResponseTypedDataFeeChargeModelEnum;
  /**
   *
   * @type {NetworkFeeQuote}
   * @memberof PresignResponseTypedData
   */
  networkFeeQuote?: NetworkFeeQuote;
  /**
   *
   * @type {PresignMessageTypes}
   * @memberof PresignResponseTypedData
   */
  types: PresignMessageTypes;
  /**
   * Type of the message
   * @type {string}
   * @memberof PresignResponseTypedData
   */
  primaryType: PresignResponseTypedDataPrimaryTypeEnum;
}

export const PresignResponseTypedDataFeeChargeModelEnum = {
  EndUser: "endUser",
  Merchant: "merchant"
} as const;

export type PresignResponseTypedDataFeeChargeModelEnum =
  typeof PresignResponseTypedDataFeeChargeModelEnum[keyof typeof PresignResponseTypedDataFeeChargeModelEnum];
export const PresignResponseTypedDataPrimaryTypeEnum = {
  TransferWithAuthorization: "TransferWithAuthorization",
  Eip712Domain: "EIP712Domain"
} as const;

export type PresignResponseTypedDataPrimaryTypeEnum =
  typeof PresignResponseTypedDataPrimaryTypeEnum[keyof typeof PresignResponseTypedDataPrimaryTypeEnum];