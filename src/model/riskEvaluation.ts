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

/**
* Results of risk evaluation. Only present if the payment is denied by Circle\'s risk service.
*/
export class RiskEvaluation {
    /**
    * Enumerated decision of the account.
    */
    'decision'?: RiskEvaluation.DecisionEnum;
    /**
    * Risk reason for the definitive decision outcome.
    */
    'reason'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "decision",
            "baseName": "decision",
            "type": "RiskEvaluation.DecisionEnum"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RiskEvaluation.attributeTypeMap;
    }
}

export namespace RiskEvaluation {
    export enum DecisionEnum {
        Approved = <any> 'approved',
        Denied = <any> 'denied',
        Review = <any> 'review'
    }
}
