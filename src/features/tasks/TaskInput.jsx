const TaskInput = () => {
  return (
    <input
      className={`flex-1 shadow-sm rounded-md px-2 py-1 font-semibold text-m border-solid border-2 outline-none ${
        uiError
          ? "border-red-600 text-red-600 placeholder-red-600"
          : "border-slate-200 placeholder-slate-500"
      } text-slate-500`}
      type="text"
      value={task}
      placeholder="Todo item with optional #tag"
      onChange={handleInputChange}
      onBlur={() => setUiError("")}
      ref={taskInputRef}
    />
  );
};

export default TaskInput;
