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

  // NOTE: ターゲット配下の特定のインデックスにノードを追加
  targetNode.children.splice(0, 0, newNode);

  return { ...prevState, sourceNode: null, sourceParentNode: null };
}
