import type * as Types from "../reducers/TreeView/types";

/**
 * ドラッグ中のノードを切り離す
 */
export const removeNode =
  (childNodeId: React.Key) =>
  (node: Types.TreeNode): Types.TreeNode => {
    return {
      ...node,
      children: node.children
        .filter((childNode) => childNode.id !== childNodeId)
        .map(removeNode(childNodeId)),
    };
  };
