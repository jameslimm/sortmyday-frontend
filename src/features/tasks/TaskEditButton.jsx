import { RiEditLine } from "react-icons/ri";

const TaskEditButton = ({ setIsEditing }) => {
  return (
    <button onClick={() => setIsEditing(true)}>
      <RiEditLine className="w-7 h-7 text-slate-400 dark:text-slate-300" />
    </button>
  );
};

export default TaskEditButton;
