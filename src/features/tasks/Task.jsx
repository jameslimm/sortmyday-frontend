import TaskView from "./TaskView";
import { useState } from "react";
import EditTask from "./EditTask";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <EditTask setIsEditing={setIsEditing} task={task} />
  ) : (
    <TaskView setIsEditing={setIsEditing} task={task} />
  );
};

export default Task;
