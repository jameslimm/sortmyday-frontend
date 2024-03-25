import { TaskDeleteButton } from "./TaskDeleteButton";
import { TaskEditButton } from "./TaskEditButton";

import FilterTag from "./FilterTag";

const TaskViewRender = ({
  state,
  nodeRef,
  task,
  handleCheckToggle,
  handleDeleteClick,
  setIsEditing,
}) => {
  const pending = task?.pending !== undefined;

  const transitionClassNames = {
    entering: "opacity-1",
    entered: "opacity-1",
    exiting: "opacity-0",
    exited: "opacity-0",
  };

  return (
    <div
      ref={nodeRef}
      className={`flex items-center ${
        task.completed ? "bg-slate-50" : "bg-slate-200"
      } p-2 mx-3 my-4 rounded shadow-md gap-4 transition-opacity ${
        transitionClassNames[state]
      } dark:bg-slate-800 ${pending && "animate-pulse"}`}
    >
      <input
        className="w-10 h-10 accent-slate-600 shadow-md"
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckToggle}
        id={task._id}
        disabled={pending}
      />
      <div className="flex-1 flex flex-col gap-1 justify-between">
        <label
          className={`font-normal text-2xl text-purple-950 cursor-pointer ${
            task.completed && "line-through"
          } dark:text-purple-200`}
          htmlFor={task._id}
        >
          {task.title}
        </label>
        {task.tag && (
          <div className="flex items-center justify-start gap-2">
            <FilterTag tagId={task.tag} />
          </div>
        )}
      </div>
      {!task.completed && !pending && <TaskEditButton setIsEditing={setIsEditing} />}
      {!pending && <TaskDeleteButton handleDeleteClick={handleDeleteClick} />}
    </div>
  );
};

export default TaskViewRender;
