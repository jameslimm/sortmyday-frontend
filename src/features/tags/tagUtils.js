// Define a set of TailWind color classes that can be assigned to tags
const tailwindColors = {
  slate: "bg-slate-200",
  red: "bg-red-200",
  orange: "bg-orange-200",
  amber: "bg-amber-200",
  yellow: "bg-yellow-200",
  lime: "bg-lime-200",
  green: "bg-green-200",
  emerald: "bg-emerald-200",
  teal: "bg-teal-200",
  sky: "bg-sky-200",
  blue: "bg-blue-200",
  indigo: "bg-indigo-200",
  violet: "bg-violet-200",
  fuchsia: "bg-fuchsia-200",
  pink: "bg-pink-200",
  rose: "bg-rose-200",
};

export const getTagColorClassesFromColor = (color) => {
  // returns the Tailwind class string to use for
  // a provided color string.

  if (color === "") return "bg-white";

  // check that parameter color exists in the tailwind colors
  // array.  If not, return a default color.
  if (color in tailwindColors) {
    return tailwindColors[color];
  } else {
    ("bg-slate-100");
  }
};

export const getRandomTagColor = () => {
  // returns a random color for a new tag
  const colKeys = Object.keys(tailwindColors);
  return colKeys[Math.floor(Math.random() * colKeys.length)];
};

export const getNextTagColor = (color) => {
  // takes a color and returns the next color in the color array,
  // returning to the beginning again if needed.

  // get all color keys into an array.
  const colKeys = Object.keys(tailwindColors);

  // find the position of the argument color
  const colIdx = colKeys.findIndex((col) => col === color);

  // not found?  Return the color from index 0.
  if (colIdx === -1) return colKeys[0];

  return colKeys[colIdx < colKeys.length - 1 ? colIdx + 1 : 0];
};

export const getTagIdFromTag = (tag) => {
  // create a simple randomised string ID for a given tag name.
  // for example - a tag of "Home" could create a tagId of "hom234"

  // String bit
  const tagIdString = tag.length >= 3 ? tag.substring(0, 3).toLowerCase() : tag.toLowerCase();

  // Random number bit
  const randomNumString = String(Math.round(Math.random() * 1000));

  return tagIdString + randomNumString;
};

export const formatTag = (tag) => {
  if (!tag || typeof tag !== "string") return "";
  // capitalise the first letter of the given tag name, with the
  // rest being lower case;
  return tag.substring(0, 1).toUpperCase() + tag.substring(1, tag.length).toLowerCase();
};

export const getTagFromTagId = (tagId, tags) => {
  // when given an array of tags and the tagid, will return a tag object matching the
  // id, or a "no tag" object.
  if (tags && tags.length > 0 && tagId) {
    const tag = tags.find((tag) => tag.id === tagId);
    if (tag) return tag;
  }

  return { id: "", tag: "No tag", color: "" };
};
