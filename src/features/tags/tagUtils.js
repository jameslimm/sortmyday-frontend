// Define a set of TailWind color classes that can be assigned to tags
const tailwindColors = {
  slate: { classNormal: "bg-slate-200", classHover: "bg-slate-400" },
  red: { classNormal: "bg-red-200", classHover: "bg-red-400" },
  orange: { classNormal: "bg-orange-200", classHover: "bg-orange-400" },
  amber: { classNormal: "bg-amber-200", classHover: "bg-amber-400" },
  yellow: { classNormal: "bg-yellow-200", classHover: "bg-yellow-400" },
  lime: { classNormal: "bg-lime-200", classHover: "bg-lime-400" },
  green: { classNormal: "bg-green-200", classHover: "bg-green-400" },
  emerald: { classNormal: "bg-emerald-200", classHover: "bg-emerald-400" },
  teal: { classNormal: "bg-teal-200", classHover: "bg-teal-400" },
  sky: { classNormal: "bg-sky-200", classHover: "bg-sky-400" },
  blue: { classNormal: "bg-blue-200", classHover: "bg-blue-400" },
  indigo: { classNormal: "bg-indigo-200", classHover: "bg-indigo-400" },
  violet: { classNormal: "bg-violet-200", classHover: "bg-violet-400" },
  fuchsia: { classNormal: "bg-fuchsia-200", classHover: "bg-fuchsia-400" },
  pink: { classNormal: "bg-pink-200", classHover: "bg-pink-400" },
  rose: { classNormal: "bg-rose-200", classHover: "bg-rose-400" },
};

export const getTagColorClassesFromColor = (color) => {
  // returns the normal class and the hover highlight Tailwind class
  // name for any given text color value.

  // check that parameter color exists in the tailwind colors
  // array.  If not, return a default color.
  if (color in tailwindColors) {
    return {
      classNormal: tailwindColors[color].classNormal,
      classHover: tailwindColors[color].classHover,
    };
  } else {
    return {
      classNormal: "bg-slate-100",
      classHover: "bg-slate-300",
    };
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

  return { id: "", tag: "No tag", color: "slate" };
};
