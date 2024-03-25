import EditTagNewTagForm from "./EditTagsNewTagForm";
import EditTagsRow from "./EditTagsRow";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

const EditTagsView = ({
  tags,
  handleDeleteClick,
  handleColorClick,
  newTagRef,
  newTagInput,
  handleNewTagKeyDown,
  handleNewTagInputChange,
  handleNewTagClick,
  uiError,
}) => {
  return (
    <div className="w-full">
      <h3 className="text-center text-2xl dark:text-white font-semibold">Edit Tags</h3>
      {tags && tags.length === 0 && <p className="dark:text-white dark:text-center">No tags.</p>}

      <SortableContext items={tags} strategy={verticalListSortingStrategy}>
        {tags &&
          tags.map((t) => {
            return (
              <EditTagsRow
                key={t.id}
                t={t}
                handleColorClick={handleColorClick}
                handleDeleteClick={handleDeleteClick}
              />
            );
          })}
      </SortableContext>

      <EditTagNewTagForm
        newTagRef={newTagRef}
        newTagInput={newTagInput}
        handleNewTagKeyDown={handleNewTagKeyDown}
        handleNewTagInputChange={handleNewTagInputChange}
        handleNewTagClick={handleNewTagClick}
        uiError={uiError}
      />
    </div>
  );
};

export default EditTagsView;
