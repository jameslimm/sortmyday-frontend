import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Setup global apiSlice for RTK Query

// const API_BASEURL = "https://api.sortmyday.co.uk/";
const API_BASEURL = "http://localhost:3500/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASEURL }),
  tagTypes: ["Tasks", "User"],
  endpoints: (builder) => ({}),
});
