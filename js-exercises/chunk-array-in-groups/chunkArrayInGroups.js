function chunkArrayInGroups(array, chunkSize) {
  const chunkArray = [];
  while (array.length) {
    chunkArray.push(array.splice(0, chunkSize));
  }

  return chunkArray;
}

export { chunkArrayInGroups };
