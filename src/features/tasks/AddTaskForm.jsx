import { IoIosArrowDown } from "react-icons/io";

import { useEffect, useState } from "react";
import TagPickerSelect from "../tags/TagPickerSelect";
import DueDateInput from "./DueDateInput";

const AddTaskForm = ({
  handleAddTodoSubmit,
  handleInputChange,
  taskInput,
  tagSelect,
  setTagSelect,
  taskInputRef,
  uiError,
  setUiError,
  dueDate,
  setDueDate,
}) => {
  const [formOpen, setFormOpen] = useState(true);

  // When the add task form is toggled open,
  // shift the focus to the task input box.
  useEffect(() => {
    if (formOpen) {
      taskInputRef?.current.focus();
    }
  }, [formOpen, taskInputRef]);

  return (
    <div className="mx-3 mb-8 rounded-lg shadow-lg border-solid border-2 border-slate-300 bg-slate-100 dark:bg-slate-800 dark:text-slate-200">
      {/* ADD NEW TASK FORM TOGGLE BUTTON */}
      <button
        className="flex justify-between w-full items-center text-slate-500 dark:text-slate-200 p-3  shadow-sm"
        onClick={() => setFormOpen(!formOpen)}
      >
        <span className="font-semibold text-m leading-3">Add New Task</span>
        <IoIosArrowDown className={`transition-all ${formOpen && "rotate-180"} w-5 h-5`} />
      </button>

      {/* START FORM */}
      <form
        onSubmit={handleAddTodoSubmit}
        className={`flex flex-col items-start justify-between transition-all overflow-hidden ${
          formOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {/* TOP ROW - INPUT BOX AND ADD BUTTON */}

        <div className="flex flex-1 gap-4 w-full px-3 pb-2 mt-2">
          <div className="relative w-full">
            <input
              className={`w-full shadow-sm rounded-md px-1 py-1 font-semibold text-m outline-none focus:ring-2 ring-orange-400 ring-offset-2 border-solid border-2 ${
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
              disabled={!formOpen}
            />
            <p className="absolute -bottom-1/2 text-red-600 text-sm px-2">{uiError}</p>
          </div>
          <button
            type="submit"
            disabled={!formOpen}
            className="bg-slate-500 dark:bg-slate-600 text-nowrap px-2 py-1 text-m font-semibold rounded-md text-slate-50"
          >
            Add
          </button>
        </div>

        {/* LOWER ROW - TAG AND DUE DATE */}
        <div className="px-3 py-2 mb-2">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">Tag</span>
              <TagPickerSelect
                tagSelect={tagSelect}
                setTagSelect={setTagSelect}
                isDisabled={!formOpen}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-nowrap">Due Date</span>
              <DueDateInput dueDate={dueDate} setDueDate={setDueDate} isDisabled={!formOpen} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
