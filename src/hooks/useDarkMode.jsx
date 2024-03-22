import { useEffect } from "react";
import { useGetUserQuery, useUpdateUserMutation } from "../features/api/apiSlice";

const useDarkMode = () => {
  const { data } = useGetUserQuery();
  const [updateUser] = useUpdateUserMutation();

  const dark = (data && data.user?.prefs?.darkMode) || false;

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const toggleDark = () => {
    updateUser({ prefs: { ...data.user.prefs, darkMode: !dark } });
  };

  return [dark, toggleDark];
};

export default useDarkMode;
