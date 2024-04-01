import TagPickerSelect from "../tags/TagPickerSelect";

const AddTaskForm = ({
  handleAddTodoSubmit,
  handleInputChange,
  taskInput,
  tagSelect,
  setTagSelect,
  taskInputRef,
  uiError,
  setUiError,
}) => {
  return (
    <form
      onSubmit={handleAddTodoSubmit}
      className="mx-3 mt-2 mb-7 flex items-center justify-between gap-1 relative"
    >
      <input
        className={`w-full shadow-sm rounded-md px-1 py-1 font-semibold text-m border-solid border-2 ${
          uiError
            ? "border-red-600 text-red-600 placeholder-red-600"
            : "border-slate-200 placeholder-slate-500"
        } text-slate-500`}
        type="text"
        value={taskInput}
        placeholder="Task item"
        onChange={handleInputChange}
        onBlur={() => setUiError("")}
        ref={taskInputRef}
        minLength={3}
        maxLength={50}
      />
      <TagPickerSelect tagSelect={tagSelect} setTagSelect={setTagSelect} />

      <button
        type="submit"
        className="bg-slate-500 text-nowrap px-2 py-1 text-m font-semibold rounded-md text-slate-50"
      >
        Add
      </button>
      <p className="absolute -bottom-1/2 text-red-600 text-sm px-2">{uiError}</p>
    </form>
  );
};

export default AddTaskForm;
