import { useContext } from "react";
import { TreeViewStateContext } from "../contexts/TreeViewStateContext";

export const useTreeViewStateContext = (): TreeView.State => {
  const context = useContext(TreeViewStateContext);

  if (context === null) {
    throw new TypeError("context equals null");
  }

  return context;
};
