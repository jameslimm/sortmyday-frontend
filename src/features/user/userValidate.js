export const userValidate = (username = "", password = "", passwordConfirm = "") => {
  const errors = {};

  if (!username) errors.username = "Username is required.";
  if (!password) errors.password = "Password is required";

  if (username.length > 14 || username.length < 4)
    errors.username = "Username must be between 4 and 14 characters.";
  if (password.length > 14 || password.length < 4)
    errors.password = "Password must be between 4 and 14 characters.";
  if (passwordConfirm.length > 14 || passwordConfirm.length < 4)
    errors.passwordConfirm = "Password must be between 4 and 14 characters.";

  if (!new RegExp("^[a-zA-Z]+$").test(username))
    errors.username =
      "Username can have only characters from A-Z or a-z (no spaces or special characters)";

  // if both password fields are correct so far, check that they match.
  if (!("password" in errors) && !("passwordConfirm" in errors) && password !== passwordConfirm) {
    errors.passwordConfirm = "Password fields don't match";
    errors.password = "Password fields don't match";
  }

  return { ...errors };
};
