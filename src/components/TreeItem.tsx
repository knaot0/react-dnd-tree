import { TreeBranch } from "./TreeBranch";
import { TreeNode } from "./TreeNode";
import { TreeSpacer } from "./TreeSpacer";

type TreeItemProps = {
  index: number;
  depth?: number;
  node: TreeView.Node;
  parentNode: TreeView.Node;
};

export const TreeItem: React.FC<TreeItemProps> = ({
  depth = 0,
  node,
  index,
  parentNode,
}) => {
  return (
    <>
      <TreeSpacer index={index} parentNode={parentNode} />
      {node.children.length === 0 ? (
        <TreeNode node={node} parentNode={parentNode} />
      ) : (
        <TreeBranch node={node} depth={depth} parentNode={parentNode} />
      )}
    </>
  );
};
