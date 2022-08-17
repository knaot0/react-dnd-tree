/**
 * ターゲット配下にノードを追加
 */
export const appendNode =
  (parentNodeId: React.Key, newNode: TreeView.Node) =>
  (node: TreeView.Node): TreeView.Node => {
    const newChildren = node.children.map(appendNode(parentNodeId, newNode));

    return {
      ...node,
      children:
        node.id === parentNodeId ? [...newChildren, newNode] : newChildren,
    };
  };
