import { useEffect, useState } from "react";
import { useCreateUserMutation } from "../api/apiSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [createUser, result] = useCreateUserMutation();
  const { isError } = result;

  const [uiError, setUiError] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmChange = (e) => setPasswordConfirm(e.target.value);

  console.log(result);

  useEffect(() => {
    if (isError) {
      setUiError(result?.data?.error?.message || isError);
    }
  }, [isError]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setUiError("");
    console.log(username, password, passwordConfirm);
    if (!username || !password) {
      console.log("HERE");
      setUiError("Missing username or password");
      return;
    }

    if (password !== passwordConfirm) {
      setUiError("Password fields don't match");
      return;
    }

    createUser({ username, password });
  };

  const inputClass =
    "shadow-sm rounded-md px-2 py-1 w-44 font-semibold text-m border-solid border-2 outline-none text-slate-500";
  return (
    <>
      <h2 className="text-center text-2xl text-slate-700 mt-6">Register Account</h2>
      <form onSubmit={(e) => handleRegister(e)} method="POST" action="/">
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
              required
              onChange={handleUsernameChange}
              className={inputClass}
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
              required
              onChange={handlePasswordChange}
              className={inputClass}
            ></input>
          </div>
          <div className="flex gap-2 justify-between items-center my-4">
            <label htmlFor="input-password-confirm" className="text-nowrap text-slate-800">
              Confirm Password:
            </label>
            <input
              type="password"
              name="input-password-confirm"
              id="input-password-confirm"
              placeholder="Confirm Password"
              required
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              className={inputClass}
            ></input>
          </div>
          {uiError && <p className="text-center text-red-600">{uiError}</p>}
          <button
            type="submit"
            className="bg-slate-500 px-2 py-1 mt-6 text-m font-semibold rounded-md text-slate-50"
          >
            Register Account
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
