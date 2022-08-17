import { insert } from "./insert";

type InsertNodeArgs = {
  parentNodeId: React.Key;
  sourceNode: TreeView.Node;
  targetIndex: number;
};

/**
 * ブランチにノードを追加
 */
export const insertNode =
  ({ parentNodeId, sourceNode, targetIndex }: InsertNodeArgs) =>
  (node: TreeView.Node): TreeView.Node => {
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
