export const userValidate = (username, password, passwordConfirm) => {
  if (!username) {
    return { error: "Missing username", errorFields: ["username"] };
  }

  if (!password) {
    return {
      error: "Missing password",
      errorFields: ["password", "passwordConfirm"],
    };
  }

  if (username.length > 14 || username.length < 4) {
    return {
      error: "Username must be between 4 and 14 characters.",
      errorFields: ["username"],
    };
  }

  if (password.length > 14 || password.length < 4) {
    return {
      error: "Password must be between 4 and 14 characters.",
      errorFields: ["password", "passwordConfirm"],
    };
  }

  if (!new RegExp("^[a-zA-Z]+$").test(username)) {
    return {
      error: "Username can have only characters from A-Z or a-z (no spaces or special characters)",
      errorFields: ["username"],
    };
  }

  if (password !== passwordConfirm) {
    return {
      error: "Password fields don't match",
      errorFields: ["password", "passwordConfirm"],
    };
  }

  return {
    error: null,
    errorFields: null,
  };
};
