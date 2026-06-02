import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => {
    return {
      getAllUsers: builder.query({
        query: () => "/users",
      }),
      getSingleUser: builder.query({
        query: (id) => `users/${id}`,
      }),
    };
  },
});

export const { useGetAllUsersQuery, useGetSingleUserQuery } = userApi;

/**
 * ! useMutation Hook
 * ! transformReponse
 * ! transformErrorResponse
 * ! tags
 * POST
 * PUT
 * PATCH
 * DELETE
 */
