export function dropToNode(
  prevState: TreeView.State,
  payload: TreeView.Action.DropToNode["payload"]
): TreeView.State {
  const { sourceNode, sourceParentNode } = prevState;
  if (!sourceNode || !sourceParentNode) return prevState;

  // NOTE: ドラッグ中とターゲットが同じノードの場合、後続の処理を行わない
  const { targetNode } = payload;
  if (sourceNode.id === targetNode.id) return prevState;

  // NOTE: ドラッグ中のノードを切り離す
  sourceParentNode.children = sourceParentNode.children.filter(
    (x) => x.id !== sourceNode.id
  );

  // NOTE: ターゲット配下にノードを追加
  targetNode.children.push(sourceNode);

  return { ...prevState };
}
