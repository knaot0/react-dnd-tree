import type * as Types from "./types";

export function dragStart(
  prevState: Types.State,
  payload: Types.Action.DragStart["payload"]
): Types.State {
  return {
    ...prevState,
    sourceNode: payload.sourceNode,
    sourceParentNode: payload.sourceParentNode,
  };
}
