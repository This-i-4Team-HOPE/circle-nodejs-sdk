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

export class WireInstructionBeneficiary {
    /**
    * Name of the beneficiary.
    */
    'name'?: string;
    /**
    * Address line 1 of the beneficiary\'s address.
    */
    'address1'?: string;
    /**
    * Address line 2 of the beneficiary\'s address.
    */
    'address2'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string"
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WireInstructionBeneficiary.attributeTypeMap;
    }
}

