import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl:"http://localhost:3000/api"
  }),
  keepUnusedDataFor: 300,
  tagTypes: ["Users"]
  ,endpoints: (builder) => {
    return {
      getAllUsers: builder.query({
        query: () => "/user/getAll",
       providesTags: ['Users']
      }),
      getSingleUser: builder.query({
        query: (id) => `/user/getSingle/${id}`,
      }),
      createUser: builder.mutation({
        query: (params) => ({
          url: "/user/createUser",
          method: "POST",
          body: params
        }),
       invalidatesTags: ['Users']
      })
    };
  },
});

export const { useGetAllUsersQuery, useLazyGetSingleUserQuery, useCreateUserMutation } = userApi;

/**
 * ! use *end-point* Query
 * ! useLazy*end-point*Query
 * ! use*end-point*Mutation Hook
 * ! transformReponse
 * ! transformErrorResponse
 * ! tags
 * POST
 * PUT
 * PATCH
 * DELETE
 */
