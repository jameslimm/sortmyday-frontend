const tailwindColors = {
  slate: { classNormal: "bg-slate-100", classHover: "bg-slate-300" },
  red: { classNormal: "bg-red-100", classHover: "bg-red-300" },
  orange: { classNormal: "bg-orange-100", classHover: "bg-orange-300" },
  amber: { classNormal: "bg-amber-100", classHover: "bg-amber-300" },
  yellow: { classNormal: "bg-yellow-100", classHover: "bg-yellow-300" },
  lime: { classNormal: "bg-lime-100", classHover: "bg-lime-300" },
  green: { classNormal: "bg-green-100", classHover: "bg-green-300" },
  emerald: { classNormal: "bg-emerald-100", classHover: "bg-emerald-300" },
  teal: { classNormal: "bg-teal-100", classHover: "bg-teal-300" },
  sky: { classNormal: "bg-sky-100", classHover: "bg-sky-300" },
  blue: { classNormal: "bg-blue-100", classHover: "bg-blue-300" },
  indigo: { classNormal: "bg-indigo-100", classHover: "bg-indigo-300" },
  violet: { classNormal: "bg-violet-100", classHover: "bg-violet-300" },
  fuchsia: { classNormal: "bg-fuchsia-100", classHover: "bg-fuchsia-300" },
  pink: { classNormal: "bg-pink-100", classHover: "bg-pink-300" },
  rose: { classNormal: "bg-rose-100", classHover: "bg-rose-300" },
};

export const getTagColorClassesFromColor = (color) => {
  // returns the normal class and the hover highlight Tailwind class
  // name for any given text color value.

  return {
    classNormal: tailwindColors[color].classNormal,
    classHover: tailwindColors[color].classHover,
  };
};

export const getRandomTagColor = () => {
  // returns a random color for a new tag
  const colKeys = Object.keys(tailwindColors);
  return colKeys[Math.floor(Math.random() * colKeys.length)];
};

export const getTagIdFromTag = (tag) => {
  // create a simple randomised string ID for a given tag name.
  const tagIdString = tag.length >= 3 ? tag.substring(0, 3).toLowerCase() : tag.toLowerCase();
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
