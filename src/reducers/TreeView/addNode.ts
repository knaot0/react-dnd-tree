import { insertNode } from "../../utils/insertNode";
import type * as Types from "./types";

export function addNode(
  prevState: Types.State,
  payload: Types.Action.AddNode["payload"]
): Types.State {
  const { targetNode } = payload;

  // NOTE: id: 14以上の乱数
  const randomId = Math.floor(Math.random() * (1000 - 14) + 14);

  const newNode: Types.TreeNode = {
    id: randomId,
    name: "新規作成",
    children: [],
  };

  return {
    ...prevState,
    node: insertNode({
      parentNodeId: targetNode.id,
      sourceNode: newNode,
      targetIndex: 0,
    })(prevState.node),
  };
}
