import { useEffect, useRef, useState } from "react";
import {
  getNextTagColor,
  getRandomTagColor,
  getTagFromTagId,
  getTagIdFromTag,
} from "../tags/tagUtils";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import useTagStore from "../tags/useTagStore";
import EditTagsView from "./EditTagsView";
import { tagValidate } from "./tagValidate";

const EditTags = () => {
  const newTagRef = useRef(null);

  const [tags, setTags] = useTagStore();
  const [newTagInput, setNewTagInput] = useState("");
  const [uiError, setUiError] = useState("");

  // Focus the new tag input when component loads
  useEffect(() => {
    newTagRef && newTagRef.current.focus();
  }, []);

  const handleDeleteClick = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const handleColorClick = (id) => {
    const { color } = getTagFromTagId(id, tags);
    const nextColor = getNextTagColor(color);

    setTags(tags.map((tag) => (tag.id === id ? { ...tag, color: nextColor } : tag)));
  };

  const handleNewTagInputChange = (e) => {
    setNewTagInput(e.target.value);
    setUiError("");
  };

  const handleNewTagClick = () => {
    const { tag, error } = tagValidate(newTagInput, tags);
    if (error) {
      setUiError(error);
      return;
    }

    const id = getTagIdFromTag(tag);
    const color = getRandomTagColor();

    setTags([...tags, { id, tag, color }]);
    setNewTagInput("");
    newTagRef && newTagRef.current.focus();
  };

  const handleNewTagKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNewTagClick();
    }
  };

  // Drag and drop

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTagPos = (id) => tags.findIndex((tag) => tag.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    const originalPos = getTagPos(active.id);
    const newPos = getTagPos(over.id);

    setTags(arrayMove(tags, originalPos, newPos));
  };

  const EditTagsViewProps = {
    tags,
    handleDeleteClick,
    handleColorClick,
    newTagRef,
    newTagInput,
    handleNewTagKeyDown,
    handleNewTagInputChange,
    handleNewTagClick,
    uiError,
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <EditTagsView {...EditTagsViewProps} />
    </DndContext>
  );
};

export default EditTags;
