import type * as Types from "./types";
import type { Reducer } from "react";
import { dragStart } from "./dragStart";
import { dragEnd } from "./dragEnd";
import { dropToNode } from "./dropToNode";
import { dropToSpacer } from "./dropToSpacer";
import { addNode } from "./addNode";

export const treeViewReducer: Reducer<Types.State, Types.Actions> = (
  prevState,
  action
): Types.State => {
  console.debug("action", action);

  switch (action.type) {
    case "DRAG_START":
      return dragStart(prevState, action.payload);
    case "DRAG_END":
      return dragEnd(prevState);
    case "DROP_TO_NODE":
      return dropToNode(prevState, action.payload);
    case "DROP_TO_SPACER":
      return dropToSpacer(prevState, action.payload);
    case "ADD_NODE":
      return addNode(prevState, action.payload);
  }
};
