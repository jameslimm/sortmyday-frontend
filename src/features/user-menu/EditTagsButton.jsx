import { LiaHashtagSolid } from "react-icons/lia";

const EditTagsButton = ({ setUserModalPage }) => {
  return (
    <button className="cursor-pointer p-2" onClick={() => setUserModalPage("EDIT_TAGS")}>
      <LiaHashtagSolid className="w-16 h-16 dark:text-white text-black rounded-full p-2" />
      <span className="text-black dark:text-white">Edit Tags</span>
    </button>
  );
};

export default EditTagsButton;
