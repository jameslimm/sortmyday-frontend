import { useDeleteTaskMutation, useUpdateTaskMutation } from "../api/apiSlice";
import { Transition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";
import TaskViewRender from "./TaskViewRender";

const TaskView = ({ task, setIsEditing, taskPos }) => {
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setTimeout(() => setInView(true), 10 * taskPos);
  }, [taskPos, task]);

  const nodeRef = useRef(null);

  const handleCheckToggle = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleDeleteClick = () => {
    setInView(false);
    setTimeout(() => deleteTask(task._id), 150);
  };

  return (
    <Transition nodeRef={nodeRef} in={inView} timeout={150}>
      {(state) => (
        <TaskViewRender
          state={state}
          nodeRef={nodeRef}
          task={task}
          handleCheckToggle={handleCheckToggle}
          handleDeleteClick={handleDeleteClick}
          setIsEditing={setIsEditing}
        />
      )}
    </Transition>
  );
};

export default TaskView;
