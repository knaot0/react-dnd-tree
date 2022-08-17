import { replaceNodes } from "../../utils/replaceNodes";

export const dropToSpacer = (
  prevState: TreeView.State,
  payload: TreeView.Action.DropToSpacer["payload"]
): TreeView.State => {
  if (!isNonNullableState(prevState)) return prevState;

  const { sourceNode, sourceParentNode } = prevState;
  const { targetIndex, targetParentNode } = payload;

  // MARK: 親ノードが同じ場合
  if (sourceParentNode.id === targetParentNode.id) {
    const sourceIndex = sourceParentNode.children.findIndex(
      (x) => x.id === sourceNode.id
    );

    return {
      ...prevState,
      node: replaceNodes({
        parentNodeId: targetParentNode.id,
        sourceIndex: sourceIndex,
        targetIndex,
      })(prevState.node),
    };
  }

  // MARK: 親ノードが異なる場合
  return insertNode(prevState, payload);
};

/**
 * ステートのNullガード
 */
function isNonNullableState(
  state: TreeView.State
): state is NonNullableObj<TreeView.State> {
  return Object.values(state).every(Boolean);
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
