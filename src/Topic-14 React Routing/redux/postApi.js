import { userApi } from "./userApi";

export const extendedAPi = userApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getAllPosts: builder.query({
        query: () => "/posts/get-all-posts",
      }),
      getAllComments: builder.query({
        query: () => "/comments/get-all-comments",
      }),
    };
  },
  overrideExisting: false,
});

// enhanceEndpoints()
export const { useGetAllPostsQuery, useGetAllCommentsQuery } = extendedAPi;
