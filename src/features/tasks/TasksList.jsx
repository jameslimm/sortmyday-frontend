import { useState } from "react";
import { useGetTasksQuery } from "../api/apiSlice";

import AddTask from "./AddTask";
import Filters from "./Filters";
import Task from "./Task";

const TasksList = () => {
  const { data: tasks } = useGetTasksQuery();

  const [filterBy, setFilterBy] = useState("");

  const sortedTasks =
    tasks && tasks.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const filteredTasks = sortedTasks?.filter((task) =>
    filterBy ? task.tag.includes(filterBy) : true
  );

  return (
    <>
      <AddTask tag={filterBy} />

      {filteredTasks && filteredTasks.length > 0 && (
        <div className="flex flex-wrap align-middle justify-evenly gap-2 m-4">
          <Filters tasks={tasks} filterBy={filterBy} setFilterBy={setFilterBy} />
        </div>
      )}
      {filteredTasks && filteredTasks.length === 0 && <h3>No Tasks</h3>}

      {filteredTasks && filteredTasks.map((task) => <Task key={task._id} task={task} />)}
    </>
  );
};

export default TasksList;
