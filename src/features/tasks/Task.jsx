import TaskView from "./TaskView";
import TaskEdit from "./TaskEdit";
import { useState } from "react";

const Task = ({ task, taskPos }) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <TaskEdit setIsEditing={setIsEditing} task={task} />
  ) : (
    <TaskView setIsEditing={setIsEditing} task={task} taskPos={taskPos} />
  );
};

export default Task;
