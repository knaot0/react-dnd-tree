import type * as Types from "../reducers/TreeView/types";
import { TreeItem } from "./TreeItem";
import { TreeSpacer } from "./TreeSpacer";
import { useTreeViewReducer } from "../hooks/useTreeViewReducer";
import { TreeViewStateContext } from "../contexts/TreeViewStateContext";
import { TreeViewDispatchContext } from "../contexts/TreeViewDispatchContext";

export type TreeViewProps = {
  initialNode: Types.TreeNode;
};

export const TreeView: React.FC<TreeViewProps> = ({ initialNode }) => {
  const [state, dispatch] = useTreeViewReducer(initialNode);

  return (
    <>
      <div style={{ padding: 20, fontSize: 20 }}>
        <TreeViewDispatchContext.Provider value={dispatch}>
          <TreeViewStateContext.Provider value={state}>
            {state.node.children.map((childNode, index) => (
              <TreeItem
                key={childNode.id}
                node={childNode}
                index={index}
                parentNode={state.node}
              />
            ))}
            <TreeSpacer
              index={state.node.children.length}
              parentNode={state.node}
            />
          </TreeViewStateContext.Provider>
        </TreeViewDispatchContext.Provider>
      </div>
    </>
  );
};
