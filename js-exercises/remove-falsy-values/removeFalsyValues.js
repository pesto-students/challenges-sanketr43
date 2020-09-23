function removeFalsyValues(array) {
  if (!Array.isArray(array)) {
    return false;
  }
  return array.filter(Boolean);
}

export { removeFalsyValues };
