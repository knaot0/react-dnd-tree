import { useContext } from "react";
import { TreeViewDispatchContext } from "../contexts/TreeViewDispatchContext";

export const useTreeViewDispatchContext = (): TreeView.Dispatch => {
  const context = useContext(TreeViewDispatchContext);

  if (context === null) {
    throw new TypeError("context equals null");
  }

  return context;
};
