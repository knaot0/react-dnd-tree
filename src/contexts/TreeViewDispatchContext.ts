import type * as Types from "../reducers/TreeView/types";
import { createContext } from "react";

export type TreeViewDispatchContextValue = Types.Dispatch | null;

export const TreeViewDispatchContext =
  createContext<TreeViewDispatchContextValue>(null);
