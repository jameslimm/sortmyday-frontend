import { Transition } from "react-transition-group";
import { useRef, useState } from "react";
import TaskViewRender from "./TaskViewRender";
import { useDeleteTaskMutation, useUpdateTaskMutation } from "./tasksSlice";

const TaskView = ({ task, setIsEditing }) => {
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  // to prevent glitches due to optimistic adding of new
  // tasks, don't animate in the first task on the screen.
  const [inView, setInView] = useState(true);

  const nodeRef = useRef(null);

  const handleCheckToggle = () => {
    setInView(false);
    setTimeout(() => updateTask({ ...task, completed: !task.completed }), 150);
  };

  const handleDeleteClick = () => {
    // fade out the task item and then trigger the deletion
    setInView(false);
    setTimeout(() => deleteTask(task._id), 200);
  };

  return (
    <Transition nodeRef={nodeRef} in={inView} timeout={200}>
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
