import type * as Types from "./types";
import { pipe } from "ramda";
import { insertNode } from "../../utils/insertNode";
import { removeNode } from "../../utils/removeNode";
import { replaceNodes } from "../../utils/replaceNodes";

export const dropToSpacer = (
  prevState: Types.State,
  payload: Types.Action.DropToSpacer["payload"]
): Types.State => {
  if (!prevState.sourceParentNode || !prevState.sourceNode) return prevState;

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
        sourceIndex,
        targetIndex,
      })(prevState.node),
    };
  }

  // MARK: 親ノードが異なる場合
  return {
    ...prevState,
    node: pipe(
      removeNode(sourceNode.id),
      insertNode({
        parentNodeId: targetParentNode.id,
        sourceNode,
        targetIndex,
      })
    )(prevState.node),
  };
};
