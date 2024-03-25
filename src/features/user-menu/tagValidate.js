export const tagValidate = (tagInput, tags) => {
  const tag = tagInput.trim().toLowerCase();
  if (!tag) {
    return { error: "Empty tag!" };
  }

  if (!new RegExp("^[a-zA-Z]+$").test(tag)) {
    return { error: "Only letters A-Z or a-z allowed" };
  }

  if (tags.find((_tag) => _tag.tag === tag)) {
    return { error: "Tag already exists" };
  }

  if (tag.length < 3) {
    return { error: "Tag too short: min 3 letters" };
  }

  if (tag.length > 10) {
    return { error: "Tag too long: max 10 letters" };
  }

  return {
    tag,
    error: null,
  };
};
