import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "./userSlice";
import { userValidate } from "./userValidate";

import RegisterForm from "./RegisterForm";

const Register = () => {
  const navigate = useNavigate();

  // Import functions from RTK Query API slice
  const [createUser, result] = useCreateUserMutation();
  const { isError, isLoading, isSuccess } = result;

  // Set state for the general error message...
  const [errors, setErrors] = useState({});

  // API response - error
  useEffect(() => {
    if (isError) {
      const { message, errors } = result?.error?.data || {};
      console.log(message, errors);
      setErrors(errors);
    }
  }, [isError, result]);

  // API response - success
  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const { username, password, passwordConfirm } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    // Local data validation
    const errors = userValidate(username, password, passwordConfirm);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Make server request
    createUser({ username, password });
  };

  return <RegisterForm handleSubmit={handleSubmit} isLoading={isLoading} errors={errors} />;
};

export default Register;
