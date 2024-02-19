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
import { BankDestination } from './bankDestination';
import { FiatMoneyUsd } from './fiatMoneyUsd';
import { MetadataPayout } from './metadataPayout';
import { WalletLocation } from './walletLocation';

export class PayoutCreationRequest {
    /**
    * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
    */
    'idempotencyKey': string;
    'source'?: WalletLocation;
    'destination': BankDestination;
    'amount': FiatMoneyUsd;
    'metadata': MetadataPayout;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "idempotencyKey",
            "baseName": "idempotencyKey",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "WalletLocation"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "BankDestination"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "MetadataPayout"
        }    ];

    static getAttributeTypeMap() {
        return PayoutCreationRequest.attributeTypeMap;
    }
}

