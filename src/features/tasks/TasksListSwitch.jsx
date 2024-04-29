import { Switch } from "react-aria-components";

const TaskListSwitch = ({ showCompleted, setShowCompleted }) => {
  return (
    <Switch
      className="group flex gap-2 items-center font-normal text-sm"
      onChange={setShowCompleted}
      defaultSelected={showCompleted}
    >
      <span className={!showCompleted ? "font-bold" : null}>In Progress</span>
      <div className="flex items-center h-[26px] w-[44px] shrink-0 cursor-default rounded-full shadow-inner bg-clip-padding border border-solid border-white/30 p-[3px] box-border transition duration-200 ease-in-out bg-slate-400 group-pressed:bg-slate-700 group-selected:bg-slate-800 group-selected:group-pressed:bg-slate-800 outline-none group-focus-visible:ring-2 ring-black">
        <span className="h-[18px] w-[18px] transform rounded-full bg-white shadow transition duration-100    ease-in-out translate-x-0 group-selected:translate-x-[100%]" />
      </div>
      <span className={showCompleted ? "font-bold" : null}>Completed</span>
    </Switch>
  );
};

export default TaskListSwitch;
