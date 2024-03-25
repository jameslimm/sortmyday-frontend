export const userValidate = (username, password, passwordConfirm) => {
  if (!username) {
    return { error: "Missing username", errorFields: ["username"] };
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
