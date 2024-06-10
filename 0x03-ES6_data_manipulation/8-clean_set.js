function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set)) {
    throw new Error('Invalid input. Please provide a non-empty startString and a Set.');
  }

  const cleanedValues = Array.from(set)
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length));

  return cleanedValues.join('-');
}

export default cleanSet;
