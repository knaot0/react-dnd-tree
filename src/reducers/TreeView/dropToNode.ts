import { pipe } from "ramda";

export function dropToNode(
  prevState: TreeView.State,
  payload: TreeView.Action.DropToNode["payload"]
): TreeView.State {
  const { sourceNode, sourceParentNode } = prevState;
  if (!sourceNode || !sourceParentNode) return prevState;

  // NOTE: ドラッグ中とターゲットが同じノードの場合、後続の処理を行わない
  const { targetNode } = payload;
  if (sourceNode.id === targetNode.id) return prevState;

  return {
    ...prevState,
    node: pipe(
      removeNode(sourceNode.id as number),
      appendNode(targetNode.id as number, sourceNode)
    )(prevState.node),
  };
}

/**
 * ドラッグ中のノードを切り離す
 */
const removeNode =
  (childNodeId: number) =>
  (node: TreeView.Node): TreeView.Node => {
    return {
      ...node,
      children: node.children
        .filter((childNode) => childNode.id !== childNodeId)
        .map(removeNode(childNodeId)),
    };
  };

/**
 * ターゲット配下にノードを追加
 */
const appendNode =
  (parentNodeId: number, newNode: TreeView.Node) =>
  (node: TreeView.Node): TreeView.Node => {
    const newChildren = node.children.map(appendNode(parentNodeId, newNode));

    return {
      ...node,
      children:
        node.id === parentNodeId ? [...newChildren, newNode] : newChildren,
    };
  };
