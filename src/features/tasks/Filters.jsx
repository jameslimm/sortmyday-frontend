import { useEffect } from "react";
import useTagStore from "../tags/useTagStore";
import FilterTag from "./FilterTag";

const Filters = ({ filter, setFilter }) => {
  const [tags] = useTagStore();

  useEffect(() => {
    // ensure that the selected filter tag exists
    // in the tags array.  If not, set the filter to "".
    if (!tags.find((tag) => tag.id === filter)) setFilter("");
  }, [tags, filter, setFilter]);

  if (tags?.length === 0) return <></>;

  return (
    <div className="flex flex-wrap items-center justify-start gap-2">
      <FilterTag tagId="" filter={filter} setFilter={setFilter} />
      {tags?.map((tag) => {
        return <FilterTag key={tag.id} tagId={tag.id} filter={filter} setFilter={setFilter} />;
      })}
    </div>
  );
};

export default Filters;
