import { useEffect, useState } from "react";
import { useLoginUserMutation } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";

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

  const inputClass =
    "shadow-sm rounded-md px-2 py-1 w-44 font-semibold text-m border-solid border-2 outline-none text-slate-500";

  return (
    <>
      <h2 className="text-center text-2xl text-slate-700 mt-6">Log In</h2>
      <form onSubmit={(e) => handleLogin(e)} method="POST" action="/">
        <div className="flex flex-col p-2 m-2">
          <div className="flex gap-2 justify-between items-center my-4">
            <label htmlFor="input-username" className="text-nowrap text-slate-800">
              Username:
            </label>
            <input
              type="text"
              name="input-username"
              id="input-username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              className={inputClass}
              required
            ></input>
          </div>
          <div className="flex gap-2 justify-between items-center my-4">
            <label htmlFor="input-password" className="text-nowrap text-slate-800">
              Password:
            </label>
            <input
              type="password"
              name="input-password"
              id="input-password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              className={inputClass}
            ></input>
          </div>
          {uiError && <p className="text-center text-red-600">{uiError}</p>}
          <button
            type="submit"
            className="bg-slate-500 px-2 py-1 mt-6 text-m font-semibold rounded-md text-slate-50"
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
