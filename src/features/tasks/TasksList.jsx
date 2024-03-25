import { useState } from "react";

import AddTask from "./AddTask";
import Filters from "./Filters";
import Task from "./Task";
import NoTasks from "./NoTasks";
import useTagStore from "../tags/useTagStore";
import { useGetTasksQuery } from "./tasksSlice";

const TasksList = () => {
  const { data: tasks } = useGetTasksQuery();
  const [filter, setFilter] = useState("");
  const [tags] = useTagStore();

  // check that there is a valid tag for each task.  If tag
  // does not exist (has been deleted), set tag to empty string before
  // proceeding.
  const tasksClean =
    tasks &&
    tasks.map((task) => {
      if (tags && !tags.find((tag) => tag.id === task.tag)) {
        return { ...task, tag: "" };
      }
      return task;
    });

  const sortedTasks =
    tasksClean && tasksClean.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const filteredTasks = sortedTasks?.filter((task) => (filter !== "" ? task.tag === filter : true));
  return (
    <>
      <AddTask />

      <div className="flex flex-wrap items-center justify-start gap-2 m-4">
        <Filters showAll={true} filter={filter} setFilter={setFilter} />
      </div>
      {filteredTasks && filteredTasks.length === 0 && <NoTasks />}

      {filteredTasks && filteredTasks.map((task) => <Task key={task._id} task={task} />)}
    </>
  );
};

export default TasksList;
