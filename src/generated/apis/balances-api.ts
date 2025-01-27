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

import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig
} from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setBearerAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError
} from "../base";
// @ts-ignore
import { GetBalancesResponse } from "../models";
// @ts-ignore
import { GetBusinessAccountBalancesResponse } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
/**
 * BalancesApi - axios parameter creator
 * @export
 */
export const BalancesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Retrieves the balance of merchant funds that have settled and also of funds that have been sent for processing but have not yet settled.
     * @summary List all balances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBalances: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/balances`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Retrieves the balance of funds that are available for use.
     * @summary List all balances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessAccountBalances: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/businessAccount/balances`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};

/**
 * BalancesApi - functional programming interface
 * @export
 */
export const BalancesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = BalancesApiAxiosParamCreator(configuration);
  return {
    /**
     * Retrieves the balance of merchant funds that have settled and also of funds that have been sent for processing but have not yet settled.
     * @summary List all balances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBalances(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetBalancesResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getBalances(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Retrieves the balance of funds that are available for use.
     * @summary List all balances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBusinessAccountBalances(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetBusinessAccountBalancesResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBusinessAccountBalances(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    }
  };
};

/**
 * BalancesApi - factory interface
 * @export
 */
export const BalancesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = BalancesApiFp(configuration);
  return {
    /**
     * Retrieves the balance of merchant funds that have settled and also of funds that have been sent for processing but have not yet settled.
     * @summary List all balances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBalances(options?: any): AxiosPromise<GetBalancesResponse> {
      return localVarFp
        .getBalances(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieves the balance of funds that are available for use.
     * @summary List all balances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessAccountBalances(
      options?: any
    ): AxiosPromise<GetBusinessAccountBalancesResponse> {
      return localVarFp
        .getBusinessAccountBalances(options)
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * BalancesApi - object-oriented interface
 * @export
 * @class BalancesApi
 * @extends {BaseAPI}
 */
export class BalancesApi extends BaseAPI {
  /**
   * Retrieves the balance of merchant funds that have settled and also of funds that have been sent for processing but have not yet settled.
   * @summary List all balances
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BalancesApi
   */
  public getBalances(options?: AxiosRequestConfig) {
    return BalancesApiFp(this.configuration)
      .getBalances(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieves the balance of funds that are available for use.
   * @summary List all balances
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BalancesApi
   */
  public getBusinessAccountBalances(options?: AxiosRequestConfig) {
    return BalancesApiFp(this.configuration)
      .getBusinessAccountBalances(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
