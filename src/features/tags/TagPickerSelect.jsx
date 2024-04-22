import useTagStore from "./useTagStore";

import { formatTag, getTagColorClassesFromColor, getTagFromTagId } from "./tagUtils";

const TagPickerSelect = ({ tagSelect, setTagSelect, isDisabled = false }) => {
  // Create a select element with the available tags, styled with the
  // defined tag colors.

  // get the stored user tags, save to tags array.
  const [tags] = useTagStore();

  // add a blank "no tag" tag to the tags array.
  const tagsUi = [{ id: "", tag: "No tag", color: "" }, ...tags];

  // get the color class of the currently selected tag for the select
  const { color } = getTagFromTagId(tagSelect, tags);
  const selectColor = getTagColorClassesFromColor(color);

  return (
    <select
      className={`${selectColor} w-32 px-1 py-1 shadow-sm rounded-md border-solid border-2 border-slate-200 focus:ring-2 ring-orange-400 ring-offset-2 outline-none font-semibold text-m text-slate-500`}
      value={tagSelect}
      onChange={(e) => setTagSelect(e.target.value)}
      disabled={isDisabled}
    >
      {tagsUi.map(({ color, tag, id: tagId }) => (
        <option
          className={`${getTagColorClassesFromColor(color)} font-semibold text-m text-slate-500`}
          key={tagId}
          value={tagId}
        >
          {formatTag(tag)}
        </option>
      ))}
    </select>
  );
};

export default TagPickerSelect;
