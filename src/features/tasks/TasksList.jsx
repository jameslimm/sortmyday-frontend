import { useEffect, useState } from "react";
import { useGetTasksQuery } from "../api/apiSlice";

import AddTask from "./AddTask";
import Filters from "./Filters";
import Task from "./Task";

const TasksList = () => {
  const { data: tasks } = useGetTasksQuery();
  const [filterBy, setFilterBy] = useState("");

  // If there are no tasks with the selected filter tag
  // reset to the initial state.
  useEffect(() => {
    if (tasks && !tasks.some((task) => task.tag === filterBy)) setFilterBy("");
  }, [tasks]);

  const sortedTasks =
    tasks && tasks.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const filteredTasks = sortedTasks?.filter((task) => (filterBy ? task.tag === filterBy : true));

  console.log(filteredTasks);

  return (
    <>
      <AddTask tag={filterBy} />

      <div className="flex flex-wrap items-center justify-start gap-2 m-4">
        <Filters showAll={true} filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>
      {filteredTasks && filteredTasks.length === 0 && <h3>No Tasks</h3>}

      {filteredTasks && filteredTasks.map((task) => <Task key={task._id} task={task} />)}
    </>
  );
};

export default TasksList;
