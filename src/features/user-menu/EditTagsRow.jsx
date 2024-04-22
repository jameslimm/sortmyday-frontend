import { RiDraggable } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { formatTag, getTagColorClassesFromColor } from "../tags/tagUtils";

const EditTagsRow = ({ t, handleColorClick, handleDeleteClick }) => {
  const { tag, id, color } = t;
  const { classNormal: tagClassColor } = getTagColorClassesFromColor(color);

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      key={id}
      className={`${tagClassColor} flex group justify-between items-center cursor-pointer select-none rounded-lg gap-2 p-2 m-2`}
    >
      <RiDraggable
        {...listeners}
        tabIndex={0}
        className="w-6 h-6 group-hover:visible invisible text-slate-700"
      />
      <p className="text-xl flex-1 text-slate-700 select-none">{formatTag(tag)}</p>
      <button onClick={() => handleColorClick(id)}>
        <IoColorPaletteOutline
          className="min-w-7 w-7 min-h-7 h-7 text-slate-700"
          onClick={() => handleColorClick(id)}
        />
      </button>
      <button onClick={() => handleDeleteClick(id)}>
        <RiDeleteBinLine className="min-w-7 w-7 min-h-7 h-7 text-slate-700 cursor-pointer" />
      </button>
    </div>
  );
};

export default EditTagsRow;
