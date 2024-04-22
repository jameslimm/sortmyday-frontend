import { MdCancel } from "react-icons/md";

import TagPickerSelect from "../tags/TagPickerSelect";
import DueDateInput from "./DueDateInput";

const EditTaskForm = ({
  handleSaveChanges,
  editedTask,
  handleTaskChange,
  taskInputRef,
  handleSetFilter,
  handleSetDueDate,
  uiError,
  handleCancel,
}) => {
  return (
    <form
      onSubmit={handleSaveChanges}
      className={`flex flex-col mx-3 my-4 py-2 rounded shadow-md items-start justify-between bg-slate-100 border-solid border-2 border-slate-300`}
    >
      {/* TOP ROW - INPUT BOX, SAVE AND CANCEL BUTTONS*/}
      <div className="flex-1 flex gap-4    w-full px-2 pb-2">
        <div className="relative w-full">
          <input
            type="text"
            className={`w-full shadow-sm rounded-md px-1 py-1 font-semibold text-m border-solid border-2 outline-none ${
              uiError
                ? "border-red-600 text-red-600 placeholder-red-600"
                : "border-slate-200 placeholder-slate-500"
            } text-slate-500`}
            value={editedTask.title}
            onChange={handleTaskChange}
            ref={taskInputRef}
          />
          <p className="absolute -bottom-1/2 text-red-600 text-sm px-2">{uiError}</p>
        </div>

        <button
          className="bg-slate-500 px-2 py-1 text-m font-semibold rounded-md text-slate-50"
          onClick={handleSaveChanges}
        >
          Save
        </button>
        <button className=" text-slate-500" onClick={handleCancel}>
          <MdCancel className="h-8 w-8" />
        </button>
      </div>

      {/* LOWER ROW - TAG AND DUE DATE */}
      <div className="px-3 py-2">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Tag</span>
            <TagPickerSelect tagSelect={editedTask.tag} setTagSelect={handleSetFilter} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-nowrap">Due Date</span>
            <DueDateInput dueDate={editedTask.due} setDueDate={handleSetDueDate} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditTaskForm;
