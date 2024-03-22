import { formatTag, getTagColorClassesFromColor, getTagFromTagId } from "../tags/tagUtils";
import useTagStore from "../tags/useTagStore";

const FilterTag = ({ tagId, filter, setFilter }) => {
  const [tags] = useTagStore();

  let { tag, id, color } = getTagFromTagId(tagId, tags);

  if (id === "") {
    tag = "All";
  }

  // apply these tailwind classes to the tag that has been selected
  // for filtering the tasks.
  const FILTERED_CLASS = "border-solid border-2 border-gray-900";

  const formattedTag = formatTag(tag);
  const tagColor = getTagColorClassesFromColor(color).classNormal || "bg-slate-50";

  return (
    <span
      onClick={() => setFilter && setFilter(id)}
      className={`block ${tagColor} px-2 rounded-md text-sm cursor-pointer select-none ${
        filter === id && FILTERED_CLASS
      }`}
    >
      {formattedTag}
    </span>
  );
};

export default FilterTag;
