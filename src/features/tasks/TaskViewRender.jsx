import TaskDeleteButton from "./TaskDeleteButton";
import TaskEditButton from "./TaskEditButton";
import FilterTag from "./FilterTag";
import DueDateTaskView from "./DueDateTaskView";

const TaskViewRender = ({
  state,
  nodeRef,
  task,
  handleCheckToggle,
  handleDeleteClick,
  setIsEditing,
}) => {
  const pending = task?.pending !== undefined;
  const { _id, title, tag, due, completed } = task || {};

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
        completed ? "bg-slate-50" : "bg-slate-200"
      } p-2 mx-3 my-4 rounded shadow-md gap-4 transition-opacity ${
        transitionClassNames[state]
      } dark:bg-slate-800 ${pending && "animate-pulse"}`}
    >
      <input
        className="w-10 h-10 accent-slate-600 shadow-md"
        type="checkbox"
        checked={completed}
        onChange={handleCheckToggle}
        id={_id}
        disabled={pending}
      />
      <div className="flex-1 flex flex-col gap-1 justify-between">
        <label
          className={`font-normal text-2xl text-purple-950 cursor-pointer ${
            completed && "line-through"
          } dark:text-purple-200`}
          htmlFor={_id}
        >
          {title}
        </label>
        {tag && (
          <div className="flex items-center justify-start gap-2">
            <FilterTag tagId={tag} />
          </div>
        )}
      </div>
      {!completed && !pending && due && <DueDateTaskView isoDueDate={due} />}
      {!completed && !pending && <TaskEditButton setIsEditing={setIsEditing} />}
      {!pending && <TaskDeleteButton handleDeleteClick={handleDeleteClick} />}
    </div>
  );
};

export default TaskViewRender;
