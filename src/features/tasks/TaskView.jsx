import { RiDeleteBinLine } from "react-icons/ri";

const TaskView = ({ task, handleUpdateTask, handleDeleteTask }) => {
  const handleCheckToggle = () => {
    handleUpdateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="flex items-center bg-slate-100 p-2 mx-3 my-4 rounded shadow-md gap-4">
      <input
        className="w-10 h-10 accent-white shadow-md"
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckToggle}
        id={task._id}
      />
      <div className="flex-1 flex flex-col gap-1 justify-between">
        <label className="font-normal text-2xl text-purple-950 cursor-pointer" htmlFor={task._id}>
          {task.title}
        </label>
        <div className="flex items-center justify-start gap-2">
          <span className="block bg-blue-100 px-2 rounded-md text-sm cursor-pointer"># Inbox</span>
          <span className="block bg-red-100 px-2 rounded-md text-sm cursor-pointer"># Work</span>
          <span className="block bg-orange-100 px-2 rounded-md text-sm cursor-pointer"># Home</span>
        </div>
      </div>
      <RiDeleteBinLine
        className="w-8 h-8 text-slate-400"
        onClick={() => handleDeleteTask(task._id)}
      />
    </div>
  );
};

export default TaskView;
