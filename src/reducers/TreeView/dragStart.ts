export function dragStart(
  prevState: TreeView.State,
  payload: TreeView.Action.DragStart["payload"]
): TreeView.State {
  return {
    ...prevState,
    sourceNode: payload.sourceNode,
    sourceParentNode: payload.sourceParentNode,
  };
}
