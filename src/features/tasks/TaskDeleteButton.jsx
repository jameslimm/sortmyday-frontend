import { RiDeleteBinLine } from "react-icons/ri";

export function TaskDeleteButton({ handleDeleteClick }) {
  return (
    <button onClick={handleDeleteClick}>
      <RiDeleteBinLine className="min-w-7 w-7 min-h-7 h-7 text-slate-400 dark:text-slate-300" />
    </button>
  );
}
