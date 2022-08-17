import type * as Types from "../reducers/TreeView/types";
import { useReducer } from "react";
import { treeViewReducer as reducer } from "../reducers/TreeView";

const initializer = (initializerArg: Types.TreeNode): Types.State => {
  return { node: initializerArg, sourceNode: null, sourceParentNode: null };
};

export const useTreeViewReducer = (initializerArg: Types.TreeNode) => {
  return useReducer(reducer, initializerArg, initializer);
};
