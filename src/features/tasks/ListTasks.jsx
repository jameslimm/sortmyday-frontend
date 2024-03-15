import { useGetTasksQuery } from "../api/apiSlice";
import { useUpdateTaskMutation } from "../api/apiSlice";
import { useDeleteTaskMutation } from "../api/apiSlice";

import AddTask from "./AddTask";
import Filters from "./Filters";
import TaskView from "./TaskView";

const ListTasks = () => {
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const { data: tasks } = useGetTasksQuery();

  const filteredTasks =
    tasks && tasks.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <AddTask />

      {filteredTasks && filteredTasks.length > 0 && <Filters />}
      {filteredTasks && filteredTasks.length === 0 && <h3>No Tasks</h3>}

      {filteredTasks &&
        filteredTasks.map((task) => (
          <TaskView
            key={task._id}
            task={task}
            handleUpdateTask={updateTask}
            handleDeleteTask={deleteTask}
          />
        ))}
    </>
  );
};

export default ListTasks;
