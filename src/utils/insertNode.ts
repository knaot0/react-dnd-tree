import type * as Types from "../reducers/TreeView/types";
import { insert } from "./insert";

type InsertNodeArgs = {
  parentNodeId: React.Key;
  sourceNode: Types.TreeNode;
  targetIndex: number;
};

/**
 * ブランチにノードを追加
 */
export const insertNode =
  ({ parentNodeId, sourceNode, targetIndex }: InsertNodeArgs) =>
  (node: Types.TreeNode): Types.TreeNode => {
    const newChildren = node.children.map(
      insertNode({ parentNodeId, sourceNode, targetIndex })
    );

    return {
      ...node,
      children:
        node.id === parentNodeId
          ? insert(newChildren, targetIndex, sourceNode)
          : newChildren,
    };
  };
