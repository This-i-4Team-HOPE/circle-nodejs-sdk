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
import { Chain } from './chain';

export class TokenAmount {
    /**
    * Magnitude of the amount, in units of the currency, with a `.`.
    */
    'amount': string;
    'chain': Chain;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "Chain"
        }    ];

    static getAttributeTypeMap() {
        return TokenAmount.attributeTypeMap;
    }
}

