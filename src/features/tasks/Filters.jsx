const Filters = () => {
  return (
    <>
      <div className="flex items-center justify-start gap-2 m-4">
        <span className="block">Filter By:</span>
        <span className="block bg-slate-50 px-2 rounded-md text-sm cursor-pointer border-solid border-2 border-gray-900">
          # All
        </span>
        <span className="block bg-blue-100 px-2 rounded-md text-sm cursor-pointer"># Inbox</span>
        <span className="block bg-red-100 px-2 rounded-md text-sm cursor-pointer"># Work</span>
        <span className="block bg-orange-100 px-2 rounded-md text-sm cursor-pointer"># Home</span>
      </div>
    </>
  );
};

export default Filters;
