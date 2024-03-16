import { RiDeleteBinLine } from "react-icons/ri";
import { RiEditLine } from "react-icons/ri";

import Filters from "./Filters";
import { useDeleteTaskMutation, useGetTasksQuery, useUpdateTaskMutation } from "../api/apiSlice";

const TaskEdit = ({ task }) => {
  const { data: tasks } = useGetTasksQuery();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const handleCheckToggle = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div
      className={`flex items-center ${
        task.completed ? "bg-slate-50" : "bg-slate-200"
      } p-2 mx-3 my-4 rounded shadow-md gap-4`}
    >
      <div className="flex-1 flex flex-col gap-1 justify-between">
        <input type="text" value={task.title} />

        <div className="flex items-center justify-start gap-2">
          <Filters tasks={tasks} />
        </div>
      </div>
      <button>Save Changes</button>
      <button>Cancel</button>
    </div>
  );
};

export default TaskEdit;
