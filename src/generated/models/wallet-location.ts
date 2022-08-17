/* tslint:disable */
/* eslint-disable */
/**
 * Circle APIs
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface WalletLocation
 */
export interface WalletLocation {
    /**
     * 
     * @type {string}
     * @memberof WalletLocation
     */
    'type': WalletLocationTypeEnum;
    /**
     * The id of the wallet.
     * @type {string}
     * @memberof WalletLocation
     */
    'id': string;
}

export const WalletLocationTypeEnum = {
    Wallet: 'wallet'
} as const;

export type WalletLocationTypeEnum = typeof WalletLocationTypeEnum[keyof typeof WalletLocationTypeEnum];

