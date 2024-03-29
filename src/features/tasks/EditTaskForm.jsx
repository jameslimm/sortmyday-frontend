import Filters from "./Filters";

const EditTaskForm = ({
  handleSaveChanges,
  editedTask,
  handleTaskChange,
  taskInputRef,
  handleSetFilter,
  uiError,
  handleCancel,
}) => {
  return (
    <form
      onSubmit={handleSaveChanges}
      className={`relative flex justify-around items-start p-2 mx-3 my-4 rounded shadow-md gap-4`}
    >
      <div className="flex-1 flex flex-col gap-1 justify-between">
        <input
          type="text"
          className={`flex-1 shadow-sm rounded-md px-2 py-1 font-semibold text-m border-solid border-2 outline-none ${
            uiError
              ? "border-red-600 text-red-600 placeholder-red-600"
              : "border-slate-200 placeholder-slate-500"
          } text-slate-500`}
          value={editedTask.title}
          onChange={handleTaskChange}
          ref={taskInputRef}
        />

        <div className="flex items-center justify-start gap-2 flex-wrap">
          <Filters filter={editedTask.tag} setFilter={handleSetFilter} />
        </div>
      </div>
      <button
        className="bg-green-500 px-2 py-1 text-m font-semibold rounded-md text-slate-50"
        onClick={handleSaveChanges}
      >
        Save
      </button>
      <button
        className="bg-red-500 px-2 py-1 text-m font-semibold rounded-md text-slate-50"
        onClick={handleCancel}
      >
        Cancel
      </button>
      <p className="absolute -bottom-1/2 text-red-600 text-sm px-2">{uiError}</p>
    </form>
  );
};

export default EditTaskForm;
