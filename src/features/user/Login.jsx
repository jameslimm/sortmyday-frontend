import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "./userSlice";

import LoginForm from "./LoginForm";

const Login = () => {
  const navigate = useNavigate();

  // Import functions from RTK Query API slice
  const [loginUser, result] = useLoginUserMutation();
  const { isError, isLoading, isSuccess } = result;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isError) {
      const { message, errors } = result?.error?.data || {};
      console.log(message, errors);
      setErrors(errors);
    }
  }, [isError, result]);

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = Object.fromEntries(new FormData(e.currentTarget));

    // Local validation
    const errors = {};
    if (!username) errors.username = "Username required.";
    if (!password) errors.password = "Password required.";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Make server request
    loginUser({ username, password });
  };

  return <LoginForm handleSubmit={handleSubmit} isLoading={isLoading} errors={errors} />;
};

export default Login;
