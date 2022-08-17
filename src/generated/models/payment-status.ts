/* tslint:disable */
/* eslint-disable */
/**
 * Circle APIs
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Enumerated status of the payment. `pending` means the payment is waiting to be processed. `confirmed` means the payment has been approved by the bank and the merchant can treat it as successful, but settlement funds are not yet available to the merchant.  `paid` means settlement funds have been received and are available to the merchant. `failed` means something went wrong (most commonly that the payment was denied). `action_required` means that additional steps are required to process this payment; refer to `requiredAction` for more details. Terminal states are `paid` and `failed`.
 * @export
 * @enum {string}
 */

export const PaymentStatus = {
    Pending: 'pending',
    Confirmed: 'confirmed',
    Paid: 'paid',
    Failed: 'failed',
    ActionRequired: 'action_required'
} as const;

export type PaymentStatus = typeof PaymentStatus[keyof typeof PaymentStatus];


