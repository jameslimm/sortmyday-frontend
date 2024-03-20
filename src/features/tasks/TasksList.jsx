import { useEffect, useState } from "react";
import { useGetTasksQuery } from "../api/apiSlice";

import AddTask from "./AddTask";
import Filters from "./Filters";
import Task from "./Task";
import NoTasks from "./NoTasks";

const TasksList = () => {
  const { data: tasks } = useGetTasksQuery();
  const [filter, setFilter] = useState("");

  // If there are no tasks with the selected filter tag
  // reset to the initial state.
  // useEffect(() => {
  //   if (!tasks) return;
  //   // If the currently selected filter tag no longer have any tasks assigned
  //   // set the filter back to default state
  //   if (!tasks.some((task) => task.tag === filter)) setFilter("");

  //   // If there's only one filter tag being used in all tasks, set the filter
  //   // to this tag.
  //   const allUniqueTags = [...new Set(tasks.map((task) => task.tag).flat())];
  //   if (allUniqueTags.length === 1) setFilter(allUniqueTags[0]);
  // }, [tasks]);

  const sortedTasks =
    tasks && tasks.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const filteredTasks = sortedTasks?.filter((task) => (filter ? task.tag === filter : true));

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
