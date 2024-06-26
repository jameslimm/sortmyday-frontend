import { format, parseISO, isToday, isTomorrow } from "date-fns";

const DueDateTaskView = ({ isoDueDate }) => {
  // displays the passed ISO date string in the form (example): "27th Apr"

  const dueDate = parseISO(isoDueDate);
  const dueDateFormat = format(dueDate, "do LLL");

  // If task is due today or tomorrow, create special message
  let dueMessage = "";
  if (isToday(dueDate)) dueMessage = "Today";
  if (isTomorrow(dueDate)) dueMessage = "Tomorrow";

  return (
    <span className="text-nowrap select-none shadow-sm border-solid bg-slate-100 dark:bg-slate-600 border-2 border-slate-300 rounded-md px-2 py-0.5 font-normal text-slate-500 dark:text-slate-200 text-sm">
      Due: {dueMessage || dueDateFormat}
    </span>
  );
};

export default DueDateTaskView;
