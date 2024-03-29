import type * as Types from "../reducers/TreeView/types";
import { useState } from "react";
import { useTreeViewDispatchContext } from "../hooks/useTreeViewDispatchContext";
import { TreeItem } from "./TreeItem";
import { TreeSpacer } from "./TreeSpacer";
import { Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type TreeBranchProps = {
  node: Types.TreeNode;
  depth: number;
  parentNode: Types.TreeNode;
};

export const TreeBranch: React.FC<TreeBranchProps> = ({
  node,
  depth,
  parentNode,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const dispatch = useTreeViewDispatchContext();

  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    /**
     * NOTE: preventDefault()を呼ばないと、isOpenが同期されない
     * @see {@link https://github.com/facebook/react/issues/15486#issuecomment-488028431 | <details> open attribute not synchronized #15486}
     */
    e.preventDefault();

    // NOTE: 親のブランチのアコーディオンの開閉を防ぐ
    e.stopPropagation();

    setIsOpen(!isOpen);
  };

  const handleDragOver: React.DragEventHandler<HTMLElement> = (e) => {
    // NOTE: ドロップ可能判定させる
    e.preventDefault();

    // NOTE: 親のブランチのドラッグオーバーイベントを発火させないようにする
    e.stopPropagation();

    setIsOpen(true);
    setIsDragOver(true);
  };

  const handleDragLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop: React.DragEventHandler<HTMLElement> = (e) => {
    // NOTE: 親のブランチのドロップイベントを発火させないようにする
    e.stopPropagation();

    setIsDragOver(false);

    dispatch({ type: "DROP_TO_NODE", payload: { targetNode: node } });
  };

  const handleDragEnd: React.DragEventHandler<HTMLElement> = (e) => {
    // NOTE: 親のブランチのドラッグ終了イベントを発火させないようにする
    e.stopPropagation();

    dispatch({ type: "DRAG_END" });
  };

  const handleDragStart: React.DragEventHandler<HTMLElement> = (e) => {
    // NOTE: 親のブランチのドラッグ開始イベントを発火させないようにする
    e.stopPropagation();

    dispatch({
      type: "DRAG_START",
      payload: { sourceNode: node, sourceParentNode: parentNode },
    });
  };

  const handleAdd = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();

    dispatch({
      type: "ADD_NODE",
      payload: { targetNode: node },
    });

    setIsOpen(true);
  };

  return (
    <details
      draggable
      open={isOpen}
      onClick={handleClick}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDragLeave={handleDragLeave}
      style={{ background: isDragOver ? "lightblue" : "none" }}
    >
      <summary
        style={{
          cursor: "pointer",
          color: "black",
          display: "flex",
          alignItems: "center",
        }}
      >
        <>
          <Typography variant="h6">🗂 {node.name}</Typography>
          <IconButton sx={{ ml: 1 }} onClick={handleAdd}>
            <AddIcon />
          </IconButton>
        </>
      </summary>

      <div style={{ paddingLeft: 20 }}>
        {node.children.map((childNode, index) => (
          <TreeItem
            key={childNode.id}
            node={childNode}
            depth={depth + 1}
            index={index}
            parentNode={node}
          />
        ))}
        <TreeSpacer index={node.children.length} parentNode={node} />
      </div>
    </details>
  );
};
