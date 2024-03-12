function cleanSet(set, startString) {
  let result = '';
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      result += (result === '' ? '' : '-') + item.substring(startString.length);
    }
  });
  return result;
}

export default cleanSet;
