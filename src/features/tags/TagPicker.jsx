import { useState } from "react";

import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import useTagStore from "./useTagStore";
import {
  formatTag,
  getRandomTagColor,
  getTagColorClassesFromColor,
  getTagFromTagId,
  getTagIdFromTag,
} from "./tagUtils";

const TagPicker = ({ tagSelect, setTagSelect }) => {
  // local state
  const [menuOpen, setMenuOpen] = useState(false);

  const [tags] = useTagStore();
  const tagsUi = [{ id: "", tag: "No tag", color: "slate" }, ...tags];

  const [menuItemFocus, setMenuItemFocus] = useState(-1);

  const handleTagClick = (tagId) => {
    setTagSelect(tagId);
    setMenuOpen(false);
  };

  const handleMenuKeyDown = (e) => {
    console.log("KD", e.key);
    switch (e.key) {
      case "ArrowDown":
        if (!menuOpen) {
          setMenuOpen(true);
          setMenuItemFocus(0);
          return;
        }
        if (menuItemFocus < tagsUi.length - 1) setMenuItemFocus(menuItemFocus + 1);
        break;
      case "ArrowUp":
        if (!menuOpen) return;
        if (menuItemFocus > 0) setMenuItemFocus(menuItemFocus - 1);
        return;
      case "Enter":
        setTagSelect(tagsUi[menuItemFocus].id);
        setMenuOpen(false);
    }
  };

  const { tag, color } = getTagFromTagId(tagSelect, tags);

  return (
    <div className="relative w-32">
      <div
        tabIndex={0}
        onKeyDown={handleMenuKeyDown}
        onClick={() => setMenuOpen((o) => !o)}
        className={`select-none cursor-pointer p-1 font-semibold text-slate-500 text-m text-nowrap flex items-center gap-2 justify-between border-solid border-2 border-slate-300 ${
          color ? getTagColorClassesFromColor(color).classNormal : "bg-white"
        } rounded-md`}
      >
        {tag && formatTag(tag)} {menuOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      <div className="absolute w-32">
        {menuOpen &&
          tagsUi.map((tag, i) => {
            const tagClassColor = getTagColorClassesFromColor(tag.color).classNormal;
            const tagClassHover = getTagColorClassesFromColor(tag.color).classHover;
            const tagFormatted = formatTag(tag.tag);
            const tagId = tag.id;

            return (
              <div
                onClick={() => handleTagClick(tagId)}
                onMouseOver={() => setMenuItemFocus(i)}
                key={tag.id}
                className={`select-none cursor-pointer p-1 font-semibold text-slate-500 text-m border-solid border-2 border-slate-200 ${
                  menuItemFocus === i ? tagClassHover : tagClassColor
                }`}
              >
                {tagFormatted}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TagPicker;
