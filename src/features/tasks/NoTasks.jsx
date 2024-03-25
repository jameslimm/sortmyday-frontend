const NoTasks = () => {
  return (
    <>
      <div className="font-medium text-xl bg-slate-100 border-solid border-4 border-slate-600 mx-4 md:w-2/3 md:mx-auto shadow-m text-slate-50 rounded-xl">
        <h3 className="bg-slate-600 px-2 py-1 text-center">No Todos!</h3>
        <p className="text-slate-600 p-4 font-thin">
          Get started with SortMyDay by adding a task that you need to get done. Type the task into
          the box above.
        </p>
        <p className="text-slate-600 p-4 font-thin">
          You can choose to add a tag to the task by choosing a tag from the list. Add new tags (or
          change existing tag) by going into the user menu at the top of the screen.
        </p>
      </div>
    </>
  );
};

export default NoTasks;
