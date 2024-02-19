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
import { MockWirePaymentResponse } from './mockWirePaymentResponse';

export class CreateWirePaymentResponse {
    'data'?: MockWirePaymentResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "MockWirePaymentResponse"
        }    ];

    static getAttributeTypeMap() {
        return CreateWirePaymentResponse.attributeTypeMap;
    }
}

