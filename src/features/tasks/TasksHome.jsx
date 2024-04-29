import { useState } from "react";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
import Filters from "./Filters";
import TaskListSwitch from "./TasksListSwitch";

const TasksHome = () => {
  const [filter, setFilter] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <>
      <AddTask />

      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center my-4 mx-4">
        <Filters filter={filter} setFilter={setFilter} />
        <TaskListSwitch showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
      </div>
      <TasksList filter={filter} showCompleted={showCompleted} />
    </>
  );
};

export default TasksHome;
