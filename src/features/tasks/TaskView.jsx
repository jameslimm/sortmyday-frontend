import { RiDeleteBinLine } from "react-icons/ri";
import { RiEditLine } from "react-icons/ri";

import Filters from "./Filters";
import { useDeleteTaskMutation, useUpdateTaskMutation } from "../api/apiSlice";
import { Transition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";

const TaskView = ({ task, setIsEditing, taskPos }) => {
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // after component render, set inView to true
    // to trigger react transition.
    setTimeout(() => setInView(true), 10 * taskPos);
  }, [taskPos]);

  const nodeRef = useRef(null);

  const handleCheckToggle = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleDeleteClick = () => {
    setInView(false);
    setTimeout(() => deleteTask(task._id), 150);
  };

  const transitionClassNames = {
    entering: "opacity-1",
    entered: "opacity-1",
    exiting: "opacity-0",
    exited: "opacity-0",
  };

  return (
    <Transition nodeRef={nodeRef} in={inView} timeout={150}>
      {(state) => (
        <div
          ref={nodeRef}
          className={`flex items-center ${
            task.completed ? "bg-slate-50" : "bg-slate-200"
          } p-2 mx-3 my-4 rounded shadow-md gap-4 transition-opacity ${
            transitionClassNames[state]
          }`}
        >
          <input
            className="w-10 h-10 accent-slate-600 shadow-md"
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
            {task.tag && (
              <div className="flex items-center justify-start gap-2">
                <Filters singleTag={task.tag} />
              </div>
            )}
          </div>
          {!task.completed && (
            <RiEditLine onClick={() => setIsEditing(true)} className="w-7 h-7 text-slate-400" />
          )}
          <RiDeleteBinLine
            className="min-w-7 w-7 min-h-7 h-7 text-slate-400"
            onClick={() => handleDeleteClick(task._id)}
          />
        </div>
      )}
    </Transition>
  );
};

export default TaskView;
