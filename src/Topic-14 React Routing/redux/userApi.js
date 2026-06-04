import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  keepUnusedDataFor: 300,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["Users"],
  endpoints: (builder) => {
    return {
      getAllUsers: builder.query({
        query: () => "/user/get-all-users",
        providesTags: ["Users"],
      }),
      getSingleUser: builder.query({
        query: (id) => `/user/getSingle/${id}`,
      }),
      createUser: builder.mutation({
        query: (params) => ({
          url: "/user/createUser",
          method: "POST",
          body: params,
        }),
        invalidatesTags: ["Users"],
      }),
    };
  },
});

export const {
  useGetAllUsersQuery,
  useLazyGetSingleUserQuery,
  useCreateUserMutation,
} = userApi;

/**
 * ! use *end-point* Query
 * ! useLazy*end-point*Query
 * ! use*end-point*Mutation Hook
 * ! transformReponse
 * ! transformErrorResponse
 * ! tagTypes
 * ! providesTags
 * ! invalidatesTags
 * ! polling
 * POST
 * PUT
 * PATCH
 * DELETE
 */
