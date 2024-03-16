import { Route, Routes } from "react-router-dom";
import Login from "./features/user/Login";
import Register from "./features/user/Register";
import TasksList from "./features/tasks/TasksList";

import "./app.css";
import Layout from "./features/common/Layout";
import { useGetUserQuery } from "./features/api/apiSlice";
import Logout from "./features/user/Logout";

function App() {
  const { data: user } = useGetUserQuery();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={user ? <TasksList /> : <Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/tasks" element={<TasksList />} />
      </Route>
    </Routes>
  );
}

export default App;
