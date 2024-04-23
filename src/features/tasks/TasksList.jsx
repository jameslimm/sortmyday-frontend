import { useMemo } from "react";

import Task from "./Task";
import NoTasks from "./NoTasks";

import useTagStore from "../tags/useTagStore";
import { useGetTasksQuery } from "./tasksSlice";

const TasksList = ({ filter }) => {
  const { data: tasks } = useGetTasksQuery();
  const [tags] = useTagStore();

  const sortedTasks = useMemo(() => {
    // check that there is a valid tag for each task.  If tag
    // does not exist (has been deleted), set tag to empty string before
    // proceeding.
    const tasksClean = tasks?.map((task) => {
      if (tags && !tags.find((tag) => tag.id === task.tag)) {
        return { ...task, tag: "" };
      }
      return task;
    });

    // Sort the tasks list by creation date.
    return (
      tasksClean && tasksClean.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
  }, [tasks, tags]);

  const filteredTasks = useMemo(() => {
    // Create new filtered tasks array dependent on selected filter tag (or "" for all)
    const filtered = sortedTasks?.filter((task) => (filter !== "" ? task.tag === filter : true));

    // finally, add a position id for each task to enable custom styling
    return filtered?.map((task, i) => ({ ...task, pos: i }));
  }, [filter, sortedTasks]);

  return (
    <>
      {filteredTasks?.length === 0 && <NoTasks />}

      {/* The React key should be the unique task id created by MongoDB... or for pending items
      with no _id value that will soon be invalidated just use a random number */}
      {filteredTasks?.map((task) => (
        <Task key={task._id || Math.round(Math.random() * 100000)} task={task} />
      ))}
    </>
  );
};

export default TasksList;
