const RegisterForm = ({
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
}) => {
  const inputClass =
    "shadow-sm rounded-md px-2 py-1 w-1/2 font-semibold text-m border-solid border-2 text-slate-500";

  const inputClassColorOk = "border-slate-200 placeholder-slate-500";
  const inputClassColorError = "border-red-600 text-red-600 placeholder-red-600";

  return (
    <>
      <h2 className="text-center text-2xl text-slate-700">Register Account</h2>
      <form onSubmit={(e) => handleRegister(e)} method="POST" action="/">
        <div className={`flex flex-col p-2 m-2 ${isLoading && "animate-pulse"}`}>
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
              onFocus={handleFieldHasFocus}
              onChange={handleUsernameChange}
              className={`${inputClass} ${
                errorFields.includes("username") ? inputClassColorError : inputClassColorOk
              }`}
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
              onFocus={handleFieldHasFocus}
              onChange={handlePasswordChange}
              className={`${inputClass} ${
                errorFields.includes("password") ? inputClassColorError : inputClassColorOk
              }`}
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
              onFocus={handleFieldHasFocus}
              onChange={handlePasswordConfirmChange}
              className={`${inputClass} ${
                errorFields.includes("passwordConfirm") ? inputClassColorError : inputClassColorOk
              }`}
            ></input>
          </div>
          {error && <p className="text-center text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-slate-500 px-2 py-1 mt-6 text-m font-semibold rounded-md text-slate-50"
          >
            Register Account
          </button>
        </div>
      </form>
      <div className="p-4 bg-red-200 mt-8">
        Important Note - this site is for demonstration purposes only, and is subject to change and
        removal at any time.
      </div>
    </>
  );
};

export default RegisterForm;
