import { useEffect, useRef, useState } from "react";
import { taskValidate } from "./taskValidate";
import EditTaskForm from "./EditTaskForm";
import { useUpdateTaskMutation } from "./tasksSlice";

const EditTask = ({ task, setIsEditing }) => {
  const taskInputRef = useRef(null);

  const [updateTask, result] = useUpdateTaskMutation();
  const { isError } = result;

  // Initialise editedTask state with the task prop.
  const [editedTask, setEditedTask] = useState(task);
  const [uiError, setUiError] = useState("");

  useEffect(() => {
    taskInputRef?.current.focus();
  }, []);

  useEffect(() => {
    if (isError) {
      const { message } = result?.error?.data || {};
      setUiError(message || isError);
    }
  }, [isError, result]);

  const handleTaskChange = (e) => {
    setEditedTask({ ...editedTask, title: e.target.value });
  };

  const handleSetDueDate = (due) => {
    setEditedTask({ ...editedTask, due });
  };

  const handleSetFilter = (tag) => {
    setEditedTask({ ...editedTask, tag });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    taskInputRef?.current.focus();

    // Validate the task input
    const { error, task } = taskValidate(editedTask.title);
    if (error) return setUiError(error);

    updateTask({ ...editedTask, title: task });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const editTaskFormProps = {
    handleSaveChanges,
    editedTask,
    handleTaskChange,
    taskInputRef,
    handleSetFilter,
    handleSetDueDate,
    uiError,
    handleCancel,
  };

  return <EditTaskForm {...editTaskFormProps} />;
};

export default EditTask;
