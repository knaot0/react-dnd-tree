import type * as Types from "../reducers/TreeView/types";
import { replaceArrayElements } from "./replaceArrayElements";

type ReplaceNodesArgs = {
  parentNodeId: React.Key;
  sourceIndex: number;
  targetIndex: number;
};

/**
 * ノードを入れ替える
 */
export const replaceNodes =
  ({ parentNodeId, sourceIndex, targetIndex }: ReplaceNodesArgs) =>
  (node: Types.TreeNode): Types.TreeNode => {
    const newChildren = node.children.map(
      replaceNodes({ parentNodeId, sourceIndex, targetIndex })
    );

    return {
      ...node,
      children:
        node.id === parentNodeId
          ? replaceArrayElements(newChildren, sourceIndex, targetIndex)
          : newChildren,
    };
  };
