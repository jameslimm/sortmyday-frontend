import { useEffect, useRef, useState } from "react";
import { useAddTaskMutation } from "../api/apiSlice";
import { taskValidate } from "./taskValidate";
import TagPicker from "../tags/TagPicker";

const AddTask = () => {
  // Local state
  const [taskInput, setTaskInput] = useState("");
  const [tagSelect, setTagSelect] = useState("");
  const [uiError, setUiError] = useState("");

  // API State
  const [addTask, result] = useAddTaskMutation();
  const { isError } = result;

  const taskInputRef = useRef(null);

  useEffect(() => {
    taskInputRef.current && taskInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (isError) {
      const { message } = result?.error?.data || {};
      setUiError(message || isError);
    }
  }, [isError, result]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
    setUiError("");
  };

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    taskInputRef.current && taskInputRef.current.focus();

    const { error, task: title } = taskValidate(taskInput);

    if (error) return setUiError(error);

    console.log("ADD", { title, tagSelect });
    addTask({ title, tag: tagSelect });
    setTaskInput("");
  };

  return (
    <form
      onSubmit={handleAddTodoSubmit}
      className="mx-3 mt-2 mb-7 flex items-center justify-between gap-1 relative"
    >
      <input
        className={`flex-auto shadow-sm rounded-md px-1 py-1 font-semibold text-m border-solid border-2 ${
          uiError
            ? "border-red-600 text-red-600 placeholder-red-600"
            : "border-slate-200 placeholder-slate-500"
        } text-slate-500`}
        type="text"
        value={taskInput}
        placeholder="Todo item"
        onChange={handleInputChange}
        onBlur={() => setUiError("")}
        ref={taskInputRef}
      />
      <TagPicker tagSelect={tagSelect} setTagSelect={setTagSelect} />

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

export default AddTask;
