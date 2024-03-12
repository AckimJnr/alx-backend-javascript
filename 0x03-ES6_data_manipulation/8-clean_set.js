function cleanSet(set, startString) {
  if (!startString) {
    return ''; // Return an empty string if startString is empty
  }

  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}

export default cleanSet;
