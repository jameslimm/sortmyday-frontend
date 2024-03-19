const NoTasks = () => {
  return (
    <>
      <div className="font-medium text-xl bg-slate-100 border-solid border-4 border-slate-600 mx-4 md:w-2/3 md:mx-auto shadow-m text-slate-50 rounded-xl">
        <h3 className="bg-slate-600 px-2 py-1 text-center">No Todos!</h3>
        <p className="text-slate-600 p-4 font-thin">
          Get started with SortMyDay by adding a task that you need to get done. Type the task into
          the box above, eg:
        </p>
        <p className="text-slate-600 p-4 font-sm">Mow the lawn</p>
        <p className="text-slate-600 p-4 font-thin">
          You can sort and filter your tasks by tagging them. To create a task with a tag, just add
          a # with the tag at the end of you task:
        </p>
        <p className="text-slate-600 p-4 font-sm">Repaint the lounge #home</p>
      </div>
    </>
  );
};

export default NoTasks;
