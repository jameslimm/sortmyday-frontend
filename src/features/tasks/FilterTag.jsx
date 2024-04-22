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

  const formattedTag = formatTag(tag);
  const tagColor = getTagColorClassesFromColor(color).classNormal || "bg-slate-50";

  const FILTERED_CLASS = "font-bold";

  const classString = `block ${tagColor} px-3 rounded-md text-sm cursor-pointer select-none ${
    filter === id && FILTERED_CLASS
  }`;

  // if a setFilter function is passed, return a button
  // otherwise return a styled div.

  if (setFilter) {
    return (
      <button onClick={() => setFilter(id)} className={classString}>
        {formattedTag}
      </button>
    );
  } else {
    return <div className={classString}>{formattedTag}</div>;
  }
};

export default FilterTag;
