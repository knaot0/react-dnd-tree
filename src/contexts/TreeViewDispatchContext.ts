import { createContext } from "react";

export type TreeViewDispatchContextValue = TreeView.Dispatch | null;

export const TreeViewDispatchContext =
  createContext<TreeViewDispatchContextValue>(null);
