/**
 * 非破壊のinsert
 */
export const insert = <T>(array: T[], index: number, ...newItems: T[]) => [
  ...array.slice(0, index),
  ...newItems,
  ...array.slice(index),
];
