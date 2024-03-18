import { useEffect, useRef, useState } from "react";
import { useAddTaskMutation } from "../api/apiSlice";
import { taskValidate } from "./taskUtils";

const AddTask = ({ tag: chosenTag }) => {
  const [taskInput, setTaskInput] = useState("");
  const [uiError, setUiError] = useState("");
  const [addTask, result] = useAddTaskMutation();
  const { isError } = result;
  const taskInputRef = useRef(null);

  useEffect(() => {
    taskInputRef.current && taskInputRef.current.focus();
  }, []);

  useEffect(() => {
    setUiError(isError && result.error.data.message);
  }, [isError]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
    setUiError("");
  };

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    taskInputRef.current && taskInputRef.current.focus();

    const { error, task, tag } = taskValidate(taskInput);

    if (error) return setUiError(error);

    // Tag will be either 1) the # typed into the input box, 2) the selected
    // tag in the filter list, or 3) "inbox"
    console.log({ title: task, tag: tag || chosenTag || "inbox" });
    addTask({ title: task, tag: tag || chosenTag || "inbox" });
    setTaskInput("");
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
        value={taskInput}
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
