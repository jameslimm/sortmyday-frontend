import { useEffect, useRef, useState } from "react";
import { useAddTaskMutation } from "../api/apiSlice";

const AddTask = ({ tag }) => {
  const [task, setTask] = useState("");
  const [uiError, setUiError] = useState("");
  const [addTask, result] = useAddTaskMutation();
  const { isError, isLoading, isSuccess } = result;
  const taskInputRef = useRef(null);

  useEffect(() => {
    taskInputRef.current && taskInputRef.current.focus();
  }, []);

  useEffect(() => {
    setUiError(isError && result.error.data.message);
  }, [isError]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
    setUiError("");
  };

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      setUiError("Missing task");
      taskInputRef.current && taskInputRef.current.focus();
      return;
    }

    // does task include a tag?  Look for a hash and use any strings
    // after it.
    const taskArray = task.split("#");

    if (taskArray.length > 2) {
      // more that one tags added, throw error
      setUiError("Too many tags set - only one allowed.");
      taskInputRef.current && taskInputRef.current.focus();
      return;
    }

    let saveTask = taskArray[0].trim();
    let saveTag = taskArray[1]?.trim().toLowerCase() || tag || "inbox";

    addTask({ title: saveTask, tag: saveTag });
    setTask("");
    taskInputRef.current && taskInputRef.current.focus();
  };

  return (
    <form
      onSubmit={handleAddTodoSubmit}
      className="mx-3 mt-2 mb-7 flex items-center justify-between gap-4 rounded-md relative"
    >
      <input
        className={`flex-1 shadow-sm rounded-md px-2 py-1 font-semibold text-m border-solid border-2 outline-none ${
          uiError
            ? "border-red-600 text-red-600 placeholder-red-600"
            : "border-slate-200 placeholder-slate-500"
        } text-slate-500`}
        type="text"
        value={task}
        placeholder="Todo item with optional #tag"
        onChange={handleInputChange}
        onBlur={() => setUiError("")}
        ref={taskInputRef}
      />
      <button
        type="submit"
        className="bg-slate-500 px-2 py-1 text-m font-semibold rounded-md text-slate-50"
      >
        Add Todo
      </button>
      <p className="absolute -bottom-1/2 text-red-600 text-sm px-2">{uiError}</p>
    </form>
  );
};

export default AddTask;
