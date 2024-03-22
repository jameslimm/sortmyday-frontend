import { useEffect, useRef, useState } from "react";
import {
  formatTag,
  getRandomTagColor,
  getTagColorClassesFromColor,
  getTagIdFromTag,
} from "../tags/tagUtils";
import useTagStore from "../tags/useTagStore";

import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";

const UserModalEditTags = () => {
  const newTagRef = useRef(null);

  const [tags, setTags] = useTagStore();
  const [newTagInput, setNewTagInput] = useState("");
  const [uiError, setUiError] = useState("");

  const handleDeleteClick = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  useEffect(() => {
    newTagRef && newTagRef.current.focus();
  }, []);

  const handleNewTagInputChange = (e) => {
    setNewTagInput(e.target.value);
    setUiError("");
  };

  const handleNewTagClick = () => {
    const tag = newTagInput.trim().toLowerCase();
    const id = getTagIdFromTag(tag);
    const color = getRandomTagColor();

    if (!newTagInput) {
      setUiError("Empty tag!");
      return;
    }

    if (!new RegExp("^[a-zA-Z]+$").test(newTagInput)) {
      setUiError("Only letters A-Z or a-z allowed");
      return;
    }

    if (tags.find((_tag) => _tag.tag === tag)) {
      setUiError("Tag already exists");
      return;
    }

    setTags([...tags, { id, tag, color }]);
    setNewTagInput("");
    newTagRef && newTagRef.current.focus();
  };

  const handleNewTagKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNewTagClick();
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-center text-2xl dark:text-white font-semibold">Edit Tags</h3>
      {tags && tags.length === 0 && <p className="dark:text-white dark:text-center">No tags.</p>}
      {tags &&
        tags.map((t) => {
          const { tag, id, color } = t;
          const tagClassColor = getTagColorClassesFromColor(color).classNormal;
          return (
            <div key={id} className={`${tagClassColor} flex justify-between rounded-lg p-2 m-2`}>
              <p className="text-xl">{formatTag(tag)}</p>
              <RiDeleteBinLine
                className="min-w-7 w-7 min-h-7 h-7 text-black"
                onClick={() => handleDeleteClick(id)}
              />
            </div>
          );
        })}

      <div className="relative my-6 mx-2">
        <input
          type="text"
          ref={newTagRef}
          value={newTagInput}
          placeholder="Add new tag"
          onKeyDown={handleNewTagKeyDown}
          onChange={handleNewTagInputChange}
          className={`shadow-sm w-full rounded-md px-2 py-2 font-semibold text-m border-solid border-2 ${
            uiError
              ? "border-red-600 text-red-600 placeholder-red-600"
              : "border-slate-200 placeholder-slate-500"
          } text-slate-500`}
        />
        <IoIosAddCircle
          onClick={handleNewTagClick}
          onKeyDown={handleNewTagKeyDown}
          tabIndex={0}
          role="button"
          aria-label="Add New Tag"
          className="absolute text-slate-700 top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-lg"
        />
        <p className="absolute -bottom-2/3 text-red-600 dark:bg-white font-semibold rounded-lg text-sm px-2">
          {uiError}
        </p>
      </div>
    </div>
  );
};

export default UserModalEditTags;
