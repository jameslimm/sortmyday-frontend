import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "./userSlice";

const Logout = () => {
  const [logoutUser, result] = useLogoutUserMutation();
  const { isSuccess } = result;
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser && logoutUser();
  }, [logoutUser]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      navigate(0);
    }
  }, [isSuccess, navigate]);

  return <h1>Logging Out...</h1>;
};

export default Logout;
