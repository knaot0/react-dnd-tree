export function dragEnd(prevState: TreeView.State): TreeView.State {
  return { ...prevState, sourceNode: null, sourceParentNode: null };
}
