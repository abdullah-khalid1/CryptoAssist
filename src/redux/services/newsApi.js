import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "2d3f48771600487ea12a12993d877fc1";

const createRequest = (url) => ({ url });

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (cryptocurrency) =>
        createRequest(`?q=${cryptocurrency}&apiKey=${API_KEY}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = newsApi;
