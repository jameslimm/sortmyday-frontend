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
  // A pending task is one that is optimistically added to the
  // task array, and will be overwritten once data is invalidated in the API
  const pending = task?.pending !== undefined;

  // Deconstruct all task data - some may be undefined for a pending task.
  const { _id, title, tag, due, completed, pos } = task || {};

  // Transition classes for use with React Transition Group
  const transitionClassNames = {
    entering: "opacity-1",
    entered: "opacity-1",
    exiting: "opacity-0",
    exited: "opacity-0",
  };

  // set background color of task based on if it's evenly
  // positioned (using pos value).
  // Creates an alternating style effect.
  const taskBGLight = pos % 2 === 0 ? "bg-slate-100" : "bg-gray-100";
  const taskBGDark = pos % 2 === 0 ? "dark:bg-slate-700" : "dark:bg-gray-700";

  return (
    <div
      ref={nodeRef}
      className={`flex items-center ${taskBGLight} ${taskBGDark} px-4 py-3 my-3 mx-4 rounded-md 
      shadow-md gap-3 sm:gap-4 transition-opacity 
      border-solid border-2 border-slate-300 dark:border-slate-600 ${
        transitionClassNames[state]
      }  ${pending && "animate-pulse"}`}
    >
      {/* COMPLETED CHECKBOX */}
      <input
        className="w-9 h-9 min-h-9 min-w-9 accent-slate-600 shadow-md"
        type="checkbox"
        checked={completed}
        onChange={handleCheckToggle}
        id={_id}
        disabled={pending}
      />

      {/* TODO TITLE ON TOP LINE, THEN TAG AND DUE DATE BELOW */}
      <div className="sm:mx-2 flex-1 flex flex-col gap-2 justify-between">
        <label
          className={`font-normal text-xl sm:text-2xl text-slate-700 cursor-pointer text-balance ${
            completed && "line-through"
          } dark:text-purple-200`}
          htmlFor={_id}
        >
          {title}
        </label>
        {/* IF A DUE DATE OR TAG EXISTS, INCLUDE THE LOWER DIV */}
        {(due || tag) && (
          <div className="flex items-center gap-2">
            {tag && <FilterTag tagId={tag} />}
            {!completed && !pending && due && <DueDateTaskView isoDueDate={due} />}
          </div>
        )}
      </div>

      {/* EDIT AND DELETE BUTTONS */}
      {!completed && !pending && <TaskEditButton setIsEditing={setIsEditing} />}
      {!pending && <TaskDeleteButton handleDeleteClick={handleDeleteClick} />}
    </div>
  );
};

export default TaskViewRender;
