import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import DOGS_API_KEY from '../../.env.local';

//JUST NEED TO DEFINE AN API SLICE FOR EACH API SERVER, NOT FOR EACH ENDPOINT (BLOG EX: POST, COMMENTS, USERS)

//RTK QUERY COMES WITH ITS OWN BUILT IN FETCHWRAPPER CALLED FETCH BASED QUERY

export const dogsApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = dogsApiSlice;
