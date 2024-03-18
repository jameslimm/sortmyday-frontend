export const taskValidate = (taskInput, chosen) => {
  // Check if task is empty
  if (!taskInput) return { error: "Please input a task" };

  // Detect any tags in the input task
  const taskArray = taskInput.split("#");

  // Just one # tag allowed
  if (taskArray.length > 2) return { error: "Too many tags set, only one allowed" };

  const task = taskArray[0].trim();

  // tag must be a single word with no spaces
  const tag = taskArray[1]?.toLowerCase().split(" ").join("");

  // enforce min and max lengths for tag and task
  if (task.length < 3 || task.length > 30)
    return { error: "Task must be between 3 and 30 characters" };
  if (tag && (tag.length < 3 || tag.length > 20))
    return { error: "Task must be between 3 and 20 characters" };

  // make sure no individual task word is over 20 characters
  if (task.split(" ").some((word) => word.length > 15))
    return { error: "No word can be over 15 characters" };

  // got this far!  No errors.
  return {
    task,
    tag,
    error: null,
  };
};
