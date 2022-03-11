namespace TreeView {
  type Node = {
    id: React.Key;
    name: string;
    children: Node[];
  };

  type FlatNode = {
    id: React.Key;
    name: string;
    depth: number;
    parentId: React.Key | null;
    hasChildren: boolean;
  };

  type State = {
    node: Node;
    sourceNode: Node | null;
    sourceParentNode: Node | null;
  };

  type Dispatch = (action: TreeView.Actions) => void;

  type Actions =
    | Action.DragStart
    | Action.DragEnd
    | Action.DropToNode
    | Action.DropToSpacer;

  namespace Action {
    type DragStart = {
      type: "DRAG_START";
      payload: {
        sourceNode: Node;
        sourceParentNode: Node;
      };
    };

    type DragEnd = {
      type: "DRAG_END";
    };

    type DropToNode = {
      type: "DROP_TO_NODE";
      payload: {
        targetNode: Node;
      };
    };

    type DropToSpacer = {
      type: "DROP_TO_SPACER";
      payload: {
        targetIndex: number;
        targetParentNode: Node;
      };
    };
  }
}
