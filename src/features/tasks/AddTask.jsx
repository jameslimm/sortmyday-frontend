import { useEffect, useRef, useState } from "react";
import { taskValidate } from "./taskValidate";
import AddTaskForm from "./AddTaskForm";
import { useAddTaskMutation } from "./tasksSlice";

const AddTask = () => {
  // Local state
  const [taskInput, setTaskInput] = useState("");
  const [tagSelect, setTagSelect] = useState("");
  const [uiError, setUiError] = useState("");

  // API State
  const [addTask, result] = useAddTaskMutation();
  const { isError } = result;

  // DOM ref for the task input (for focus)
  const taskInputRef = useRef(null);

  useEffect(() => {
    // focus into the task input on component load
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

    addTask({ title, tag: tagSelect });
    setTaskInput("");
  };

  const addTaskProps = {
    handleAddTodoSubmit,
    handleInputChange,
    taskInput,
    tagSelect,
    setTagSelect,
    taskInputRef,
    uiError,
    setUiError,
  };
  return <AddTaskForm {...addTaskProps} />;
};

export default AddTask;
