/**
 * Core Functionality
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Money {
    /**
    * Magnitude of the amount, in units of the currency, with a `.`.
    */
    'amount': string;
    /**
    * Currency code for the amount.
    */
    'currency': Money.CurrencyEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Money.CurrencyEnum"
        }    ];

    static getAttributeTypeMap() {
        return Money.attributeTypeMap;
    }
}

export namespace Money {
    export enum CurrencyEnum {
        Usd = <any> 'USD',
        Eur = <any> 'EUR',
        Btc = <any> 'BTC',
        Eth = <any> 'ETH'
    }
}
