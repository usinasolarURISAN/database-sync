/**
 * Return all data from `newData` that does not exists on `oldData`.
 * @param oldData
 * @param newData
 * @returns
 */
export const getDiffNewDataArray = (oldData = [], newData = []) => {
  const diffData = [];
  var registerAlreadyExists = false;

  if (oldData.length === 0) {
    return newData;
  }

  for (let index = 0; index < newData.length; index++) {
    const currentNewData = newData[index];
    registerAlreadyExists = false;

    for (let index1 = 0; index1 < oldData.length; index1++) {
      const currentOldData = oldData[index1];

      if (currentOldData.id === currentNewData.id) {
        registerAlreadyExists = true;
      }
    }

    if (!registerAlreadyExists) {
      diffData.push(currentNewData);
    }
  }

  console.log(`[DIFF] - Found ${diffData.length} new registers`);

  return diffData;
};
