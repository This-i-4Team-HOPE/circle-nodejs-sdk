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

export class PublicKey {
    /**
    * Universally unique identifier (UUID v4) of the public key used in encryption. NOTE the sandbox environment uses the default value of `key1`. For this reason the example supplied is `key1` rather than a UUID.
    */
    'keyId': string;
    /**
    * A PGP ascii-armor encoded public key.
    */
    'publicKey': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "keyId",
            "baseName": "keyId",
            "type": "string"
        },
        {
            "name": "publicKey",
            "baseName": "publicKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PublicKey.attributeTypeMap;
    }
}

