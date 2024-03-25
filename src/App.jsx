import { Route, Routes } from "react-router-dom";
import Login from "./features/user/Login";
import Register from "./features/user/Register";
import TasksList from "./features/tasks/TasksList";

import "./app.css";
import Layout from "./features/common/Layout";
import Logout from "./features/user/Logout";
import SplashScreen from "./features/common/SplashScreen";
import useDarkMode from "./hooks/useDarkMode";
import LoadingSpinner from "./features/common/loadingSpinner/LoadingSpinner";
import { useGetUserQuery } from "./features/user/userSlice";

function App() {
  const { data: user, isLoading } = useGetUserQuery();

  useDarkMode();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={isLoading ? <LoadingSpinner /> : user ? <TasksList /> : <SplashScreen />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/tasks" element={<TasksList />} />
      </Route>
    </Routes>
  );
}

export default App;
