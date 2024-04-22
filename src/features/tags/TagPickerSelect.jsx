import useTagStore from "./useTagStore";

import { formatTag, getTagColorClassesFromColor, getTagFromTagId } from "./tagUtils";

const TagPickerSelect = ({ tagSelect, setTagSelect, isDisabled = false }) => {
  // Create a select element with the available tags, styled with the
  // defined tag colors.

  // get the stored user tags, save to tags array.
  const [tags] = useTagStore();

  // add a blank "no tag" tag to the tags array.
  const tagsUi = [{ id: "", tag: "No tag", color: "slate" }, ...tags];

  // get the color class of the currently selected tag for the select
  const { color } = getTagFromTagId(tagSelect, tags);
  const selectColor = getTagColorClassesFromColor(color).classNormal;

  return (
    <select
      className={`${selectColor} w-32 px-1 py-1 shadow-sm rounded-md font-normal text-m border-solid border-2 border-slate-200 placeholder-slate-500 text-slate-500`}
      value={tagSelect}
      onChange={(e) => setTagSelect(e.target.value)}
      disabled={isDisabled}
    >
      {tagsUi.map((tag) => {
        const tagClassColor = getTagColorClassesFromColor(tag.color).classNormal;
        const tagFormatted = formatTag(tag.tag);
        const tagId = tag.id;
        return (
          <option
            className={`${tagClassColor} font-normal text-m text-black`}
            key={tagId}
            value={tagId}
          >
            {tagFormatted}
          </option>
        );
      })}
      ;
    </select>
  );
};

//   return (
//     <div className="relative w-32">
//       <div
//         tabIndex={0}
//         onKeyDown={handleMenuKeyDown}
//         onClick={() => setMenuOpen((o) => !o)}
//         className={`select-none cursor-pointer p-1 font-semibold text-slate-500 text-m text-nowrap flex items-center gap-2 justify-between border-solid border-2 border-slate-300 ${
//           color ? getTagColorClassesFromColor(color).classNormal : "bg-white"
//         } rounded-md`}
//       >
//         {tag && formatTag(tag)} {menuOpen ? <FaAngleUp /> : <FaAngleDown />}
//       </div>
//       <div className="absolute w-32">
//         {menuOpen &&
//           tagsUi.map((tag, i) => {
//             const tagClassColor = getTagColorClassesFromColor(tag.color).classNormal;
//             const tagClassHover = getTagColorClassesFromColor(tag.color).classHover;
//             const tagFormatted = formatTag(tag.tag);
//             const tagId = tag.id;

//             return (
//               <div
//                 onClick={() => handleTagClick(tagId)}
//                 onMouseOver={() => setMenuItemFocus(i)}
//                 key={tag.id}
//                 className={`select-none cursor-pointer p-1 font-semibold text-slate-500 text-m border-solid border-2 border-slate-200 ${
//                   menuItemFocus === i ? tagClassHover : tagClassColor
//                 }`}
//               >
//                 {tagFormatted}
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

export default TagPickerSelect;
