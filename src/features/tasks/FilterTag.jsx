import { formatTag, getTagColorClassesFromColor, getTagFromTagId } from "../tags/tagUtils";
import useTagStore from "../tags/useTagStore";

const FilterTag = ({ tagId, filter, setFilter }) => {
  const [tags] = useTagStore();

  let { tag, id, color } = getTagFromTagId(tagId, tags);

  // apply these tailwind classes to the tag that has been selected
  // for filtering the tasks.

  // If the id is empty - for no tag selected - use "all"
  // as the filter label.
  if (id === "") {
    tag = "all";
  }

  const formattedTag = formatTag(tag);
  const tagColor = getTagColorClassesFromColor(color);

  const FILTERED_CLASS = "font-bold";

  const classString = `block ${tagColor} px-2 py-0.5 rounded-md shadow-sm text-sm border-2 border-solid border-slate-300 select-none ${
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
