import { useGetTasksQuery } from "../api/apiSlice";
import FilterTag from "./FilterTag";

const Filters = ({ task, filterBy, setFilterBy }) => {
  const { data: tasks } = useGetTasksQuery();

  // enumerate through all tasks for this user
  // and determine the unique filter tags

  if (!tasks) return;

  const allUniqueTags = [...new Set(tasks.map((task) => task.tag).flat())];

  // Remove the "inbox" tag and make sure it's replaced in position 0 of the array
  const tags = allUniqueTags.filter((t) => t !== "inbox");
  tags.unshift("inbox");

  return (
    <>
      {!task && (
        <FilterTag tag={"all"} tagIndex={-1} filterBy={filterBy} setFilterBy={setFilterBy} />
      )}

      {tags.map((tag, i) => {
        // enumerate through list of all tags used by all tasks.  If no task is passed to the
        // component, output all tasks.  Otherwise, filter by the tags in this task.
        if ((task && task.tag.includes(tag)) || !task)
          return (
            <FilterTag
              key={tag}
              tag={tag}
              tagIndex={i}
              setFilterBy={setFilterBy}
              filterBy={filterBy}
            />
          );
      })}
    </>
  );
};

export default Filters;
