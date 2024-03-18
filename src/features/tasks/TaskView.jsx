import { RiDeleteBinLine } from "react-icons/ri";
import { RiEditLine } from "react-icons/ri";

import Filters from "./Filters";
import { useDeleteTaskMutation, useUpdateTaskMutation } from "../api/apiSlice";

const TaskView = ({ task, setIsEditing }) => {
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const handleCheckToggle = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div
      className={`flex items-center ${
        task.completed ? "bg-slate-50" : "bg-slate-200"
      } p-2 mx-3 my-4 rounded shadow-md gap-4 `}
    >
      <input
        className="w-10 h-10 accent-white shadow-md"
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckToggle}
        id={task._id}
      />
      <div className="flex-1 flex flex-col gap-1 justify-between">
        <label
          className={`font-normal text-2xl text-purple-950 cursor-pointer ${
            task.completed && "line-through"
          }`}
          htmlFor={task._id}
        >
          {task.title}
        </label>
        <div className="flex items-center justify-start gap-2">
          <Filters singleTag={task.tag} />
        </div>
      </div>
      {!task.completed && (
        <RiEditLine onClick={() => setIsEditing(true)} className="w-7 h-7 text-slate-400" />
      )}
      <RiDeleteBinLine
        className="min-w-7 w-7 min-h-7 h-7 text-slate-400"
        onClick={() => deleteTask(task._id)}
      />
    </div>
  );
};

export default TaskView;
