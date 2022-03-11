type NonNullableObj<T> = {
  [P in keyof T]: Exclude<T[P], null>;
};
