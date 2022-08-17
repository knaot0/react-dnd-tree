import { pipe } from "ramda";
import { appendNode } from "../../utils/appendNode";
import { removeNode } from "../../utils/removeNode";

export const dropToNode = (
  prevState: TreeView.State,
  payload: TreeView.Action.DropToNode["payload"]
): TreeView.State => {
  const { sourceNode, sourceParentNode } = prevState;
  if (!sourceNode || !sourceParentNode) return prevState;

  // NOTE: ドラッグ中とターゲットが同じノードの場合、後続の処理を行わない
  const { targetNode } = payload;
  if (sourceNode.id === targetNode.id) return prevState;

  return {
    ...prevState,
    node: pipe(
      removeNode(sourceNode.id),
      appendNode(targetNode.id, sourceNode)
    )(prevState.node),
  };
};
