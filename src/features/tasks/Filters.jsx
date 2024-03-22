import useTagStore from "../tags/useTagStore";
import FilterTag from "./FilterTag";

const Filters = ({ showAll, filter, setFilter }) => {
  const [tags] = useTagStore();

  return (
    <>
      {showAll && tags && tags.length > 0 && (
        <FilterTag tagId="" filter={filter} setFilter={setFilter} />
      )}

      {tags &&
        tags.map((tag) => {
          return <FilterTag key={tag.id} tagId={tag.id} filter={filter} setFilter={setFilter} />;
        })}
    </>
  );
};

export default Filters;
