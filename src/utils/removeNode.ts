/**
 * ドラッグ中のノードを切り離す
 */
export const removeNode =
  (childNodeId: React.Key) =>
  (node: TreeView.Node): TreeView.Node => {
    return {
      ...node,
      children: node.children
        .filter((childNode) => childNode.id !== childNodeId)
        .map(removeNode(childNodeId)),
    };
  };
