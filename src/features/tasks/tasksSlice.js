import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => {
        return { url: "tasks", credentials: "include" };
      },
      providesTags: ["Tasks"],
    }),
    getTask: builder.query({
      query: (id) => `tasks/${id}`,
      providesTags: ["Tasks"],
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
      onQueryStarted(taskObj, { dispatch, queryFulfilled }) {
        const addTaskResult = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (tasks) => {
            tasks.push({ ...taskObj, createdAt: new Date().toISOString(), pending: true });
          })
        );
        queryFulfilled.catch(() => addTaskResult.undo());
      },
      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query(taskObj) {
        const { _id, ...patch } = taskObj;
        return {
          url: `tasks/${_id}`,
          credentials: "include",
          method: "PUT",
          body: patch,
        };
      },
      onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (tasks) => {
            const taskIdx = tasks.findIndex((t) => t._id === _id);
            tasks[taskIdx] = { _id, ...patch };
          })
        );
        queryFulfilled.catch(() => patchResult.undo());
        // queryFulfilled.catch(dispatch(apiSlice.util.invalidatesTags["Tasks"]));
      },
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
      onQueryStarted(_id, { dispatch, queryFulfilled }) {
        const deleteResult = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (tasks) => {
            const taskIdx = tasks.findIndex((t) => t._id === _id);
            tasks.splice(taskIdx, 1);
          })
        );
        queryFulfilled.catch(() => deleteResult.undo());
        // queryFulfilled.catch(() => dispatch(apiSlice.util.invalidatesTags["Tasks"]));
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = extendedApiSlice;
