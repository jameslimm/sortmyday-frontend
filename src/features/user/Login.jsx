import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "./userSlice";
import LoginForm from "./LoginForm";

const Login = () => {
  const [loginUser, result] = useLoginUserMutation();
  const { isError, isLoading, isSuccess } = result;
  const [uiError, setUiError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUiError(isError && result.error.data.message);
  }, [isError]);

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setUiError("Missing username or password");
      return;
    }

    loginUser({ username, password });
  };

  const loginFormProps = {
    handleLogin,
    isLoading,
    username,
    handleUsernameChange,
    password,
    handlePasswordChange,
    uiError,
  };

  return <LoginForm {...loginFormProps} />;
};

export default Login;
