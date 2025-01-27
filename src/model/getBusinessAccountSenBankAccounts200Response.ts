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
import { SenFiatAccountResponse } from './senFiatAccountResponse';

export class GetBusinessAccountSenBankAccounts200Response {
    'data'?: Array<SenFiatAccountResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<SenFiatAccountResponse>"
        }    ];

    static getAttributeTypeMap() {
        return GetBusinessAccountSenBankAccounts200Response.attributeTypeMap;
    }
}

