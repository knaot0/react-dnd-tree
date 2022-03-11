export function dropToSpacer(
  prevState: TreeView.State,
  payload: TreeView.Action.DropToSpacer["payload"]
): TreeView.State {
  if (!isNonNullableState(prevState)) return prevState;

  const { sourceParentNode } = prevState;
  const { targetParentNode } = payload;

  // MARK: 親ノードが同じ場合
  if (sourceParentNode.id === targetParentNode.id) {
    return replaceNodes(prevState, payload);
  }

  // MARK: 親ノードが異なる場合
  return insertNode(prevState, payload);
}

/**
 * ステートのNullガード
 */
function isNonNullableState(
  state: TreeView.State
): state is NonNullableObj<TreeView.State> {
  return Object.values(state).every(Boolean);
}

/**
 * ノードを入れ替える
 */
function replaceNodes(
  prevState: NonNullableObj<TreeView.State>,
  payload: TreeView.Action.DropToSpacer["payload"]
): TreeView.State {
  const { sourceNode, sourceParentNode } = prevState;
  const { targetIndex, targetParentNode } = payload;

  const sourceIndex = sourceParentNode.children.findIndex(
    (x) => x.id === sourceNode.id
  );

  replaceArrayElements(targetParentNode.children, sourceIndex, targetIndex);

  return { ...prevState };
}

/**
 * ブランチにノードを追加
 */
function insertNode(
  prevState: NonNullableObj<TreeView.State>,
  payload: TreeView.Action.DropToSpacer["payload"]
): TreeView.State {
  const { sourceNode, sourceParentNode } = prevState;
  const { targetIndex, targetParentNode } = payload;

  // NOTE: ターゲット配下の特定のインデックスにノードを追加
  targetParentNode.children.splice(targetIndex, 0, sourceNode);

  // NOTE: ドラッグ中のノードを切り離す
  sourceParentNode.children = sourceParentNode.children.filter(
    (x) => x.id !== sourceNode.id
  );

  return { ...prevState };
}

/**
 * 配列の要素を入れ替える
 */
function replaceArrayElements<T>(
  array: T[],
  sourceIndex: number,
  targetIndex: number
): void {
  if (targetIndex <= sourceIndex) {
    array.splice(targetIndex, 0, array[sourceIndex]);
    array.splice(sourceIndex + 1, 1);
  } else {
    array.splice(targetIndex, 0, array[sourceIndex]);
    array.splice(sourceIndex, 1);
  }
}
