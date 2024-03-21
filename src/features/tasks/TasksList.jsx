import { useEffect, useState } from "react";
import { useGetTasksQuery } from "../api/apiSlice";

import AddTask from "./AddTask";
import Filters from "./Filters";
import Task from "./Task";
import NoTasks from "./NoTasks";

const TasksList = () => {
  const { data: tasks } = useGetTasksQuery();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // if the selected filter no longer has any tasks
    // assigned, reset the filter to the default.
    if (tasks && !tasks.some((t) => t.tag === filter)) {
      setFilter("");
    }
  }, [filter, tasks]);

  const sortedTasks =
    tasks && tasks.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const filteredTasks = sortedTasks?.filter((task) => (filter !== "" ? task.tag === filter : true));
  return (
    <>
      <AddTask />

      <div className="flex flex-wrap items-center justify-start gap-2 m-4">
        <Filters showAll={true} filter={filter} setFilter={setFilter} />
      </div>
      {filteredTasks && filteredTasks.length === 0 && <NoTasks />}

      {filteredTasks &&
        filteredTasks.map((task, i) => <Task key={task._id} task={task} taskPos={i} />)}
    </>
  );
};

export default TasksList;
