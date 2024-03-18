import TaskView from "./TaskView";
import TaskEdit from "./TaskEdit";
import { useState } from "react";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <TaskEdit setIsEditing={setIsEditing} task={task} />
  ) : (
    <TaskView setIsEditing={setIsEditing} task={task} />
  );
};

export default Task;
