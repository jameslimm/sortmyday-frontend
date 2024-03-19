import { useGetTasksQuery } from "../api/apiSlice";
import FilterTag from "./FilterTag";

const Filters = ({ singleTag, showAll, filter, setFilter }) => {
  const { data: tasks } = useGetTasksQuery();

  // enumerate through all tasks for this user
  // and determine the unique filter tags

  if (!tasks) return;

  const allUniqueTags = [
    ...new Set(
      tasks
        .map((task) => task.tag)
        .filter((tag) => tag !== "")
        .flat()
    ),
  ];

  // If there's an "inbox", move it to the front of the array.
  const tags = allUniqueTags.filter((t) => t !== "inbox");
  if (tags.length < allUniqueTags.length) tags.unshift("inbox");

  return (
    <>
      {showAll && tags.length > 0 && (
        <FilterTag tag={"all"} tagIndex={-1} filter={filter} setFilter={setFilter} />
      )}

      {tags.map((tag, i) => {
        // enumerate through list of all tags used by all tasks.  If no task is passed to the
        // component, output all tasks.  Otherwise, filter by the tags in this task.
        if (!singleTag || singleTag === tag)
          return (
            <FilterTag key={tag} tag={tag} tagIndex={i} filter={filter} setFilter={setFilter} />
          );
      })}
    </>
  );
};

export default Filters;
