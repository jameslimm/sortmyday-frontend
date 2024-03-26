const LoginForm = ({
  handleLogin,
  isLoading,
  username,
  handleUsernameChange,
  password,
  handlePasswordChange,
  uiError,
  errorFields = [],
}) => {
  const inputClass =
    "shadow-sm rounded-md px-2 py-1 w-full font-semibold text-m border-solid border-2 ";

  const inputClassColorOk =
    "border-slate-200 placeholder-slate-500 text-slate-500 placeholder-slate-500";
  const inputClassColorError = "border-red-600 text-red-600 placeholder-red-600";

  return (
    <div className="px-4">
      <h2 className="text-2xl text-slate-700 font-bold">LOG IN</h2>
      <form
        className={`${isLoading && "animate-pulse"}`}
        onSubmit={(e) => handleLogin(e)}
        method="POST"
        action="/"
      >
        <label htmlFor="input-username" className="block text-slate-600 my-2">
          Username: <span className="text-red-600">*</span>
        </label>

        <input
          type="text"
          name="input-username"
          id="input-username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className={`${inputClass} ${
            errorFields.includes("username") ? inputClassColorError : inputClassColorOk
          }`}
          required
        ></input>

        <label htmlFor="input-password" className="block text-slate-600 my-2">
          Password: <span className="text-red-600">*</span>
        </label>
        <input
          type="password"
          name="input-password"
          id="input-password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
          className={`${inputClass} ${
            errorFields.includes("password") ? inputClassColorError : inputClassColorOk
          }`}
        ></input>

        {uiError && <p className="text-red-600">{uiError}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className={`block mt-4 bg-orange-500 px-2 py-1 text-m font-semibold rounded-md text-slate-50`}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
