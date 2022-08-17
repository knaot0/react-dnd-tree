import type * as Types from "./types";
import { pipe } from "ramda";
import { appendNode } from "../../utils/appendNode";
import { removeNode } from "../../utils/removeNode";

export const dropToNode = (
  prevState: Types.State,
  payload: Types.Action.DropToNode["payload"]
): Types.State => {
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
