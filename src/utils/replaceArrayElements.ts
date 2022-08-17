/**
 * 配列の要素を入れ替える
 */
export const replaceArrayElements = <T>(
  /** 配列 */
  array: T[],
  /** 移動元のindex */
  sourceIndex: number,
  /** 移動先スペーサーのindex */
  spacerIndex: number
): T[] => {
  const newArray = [...array];

  if (spacerIndex <= sourceIndex) {
    newArray.splice(spacerIndex, 0, newArray[sourceIndex]);
    newArray.splice(sourceIndex + 1, 1);
  } else {
    newArray.splice(spacerIndex, 0, newArray[sourceIndex]);
    newArray.splice(sourceIndex, 1);
  }

  return newArray;
};
