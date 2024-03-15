import { Route, Routes } from "react-router-dom";
import Login from "./features/users/Login";
import Register from "./features/users/Register";
import ListTasks from "./features/tasks/ListTasks";

import "./app.css";
import Layout from "./features/common/Layout";
import { useGetUserQuery } from "./features/api/apiSlice";
import Logout from "./features/users/Logout";

function App() {
  const { data: user } = useGetUserQuery();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={user ? <ListTasks /> : <Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/tasks" element={<ListTasks />} />
      </Route>
    </Routes>
  );
}

export default App;
