import { useState } from "react";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
import Filters from "./Filters";

const TasksHome = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <AddTask />
      <Filters filter={filter} setFilter={setFilter} />
      <TasksList filter={filter} />
    </>
  );
};

export default TasksHome;
