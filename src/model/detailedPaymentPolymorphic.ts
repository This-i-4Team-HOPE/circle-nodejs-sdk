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
import { BasicCancel } from './basicCancel';
import { BasicPayment } from './basicPayment';
import { BasicRefund } from './basicRefund';
import { FiatMoneyUsd } from './fiatMoneyUsd';
import { MetadataPhoneEmail } from './metadataPhoneEmail';
import { PaymentErrorCode } from './paymentErrorCode';
import { PaymentStatus } from './paymentStatus';
import { PaymentVerificationResponse } from './paymentVerificationResponse';
import { RequiredAction } from './requiredAction';
import { RiskEvaluation } from './riskEvaluation';
import { SourceResponse } from './sourceResponse';

export class DetailedPaymentPolymorphic {
    /**
    * Unique system generated identifier for the entity.
    */
    'id': string;
    /**
    * Type of the payment object.
    */
    'type': DetailedPaymentPolymorphic.TypeEnum;
    /**
    * Unique system generated identifier for the merchant.
    */
    'merchantId': string;
    /**
    * Unique system generated identifier for the wallet of the merchant.
    */
    'merchantWalletId'?: string;
    'amount': FiatMoneyUsd;
    'source': SourceResponse;
    /**
    * Enumerated description of the payment.
    */
    'description'?: DetailedPaymentPolymorphic.DescriptionEnum;
    'status': PaymentStatus;
    'requiredAction'?: RequiredAction;
    'verification'?: PaymentVerificationResponse;
    'originalPayment'?: BasicPayment;
    'cancel'?: BasicCancel | null;
    'refunds'?: Array<BasicRefund> | null;
    'fees'?: FiatMoneyUsd;
    /**
    * Payment tracking reference. Will be present once known.
    */
    'trackingRef'?: string | null;
    /**
    * External network identifier which will be present once provided from the applicable network.   Examples: * **Input/Output Message Accountability Data (IMAD/OMAD)**: unique number given to each FedWire payment when using the Federal Reserve Bank Service which can be used to investigate and track wire transfers. 
    */
    'externalRef'?: string;
    'errorCode'?: PaymentErrorCode | null;
    'metadata'?: MetadataPhoneEmail;
    /**
    * The channel identifier that can be set for the payment. When not provided, the default channel is used.
    */
    'channel'?: string;
    'riskEvaluation'?: RiskEvaluation | null;
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
            "name": "type",
            "baseName": "type",
            "type": "DetailedPaymentPolymorphic.TypeEnum"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "merchantWalletId",
            "baseName": "merchantWalletId",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "SourceResponse"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "DetailedPaymentPolymorphic.DescriptionEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentStatus"
        },
        {
            "name": "requiredAction",
            "baseName": "requiredAction",
            "type": "RequiredAction"
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "PaymentVerificationResponse"
        },
        {
            "name": "originalPayment",
            "baseName": "originalPayment",
            "type": "BasicPayment"
        },
        {
            "name": "cancel",
            "baseName": "cancel",
            "type": "BasicCancel"
        },
        {
            "name": "refunds",
            "baseName": "refunds",
            "type": "Array<BasicRefund>"
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "trackingRef",
            "baseName": "trackingRef",
            "type": "string"
        },
        {
            "name": "externalRef",
            "baseName": "externalRef",
            "type": "string"
        },
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "PaymentErrorCode"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "MetadataPhoneEmail"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "riskEvaluation",
            "baseName": "riskEvaluation",
            "type": "RiskEvaluation"
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
        return DetailedPaymentPolymorphic.attributeTypeMap;
    }
}

export namespace DetailedPaymentPolymorphic {
    export enum TypeEnum {
        Payment = <any> 'payment',
        Refund = <any> 'refund',
        Cancel = <any> 'cancel'
    }
    export enum DescriptionEnum {
        Payment = <any> 'Payment'
    }
}
