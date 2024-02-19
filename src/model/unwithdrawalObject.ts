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

/**
* Return information if the payout is returned by bank. Only present if `errorCode` of payout is `transaction_returned`.
*/
export class UnwithdrawalObject {
    /**
    * Unique system generated identifier for the entity.
    */
    'id'?: string;
    /**
    * Universally unique identifier (UUID v4) of the payout that is associated with the return.
    */
    'payoutId'?: string;
    'amount'?: FiatMoneyUsd;
    'fees'?: FiatMoneyUsd;
    /**
    * Reason for the return.
    */
    'reason'?: string;
    /**
    * Status of the return. A `pending` status indicates that the return is in process; `complete` indicates it finished successfully; `failed` indicates it failed.
    */
    'status'?: UnwithdrawalObject.StatusEnum;
    /**
    * ISO-8601 UTC date/time format.
    */
    'createDate'?: string;
    /**
    * ISO-8601 UTC date/time format.
    */
    'updateDate'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "payoutId",
            "baseName": "payoutId",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "UnwithdrawalObject.StatusEnum"
        },
        {
            "name": "createDate",
            "baseName": "createDate",
            "type": "string"
        },
        {
            "name": "updateDate",
            "baseName": "updateDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UnwithdrawalObject.attributeTypeMap;
    }
}

export namespace UnwithdrawalObject {
    export enum StatusEnum {
        Pending = <any> 'pending',
        Complete = <any> 'complete',
        Failed = <any> 'failed'
    }
}
