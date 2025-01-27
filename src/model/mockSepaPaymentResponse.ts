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
import { FiatMoneyUsd } from './fiatMoneyUsd';

export class MockSepaPaymentResponse {
    /**
    * SEPA tracking reference that needs to be set in the payment details or description.
    */
    'trackingRef'?: string;
    'amount'?: FiatMoneyUsd;
    /**
    * Enumerated status of the SEPA payment. Status `pending` indicates that the SEPA payment is in process; `processed` indicates it finished successfully; `failed` indicates it failed.
    */
    'status'?: MockSepaPaymentResponse.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "trackingRef",
            "baseName": "trackingRef",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "MockSepaPaymentResponse.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return MockSepaPaymentResponse.attributeTypeMap;
    }
}

export namespace MockSepaPaymentResponse {
    export enum StatusEnum {
        Pending = <any> 'pending',
        Processed = <any> 'processed',
        Failed = <any> 'failed'
    }
}
