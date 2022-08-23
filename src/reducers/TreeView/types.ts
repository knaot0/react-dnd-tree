export type TreeNode = {
  id: React.Key;
  name: string;
  children: TreeNode[];
};

export type State = {
  node: TreeNode;
  sourceNode: TreeNode | null;
  sourceParentNode: TreeNode | null;
};

export type Dispatch = (action: Actions) => void;

export type Actions =
  | Action.DragStart
  | Action.DragEnd
  | Action.DropToNode
  | Action.DropToSpacer
  | Action.AddNode;

export namespace Action {
  export type DragStart = {
    type: "DRAG_START";
    payload: {
      sourceNode: TreeNode;
      sourceParentNode: TreeNode;
    };
  };

  export type DragEnd = {
    type: "DRAG_END";
  };

  export type DropToNode = {
    type: "DROP_TO_NODE";
    payload: {
      targetNode: TreeNode;
    };
  };

  export type DropToSpacer = {
    type: "DROP_TO_SPACER";
    payload: {
      targetIndex: number;
      targetParentNode: TreeNode;
    };
  };

  export type AddNode = {
    type: "ADD_NODE";
    payload: {
      targetNode: TreeNode;
    };
  };
}
