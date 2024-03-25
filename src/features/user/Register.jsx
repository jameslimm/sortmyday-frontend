import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "./userSlice";
import RegisterForm from "./RegisterForm";
import { userValidate } from "./userValidate";

const Register = () => {
  // Input form state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  // Import functions from RTK Query API slice
  const [createUser, result] = useCreateUserMutation();
  const { isError, isLoading, isSuccess } = result;

  // Set state for the general error message...
  const [error, setError] = useState("");
  // And an array of fields/input ids to highlight in the event of an error
  const [errorFields, setErrorFields] = useState([]);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmChange = (e) => setPasswordConfirm(e.target.value);

  const handleFieldHasFocus = () => {
    setError("");
    setErrorFields([]);
  };

  useEffect(() => {
    if (isError) {
      const { message, errorFields } = result?.error?.data || {};

      setError(message || isError);
      setErrorFields([...errorFields] || []);
    }
  }, [isError, result]);

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setErrorFields([]);

    const { error, errorFields } = userValidate(username, password, passwordConfirm);
    if (error || errorFields) {
      setError(error);
      setErrorFields(errorFields);
      return;
    }

    createUser({ username, password });
  };

  const registerFormProps = {
    handleRegister,
    isLoading,
    username,
    handleFieldHasFocus,
    handleUsernameChange,
    errorFields,
    password,
    handlePasswordChange,
    passwordConfirm,
    handlePasswordConfirmChange,
    error,
  };

  return <RegisterForm {...registerFormProps} />;
};

export default Register;
