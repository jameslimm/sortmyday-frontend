import { RiEditLine } from "react-icons/ri";

export function TaskEditButton({ setIsEditing }) {
  return (
    <RiEditLine
      onClick={() => setIsEditing(true)}
      className="w-7 h-7 text-slate-400 dark:text-slate-300"
    />
  );
}
