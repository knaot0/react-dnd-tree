import type * as Types from "../reducers/TreeView/types";
import { createContext } from "react";

export type TreeViewStateContextValue = Types.State | null;

export const TreeViewStateContext =
  createContext<TreeViewStateContextValue>(null);
