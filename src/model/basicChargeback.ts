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
import { BasicChargebackHistory } from './basicChargebackHistory';
import { ChargebackCategories } from './chargebackCategories';

export class BasicChargeback {
    /**
    * Unique system generated identifier for the entity.
    */
    'id': string;
    /**
    * Unique system generated identifier for the payment that is associated to the chargeback item.
    */
    'paymentId': string;
    /**
    * Unique system generated identifier for the merchant.
    */
    'merchantId': string;
    /**
    * Reason code given by the card network for the chargeback item.
    */
    'reasonCode': string;
    'category'?: ChargebackCategories;
    /**
    * The chargeback item\'s history list will be sorted by create date descending: more recent chargeback statuses will be at the beginning of the list. 
    */
    'history': Array<BasicChargebackHistory>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "paymentId",
            "baseName": "paymentId",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "reasonCode",
            "baseName": "reasonCode",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "ChargebackCategories"
        },
        {
            "name": "history",
            "baseName": "history",
            "type": "Array<BasicChargebackHistory>"
        }    ];

    static getAttributeTypeMap() {
        return BasicChargeback.attributeTypeMap;
    }
}

