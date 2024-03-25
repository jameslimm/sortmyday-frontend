import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query(userObj) {
        return {
          url: "user",
          method: "POST",
          credentials: "include",
          body: {
            ...userObj,
          },
        };
      },
      invalidatesTags: ["User"],
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: "user/logout",
          credentials: "include",
          method: "GET",
        };
      },
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query(userObj) {
        return {
          url: "user/login",
          credentials: "include",
          method: "POST",
          body: {
            ...userObj,
          },
        };
      },
      invalidatesTags: ["User"],
    }),
    getUser: builder.query({
      query: () => {
        return { url: "user", credentials: "include" };
      },
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query(userObj) {
        return {
          url: "user",
          credentials: "include",
          method: "PUT",
          body: { ...userObj },
        };
      },
      onQueryStarted(userObj, { dispatch, queryFulfilled }) {
        const updateUserResult = dispatch(
          apiSlice.util.updateQueryData("getUser", undefined, (data) => {
            data.user = { ...data.user, ...userObj };
          })
        );
        queryFulfilled.catch(() => updateUserResult.undo());
      },
      invalidatesTags: [{ type: "User" }],
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginUserMutation,
  useLogoutUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
} = extendedApiSlice;
