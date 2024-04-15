import { useGetUserQuery, useUpdateUserMutation } from "../user/userSlice";

const useTagStore = () => {
  // Simple wrapper around getUserQuery to expose an array
  // of tags from the user records, and abstract saving tags back to the
  // user record.

  const { data } = useGetUserQuery();
  const [updateUser] = useUpdateUserMutation();

  // If this is a new user, with no tags saved in account, create
  // a set of defaults.

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
