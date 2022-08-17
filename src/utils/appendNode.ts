import type * as Types from "../reducers/TreeView/types";

/**
 * ターゲット配下にノードを追加
 */
export const appendNode =
  (parentNodeId: React.Key, newNode: Types.TreeNode) =>
  (node: Types.TreeNode): Types.TreeNode => {
    const newChildren = node.children.map(appendNode(parentNodeId, newNode));

    return {
      ...node,
      children:
        node.id === parentNodeId ? [...newChildren, newNode] : newChildren,
    };
  };
