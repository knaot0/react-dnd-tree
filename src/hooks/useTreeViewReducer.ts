import { useReducer } from "react";
import { treeViewReducer as reducer } from "../reducers/TreeView";

const initializer = (initializerArg: TreeView.Node): TreeView.State => {
  return { node: initializerArg, sourceNode: null, sourceParentNode: null };
};

export const useTreeViewReducer = (initializerArg: TreeView.Node) => {
  return useReducer(reducer, initializerArg, initializer);
};
