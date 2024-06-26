import Login from "./features/user/Login";
import Register from "./features/user/Register";
import TasksHome from "./features/tasks/TasksHome";
import Layout from "./features/common/Layout";
import Logout from "./features/user/Logout";
import LoadingSpinner from "./features/common/loadingSpinner/LoadingSpinner";
import HomeScreen from "./features/homeScreen/HomeScreen";

import "./app.css";

import useDarkMode from "./hooks/useDarkMode";

import { Route, Routes } from "react-router-dom";
import { useGetUserQuery } from "./features/user/userSlice";

function App() {
  const { data: user, isLoading } = useGetUserQuery();

  useDarkMode();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={isLoading ? <LoadingSpinner /> : user ? <TasksHome /> : <HomeScreen />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/tasks" element={<TasksHome />} />
      </Route>
    </Routes>
  );
}

export default App;
