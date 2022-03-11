import { createContext } from "react";

export type TreeViewStateContextValue = TreeView.State | null;

export const TreeViewStateContext =
  createContext<TreeViewStateContextValue>(null);
