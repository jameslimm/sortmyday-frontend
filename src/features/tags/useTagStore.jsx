import { useGetUserQuery, useUpdateUserMutation } from "../user/userSlice";

const useTagStore = () => {
  const { data } = useGetUserQuery();
  const [updateUser] = useUpdateUserMutation();

  // if there are no custom tags currently defined for this user
  // use these as defaults.
  const defaultTags = [
    { id: "inb343", tag: "inbox", color: "blue" },
    { id: "hom235", tag: "home", color: "red" },
    { id: "wor676", tag: "work", color: "green" },
  ];

  const tags = (data && data.user?.prefs?.tags) || defaultTags;

  const setTags = (tags) => {
    updateUser({ prefs: { ...data.user.prefs, tags } });
  };

  return [tags, setTags];
};

export default useTagStore;
