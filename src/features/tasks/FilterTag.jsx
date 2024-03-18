const FilterTag = ({ tag, tagIndex, filterBy, setFilterBy }) => {
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

  const formattedTag =
    tag.substring(0, 1).toUpperCase() + tag.substring(1, tag.length).toLowerCase();

  const tagColor = tagIndex >= 0 ? TAG_COLORS[tagIndex] : `bg-slate-100`;

  const selectedTag = (filterBy === "" && tag === "all") || filterBy === tag;

  return (
    <span
      onClick={() => setFilterBy && setFilterBy(tag === "all" ? "" : tag)}
      className={`block ${tagColor} px-2 rounded-md text-sm cursor-pointer select-none ${
        selectedTag && FILTERED_CLASS
      }`}
    >
      {formattedTag}
    </span>
  );
};

export default FilterTag;
