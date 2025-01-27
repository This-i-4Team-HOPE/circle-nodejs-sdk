/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface MetadataPhoneEmail
 */
export interface MetadataPhoneEmail {
  /**
   * Email of the user.
   * @type {string}
   * @memberof MetadataPhoneEmail
   */
  email: string;
  /**
   * Phone number of the user in E.164 format. We recommend using a library such as [libphonenumber](https://github.com/google/libphonenumber) to parse and validate phone numbers.
   * @type {string}
   * @memberof MetadataPhoneEmail
   */
  phoneNumber?: string;
}
