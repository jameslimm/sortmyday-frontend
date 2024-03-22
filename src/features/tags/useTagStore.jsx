import { useGetUserQuery, useUpdateUserMutation } from "../api/apiSlice";

const useTagStore = () => {
  const { data } = useGetUserQuery();
  const [updateUser] = useUpdateUserMutation();

  const defaultTags = [{ id: "inb343", tag: "inbox", color: "blue" }];
  const tags = (data && data.user?.prefs?.tags) || defaultTags;

  const setTags = (tags) => {
    updateUser({ prefs: { ...data.user.prefs, tags } });
  };

  return [tags, setTags];
};

export default useTagStore;
