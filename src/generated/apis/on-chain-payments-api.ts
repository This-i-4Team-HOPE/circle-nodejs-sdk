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
import { BadRequest } from "../models";
// @ts-ignore
import { Conflict } from "../models";
// @ts-ignore
import { GenerateAddressRequest } from "../models";
// @ts-ignore
import { GenerateAddressResponse } from "../models";
// @ts-ignore
import { GetAddressesResponse } from "../models";
// @ts-ignore
import { GetTransferResponse } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
// @ts-ignore
import { NotFound } from "../models";
// @ts-ignore
import { SearchTransfersResponse } from "../models";
/**
 * OnChainPaymentsApi - axios parameter creator
 * @export
 */
export const OnChainPaymentsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you\'re requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit.
     * @summary Create a blockchain address
     * @param {string} walletId Identifier for the wallet.
     * @param {GenerateAddressRequest} [generateAddressRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateAddress: async (
      walletId: string,
      generateAddressRequest?: GenerateAddressRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'walletId' is not null or undefined
      assertParamExists("generateAddress", "walletId", walletId);
      const localVarPath = `/v1/wallets/{walletId}/addresses`.replace(
        `{${"walletId"}}`,
        encodeURIComponent(String(walletId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        generateAddressRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Retrieves a list of addresses associated with a wallet.
     * @summary List all addresses
     * @param {string} walletId Identifier for the wallet.
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddresses: async (
      walletId: string,
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'walletId' is not null or undefined
      assertParamExists("getAddresses", "walletId", walletId);
      const localVarPath = `/v1/wallets/{walletId}/addresses`.replace(
        `{${"walletId"}}`,
        encodeURIComponent(String(walletId))
      );
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

      if (from !== undefined) {
        localVarQueryParameter["from"] =
          (from as any) instanceof Date ? (from as any).toISOString() : from;
      }

      if (to !== undefined) {
        localVarQueryParameter["to"] =
          (to as any) instanceof Date ? (to as any).toISOString() : to;
      }

      if (pageBefore !== undefined) {
        localVarQueryParameter["pageBefore"] = pageBefore;
      }

      if (pageAfter !== undefined) {
        localVarQueryParameter["pageAfter"] = pageAfter;
      }

      if (pageSize !== undefined) {
        localVarQueryParameter["pageSize"] = pageSize;
      }

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
     *
     * @summary Get a transfer
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {boolean} [returnIdentities] Specify if you would like to see identities in the response. Restricts maximum returned items to 5. By default returnIdentities is false, resulting in the response not returning &#x60;data.source.identities&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTransfer: async (
      id: string,
      returnIdentities?: boolean,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTransfer", "id", id);
      const localVarPath = `/v1/transfers/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
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

      if (returnIdentities !== undefined) {
        localVarQueryParameter["returnIdentities"] = returnIdentities;
      }

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
     * Searches for transfers involving the provided wallets. If no wallet ids are provided, searches all wallets associated with your Circle API account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
     * @summary List all transfers
     * @param {string} [walletId] Unique identifier for the source or destination wallet of transfers, if any. May not be used in conjunction with destinationWalletId or sourceWalletId. Useful for fetching all transfers related to a wallet.
     * @param {string} [sourceWalletId] Unique identifier for the source wallet of transfers, if any.
     * @param {string} [destinationWalletId] Unique identifier for the destination wallet of transfers, if any.
     * @param {boolean} [returnIdentities] Specify if you would like to see identities in the response. Restricts maximum returned items to 5. By default returnIdentities is false, resulting in the response not returning &#x60;data.source.identities&#x60;.
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTransfers: async (
      walletId?: string,
      sourceWalletId?: string,
      destinationWalletId?: string,
      returnIdentities?: boolean,
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/transfers`;
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

      if (walletId !== undefined) {
        localVarQueryParameter["walletId"] = walletId;
      }

      if (sourceWalletId !== undefined) {
        localVarQueryParameter["sourceWalletId"] = sourceWalletId;
      }

      if (destinationWalletId !== undefined) {
        localVarQueryParameter["destinationWalletId"] = destinationWalletId;
      }

      if (returnIdentities !== undefined) {
        localVarQueryParameter["returnIdentities"] = returnIdentities;
      }

      if (from !== undefined) {
        localVarQueryParameter["from"] =
          (from as any) instanceof Date ? (from as any).toISOString() : from;
      }

      if (to !== undefined) {
        localVarQueryParameter["to"] =
          (to as any) instanceof Date ? (to as any).toISOString() : to;
      }

      if (pageBefore !== undefined) {
        localVarQueryParameter["pageBefore"] = pageBefore;
      }

      if (pageAfter !== undefined) {
        localVarQueryParameter["pageAfter"] = pageAfter;
      }

      if (pageSize !== undefined) {
        localVarQueryParameter["pageSize"] = pageSize;
      }

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
 * OnChainPaymentsApi - functional programming interface
 * @export
 */
export const OnChainPaymentsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    OnChainPaymentsApiAxiosParamCreator(configuration);
  return {
    /**
     * Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you\'re requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit.
     * @summary Create a blockchain address
     * @param {string} walletId Identifier for the wallet.
     * @param {GenerateAddressRequest} [generateAddressRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async generateAddress(
      walletId: string,
      generateAddressRequest?: GenerateAddressRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GenerateAddressResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.generateAddress(
        walletId,
        generateAddressRequest,
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
     * Retrieves a list of addresses associated with a wallet.
     * @summary List all addresses
     * @param {string} walletId Identifier for the wallet.
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddresses(
      walletId: string,
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetAddressesResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAddresses(
        walletId,
        from,
        to,
        pageBefore,
        pageAfter,
        pageSize,
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
     *
     * @summary Get a transfer
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {boolean} [returnIdentities] Specify if you would like to see identities in the response. Restricts maximum returned items to 5. By default returnIdentities is false, resulting in the response not returning &#x60;data.source.identities&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTransfer(
      id: string,
      returnIdentities?: boolean,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetTransferResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTransfer(
        id,
        returnIdentities,
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
     * Searches for transfers involving the provided wallets. If no wallet ids are provided, searches all wallets associated with your Circle API account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
     * @summary List all transfers
     * @param {string} [walletId] Unique identifier for the source or destination wallet of transfers, if any. May not be used in conjunction with destinationWalletId or sourceWalletId. Useful for fetching all transfers related to a wallet.
     * @param {string} [sourceWalletId] Unique identifier for the source wallet of transfers, if any.
     * @param {string} [destinationWalletId] Unique identifier for the destination wallet of transfers, if any.
     * @param {boolean} [returnIdentities] Specify if you would like to see identities in the response. Restricts maximum returned items to 5. By default returnIdentities is false, resulting in the response not returning &#x60;data.source.identities&#x60;.
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchTransfers(
      walletId?: string,
      sourceWalletId?: string,
      destinationWalletId?: string,
      returnIdentities?: boolean,
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<SearchTransfersResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.searchTransfers(
        walletId,
        sourceWalletId,
        destinationWalletId,
        returnIdentities,
        from,
        to,
        pageBefore,
        pageAfter,
        pageSize,
        options
      );
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
 * OnChainPaymentsApi - factory interface
 * @export
 */
export const OnChainPaymentsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = OnChainPaymentsApiFp(configuration);
  return {
    /**
     * Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you\'re requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit.
     * @summary Create a blockchain address
     * @param {string} walletId Identifier for the wallet.
     * @param {GenerateAddressRequest} [generateAddressRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateAddress(
      walletId: string,
      generateAddressRequest?: GenerateAddressRequest,
      options?: any
    ): AxiosPromise<GenerateAddressResponse> {
      return localVarFp
        .generateAddress(walletId, generateAddressRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieves a list of addresses associated with a wallet.
     * @summary List all addresses
     * @param {string} walletId Identifier for the wallet.
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddresses(
      walletId: string,
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: any
    ): AxiosPromise<GetAddressesResponse> {
      return localVarFp
        .getAddresses(
          walletId,
          from,
          to,
          pageBefore,
          pageAfter,
          pageSize,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a transfer
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {boolean} [returnIdentities] Specify if you would like to see identities in the response. Restricts maximum returned items to 5. By default returnIdentities is false, resulting in the response not returning &#x60;data.source.identities&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTransfer(
      id: string,
      returnIdentities?: boolean,
      options?: any
    ): AxiosPromise<GetTransferResponse> {
      return localVarFp
        .getTransfer(id, returnIdentities, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Searches for transfers involving the provided wallets. If no wallet ids are provided, searches all wallets associated with your Circle API account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
     * @summary List all transfers
     * @param {string} [walletId] Unique identifier for the source or destination wallet of transfers, if any. May not be used in conjunction with destinationWalletId or sourceWalletId. Useful for fetching all transfers related to a wallet.
     * @param {string} [sourceWalletId] Unique identifier for the source wallet of transfers, if any.
     * @param {string} [destinationWalletId] Unique identifier for the destination wallet of transfers, if any.
     * @param {boolean} [returnIdentities] Specify if you would like to see identities in the response. Restricts maximum returned items to 5. By default returnIdentities is false, resulting in the response not returning &#x60;data.source.identities&#x60;.
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTransfers(
      walletId?: string,
      sourceWalletId?: string,
      destinationWalletId?: string,
      returnIdentities?: boolean,
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: any
    ): AxiosPromise<SearchTransfersResponse> {
      return localVarFp
        .searchTransfers(
          walletId,
          sourceWalletId,
          destinationWalletId,
          returnIdentities,
          from,
          to,
          pageBefore,
          pageAfter,
          pageSize,
          options
        )
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * OnChainPaymentsApi - object-oriented interface
 * @export
 * @class OnChainPaymentsApi
 * @extends {BaseAPI}
 */
export class OnChainPaymentsApi extends BaseAPI {
  /**
   * Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you\'re requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit.
   * @summary Create a blockchain address
   * @param {string} walletId Identifier for the wallet.
   * @param {GenerateAddressRequest} [generateAddressRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OnChainPaymentsApi
   */
  public generateAddress(
    walletId: string,
    generateAddressRequest?: GenerateAddressRequest,
    options?: AxiosRequestConfig
  ) {
    return OnChainPaymentsApiFp(this.configuration)
      .generateAddress(walletId, generateAddressRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieves a list of addresses associated with a wallet.
   * @summary List all addresses
   * @param {string} walletId Identifier for the wallet.
   * @param {string} [from] Queries items created since the specified date-time (inclusive).
   * @param {string} [to] Queries items created before the specified date-time (inclusive).
   * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
   * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
   * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OnChainPaymentsApi
   */
  public getAddresses(
    walletId: string,
    from?: string,
    to?: string,
    pageBefore?: string,
    pageAfter?: string,
    pageSize?: number,
    options?: AxiosRequestConfig
  ) {
    return OnChainPaymentsApiFp(this.configuration)
      .getAddresses(
        walletId,
        from,
        to,
        pageBefore,
        pageAfter,
        pageSize,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a transfer
   * @param {string} id Universally unique identifier (UUID v4) of a resource.
   * @param {boolean} [returnIdentities] Specify if you would like to see identities in the response. Restricts maximum returned items to 5. By default returnIdentities is false, resulting in the response not returning &#x60;data.source.identities&#x60;.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OnChainPaymentsApi
   */
  public getTransfer(
    id: string,
    returnIdentities?: boolean,
    options?: AxiosRequestConfig
  ) {
    return OnChainPaymentsApiFp(this.configuration)
      .getTransfer(id, returnIdentities, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Searches for transfers involving the provided wallets. If no wallet ids are provided, searches all wallets associated with your Circle API account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
   * @summary List all transfers
   * @param {string} [walletId] Unique identifier for the source or destination wallet of transfers, if any. May not be used in conjunction with destinationWalletId or sourceWalletId. Useful for fetching all transfers related to a wallet.
   * @param {string} [sourceWalletId] Unique identifier for the source wallet of transfers, if any.
   * @param {string} [destinationWalletId] Unique identifier for the destination wallet of transfers, if any.
   * @param {boolean} [returnIdentities] Specify if you would like to see identities in the response. Restricts maximum returned items to 5. By default returnIdentities is false, resulting in the response not returning &#x60;data.source.identities&#x60;.
   * @param {string} [from] Queries items created since the specified date-time (inclusive).
   * @param {string} [to] Queries items created before the specified date-time (inclusive).
   * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
   * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
   * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OnChainPaymentsApi
   */
  public searchTransfers(
    walletId?: string,
    sourceWalletId?: string,
    destinationWalletId?: string,
    returnIdentities?: boolean,
    from?: string,
    to?: string,
    pageBefore?: string,
    pageAfter?: string,
    pageSize?: number,
    options?: AxiosRequestConfig
  ) {
    return OnChainPaymentsApiFp(this.configuration)
      .searchTransfers(
        walletId,
        sourceWalletId,
        destinationWalletId,
        returnIdentities,
        from,
        to,
        pageBefore,
        pageAfter,
        pageSize,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}