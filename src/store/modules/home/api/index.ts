import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getPool from './getPool';
import getShark from './getShark';

export const homeApi = createApi({
  reducerPath: 'homeApi',
  tagTypes: ['Home'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://34.124.160.35:8088/api/v1/',
    baseUrl: 'https://api.dextrading.io/api/v1/',
    // baseUrl: 'http://localhost:8000/api/',
  }),

  endpoints: (builder) => ({
    getSearch: builder.mutation({
      query: (keyword) => ({
        url: `search?q=${keyword}`,
        method: 'GET',
      }),
    }),
    getGasFee: builder.query({
      query: () => ({ url: `gas-fee` }),
    }),
    getInflation: builder.query({
      query: (contract) => ({ url: `inflation/${contract}` }),
    }),
    getHolder: builder.query({
      query: (contract) => ({ url: `holder/${contract}` }),
    }),
    getOverview: builder.query({
      query: (contract) => ({ url: `overview/${contract}` }),
    }),
    getPool: builder.query(getPool),
    getPrice: builder.query({
      query: (contract, days = 2) => ({
        url: `price/${contract}`,
        params: { days }
      }),
    }),
    getRating: builder.query({
      query: (contract) => ({ url: `rating/${contract}` }),
    }),
    getShark: builder.query(getShark),
    getSocialNetwork: builder.query({
      query: (contract) => ({ url: `social-network/${contract}` }),
    }),
    getTokenomics: builder.query({
      query: (contract) => ({ url: `tokenomics/${contract}` }),
    }),
    getTransaction: builder.query({
      query: (contract) => ({ url: `transaction/${contract}` }),
    }),
    getVolume: builder.query({
      query: (contract) => ({ url: `volume/${contract}` }),
    }),
    getWalletTotalTransaction: builder.query({
      query: (contract) => ({ url: `wallets/total-transaction/${contract}` }),
    }),
    getWalletProfitableByUsd: builder.query({
      query: (contract) => ({ url: `wallets/profitable-by-usd/${contract}` }),
    }),
    getWalletProfitableByPercent: builder.query({
      query: (contract) => ({ url: `wallets/profitable-by-percent/${contract}` }),
    }),
    getMetaMaskPublicAddress: builder.mutation({
      query: (publicAddress) => ({
        url: 'users',
        method: 'GET',
        params: { publicAddress }
      }),
    }),
    getFavoriteList: builder.query({
      query: () => ({ url: `favorite-list` }),
    }),
    postMetaMaskSignUp: builder.mutation({
      query: (publicAddress) => ({
        url: 'users',
        method: 'POST',
        body: { publicAddress },
        headers: {
          'Content-Type': 'application/json',
        }
      }),
    }),
    postMetaMaskAuthentication: builder.mutation({
      query: ({ publicAddress, signature }) => ({
        url: 'auth',
        method: 'POST',
        body: { publicAddress, signature },
        headers: {
          'Content-Type': 'application/json',
        }
      }),
    }),
  }),
});

export const {
  useGetSearchMutation,
  useGetGasFeeQuery,
  useGetInflationQuery,
  useGetHolderQuery,
  useGetOverviewQuery,
  useGetPoolQuery,
  useGetPriceQuery,
  useGetRatingQuery,
  useGetSharkQuery,
  useGetSocialNetworkQuery,
  useGetTokenomicsQuery,
  useGetTransactionQuery,
  useGetVolumeQuery,
  useGetWalletProfitableByPercentQuery,
  useGetWalletProfitableByUsdQuery,
  useGetWalletTotalTransactionQuery,
  useGetMetaMaskPublicAddressMutation,
  useGetFavoriteListQuery,
  usePostMetaMaskSignUpMutation,
  usePostMetaMaskAuthenticationMutation
} = homeApi;
