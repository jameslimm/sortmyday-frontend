import { useGetTasksQuery } from "../api/apiSlice";

const Filters = ({ task, filterBy, setFilterBy }) => {
  const { data: tasks } = useGetTasksQuery();

  // enumerate through all tasks for this user
  // and determine the unique filter tags

  // Array of tailwind color class names to apply to
  // the tags.
  const TAG_COLORS = [
    "bg-blue-100",
    "bg-red-100",
    "bg-green-100",
    "bg-orange-100",
    "bg-teal-100",
    "bg-amber-100",
    "bg-lime-100",
    "bg-indigo-100",
  ];

  // apply these tailwind classes to the tag that has been selected
  // for filtering the tasks.
  const FILTERED_CLASS = "border-solid border-2 border-gray-900";

  if (!tasks) return;

  const allUniqueTags = [...new Set(tasks.map((task) => task.tag).flat())];

  // Remove the "inbox" tag and make sure it's replaced in position 0 of the array
  const tags = allUniqueTags.filter((t) => t !== "inbox");
  tags.unshift("inbox");

  // Capitalise first letter of all tags
  const displayTags = tags.map(
    (t) => t.substring(0, 1).toUpperCase() + t.substring(1, t.length).toLowerCase()
  );

  return (
    <>
      {!task && (
        <>
          <span
            onClick={() => setFilterBy("")}
            className={`block bg-slate-100 px-2 rounded-md text-sm cursor-pointer ${
              !task && filterBy === "" && FILTERED_CLASS
            }`}
          >
            All
          </span>
        </>
      )}
      {displayTags.map((tag, i) => {
        // enumerate through list of all tags used by all tasks.  If no task is passed to the
        // component, output all tasks.  Otherwise, filter by the tags in this task.
        const tagLower = tag.toLowerCase();
        if ((task && task.tag.includes(tagLower)) || !task) {
          return (
            <span
              onClick={() => setFilterBy(tagLower)}
              key={tag}
              className={`block ${TAG_COLORS[i]} px-2 rounded-md text-sm cursor-pointer ${
                !task && filterBy === tagLower && FILTERED_CLASS
              }`}
            >
              {tag}
            </span>
          );
        }
      })}
    </>
  );
};

export default Filters;
