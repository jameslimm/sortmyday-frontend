export const taskValidate = (task) => {
  // Check if task is empty
  if (!task) return { error: "Please input a task" };

  // enforce min and max lengths for tag and task
  if (task.length < 3 || task.length > 50)
    return { error: "Task must be between 3 and 50 characters" };

  // make sure no individual task word is over 20 characters
  if (task.split(" ").some((word) => word.length > 15))
    return { error: "No word can be over 15 characters" };

  // got this far!  No errors.
  return {
    task,
    error: null,
  };
};
