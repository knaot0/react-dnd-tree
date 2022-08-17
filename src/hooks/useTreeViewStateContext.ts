import type * as Types from "../reducers/TreeView/types";
import { useContext } from "react";
import { TreeViewStateContext } from "../contexts/TreeViewStateContext";

export const useTreeViewStateContext = (): Types.State => {
  const context = useContext(TreeViewStateContext);

  if (context === null) {
    throw new TypeError("context equals null");
  }

  return context;
};
