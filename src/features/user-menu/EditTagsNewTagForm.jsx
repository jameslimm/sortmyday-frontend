import { IoIosAddCircle } from "react-icons/io";
const EditTagNewTagForm = ({
  newTagRef,
  newTagInput,
  handleNewTagKeyDown,
  handleNewTagInputChange,
  handleNewTagClick,
  uiError,
}) => {
  return (
    <div className="relative my-6 mx-2">
      <input
        type="text"
        ref={newTagRef}
        value={newTagInput}
        placeholder="Add new tag"
        onKeyDown={handleNewTagKeyDown}
        onChange={handleNewTagInputChange}
        className={`shadow-sm w-full rounded-md px-2 py-2 font-semibold text-m border-solid border-2 ${
          uiError
            ? "border-red-600 text-red-600 placeholder-red-600"
            : "border-slate-200 placeholder-slate-500"
        } text-slate-500`}
      />
      <IoIosAddCircle
        onClick={handleNewTagClick}
        onKeyDown={handleNewTagKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Add New Tag"
        className="absolute text-slate-700 top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-lg"
      />
      <p className="absolute -bottom-2/3 text-red-600 dark:bg-white font-semibold rounded-lg text-sm px-2">
        {uiError}
      </p>
    </div>
  );
};

export default EditTagNewTagForm;
