import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const HEADERS = {
  "X-RapidAPI-Key": "85ded2c271msh1e986b9ef75e532p173246jsn89a8ea4441b8",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const BASE_URL = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: HEADERS });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptoQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
