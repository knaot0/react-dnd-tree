/**
 * 配列の要素を入れ替える
 */
export const replaceArrayElements = <T>(
  array: T[],
  sourceIndex: number,
  targetIndex: number
): T[] => {
  const newArray = [...array];

  if (targetIndex <= sourceIndex) {
    newArray.splice(targetIndex, 0, newArray[sourceIndex]);
    newArray.splice(sourceIndex + 1, 1);
  } else {
    newArray.splice(targetIndex, 0, newArray[sourceIndex]);
    newArray.splice(sourceIndex, 1);
  }

  return newArray;
};
