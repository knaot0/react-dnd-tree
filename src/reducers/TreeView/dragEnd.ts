import type * as Types from "./types";

export function dragEnd(prevState: Types.State): Types.State {
  return { ...prevState, sourceNode: null, sourceParentNode: null };
}
