import { Link } from "react-router-dom";

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
    "shadow-sm rounded-md px-2 py-1 w-full font-semibold text-m border-solid border-2 ";

  const inputClassColorOk =
    "border-slate-200 placeholder-slate-500 text-slate-500 placeholder-slate-500";
  const inputClassColorError = "border-red-600 text-red-600 placeholder-red-600";

  return (
    <>
      <div className="px-4">
        <h2 className="text-2xl text-slate-700 font-bold">CREATE YOUR ACCOUNT</h2>
        <p className="py-2">Join SortMyDay and start getting organised today.</p>
        <p className="py-2 font-medium">Free to join and easy to use.</p>
        <form
          className={`${isLoading && "animate-pulse"}`}
          onSubmit={(e) => handleRegister(e)}
          method="POST"
          action="/"
          role="create account"
        >
          <label htmlFor="input-username" className="block text-slate-600 my-2">
            Your username: <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="input-username"
            id="input-username"
            placeholder="Username"
            value={username}
            required
            minLength={4}
            maxLength={14}
            onFocus={handleFieldHasFocus}
            onChange={handleUsernameChange}
            className={`${inputClass} ${
              errorFields.includes("username") ? inputClassColorError : inputClassColorOk
            }`}
          ></input>

          <label htmlFor="input-password" className="block text-slate-600 my-2 mx-1">
            Password: <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="input-password"
            id="input-password"
            placeholder="Password"
            value={password}
            required
            minLength={4}
            maxLength={14}
            onFocus={handleFieldHasFocus}
            onChange={handlePasswordChange}
            className={`${inputClass} ${
              errorFields.includes("password") ? inputClassColorError : inputClassColorOk
            }`}
          ></input>

          <label htmlFor="input-password-confirm" className="block text-slate-600 my-2 mx-1">
            Re-enter Password: <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="input-password-confirm"
            id="input-password-confirm"
            placeholder="Confirm Password"
            required
            minLength={4}
            maxLength={14}
            value={passwordConfirm}
            onFocus={handleFieldHasFocus}
            onChange={handlePasswordConfirmChange}
            className={`${inputClass} ${
              errorFields.includes("passwordConfirm") ? inputClassColorError : inputClassColorOk
            }`}
          ></input>

          {error && (
            <p role="alert" className="text-red-600 my-2 mx-1">
              {error}
            </p>
          )}
          <div className="flex items-center gap-6 mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-orange-500 px-2 py-1 text-m font-semibold rounded-md text-slate-50"
            >
              Register Account
            </button>
            <Link to="/login" className="underline">
              I already have an account
            </Link>
          </div>
        </form>
        <div className="p-4 bg-red-200 mt-8">
          Important Note - this site is for demonstration purposes only, and is subject to change
          and removal at any time.
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
