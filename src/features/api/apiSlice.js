import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/" }),
  tagTypes: ["Tasks", "User"],
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
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: "user/logout",
          credentials: "include",
          method: "GET",
        };
      },
      invalidatesTags: [{ type: "User", id: "LIST" }],
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
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    getUser: builder.query({
      query: () => {
        return { url: "user", credentials: "include" };
      },
      providesTags: [{ type: "User", id: "LIST" }],
    }),
    getTasks: builder.query({
      query: () => {
        return { url: "tasks", credentials: "include" };
      },
      providesTags: [{ type: "Tasks", id: "LIST" }],
    }),
    addTask: builder.mutation({
      query(taskObj) {
        return {
          url: "tasks",
          credentials: "include",
          method: "POST",
          body: {
            ...taskObj,
          },
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
    updateTask: builder.mutation({
      query(taskObject) {
        return {
          url: "tasks",
          credentials: "include",
          method: "PUT",
          body: { ...taskObject },
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
    deleteTask: builder.mutation({
      query(_id) {
        return {
          url: "tasks",
          credentials: "include",
          method: "DELETE",
          body: { _id },
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useGetUserQuery,
  useLoginUserMutation,
  useLogoutUserMutation,
  useCreateUserMutation,
} = apiSlice;
