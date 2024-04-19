import { useEffect, useRef, useState } from "react";
import { taskValidate } from "./taskValidate";
import AddTaskForm from "./AddTaskForm";
import { useAddTaskMutation } from "./tasksSlice";

const AddTask = () => {
  // Local state

  // TODO - Replace with React Aria components
  const [taskInput, setTaskInput] = useState("");
  const [tagSelect, setTagSelect] = useState("");
  const [dueDate, setDueDate] = useState("");
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

    // Validate the todo task
    const { error, task: title } = taskValidate(taskInput);
    if (error) return setUiError(error);

    // Submit task to the API slice
    addTask({ title, tag: tagSelect, due: dueDate });
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
    dueDate,
    setDueDate,
  };
  return <AddTaskForm {...addTaskProps} />;
};

export default AddTask;
