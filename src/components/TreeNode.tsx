import { useState } from "react";
import { useTreeViewDispatchContext } from "../hooks/useTreeViewDispatchContext";

type TreeNodeProps = {
  node: TreeView.Node;
  parentNode: TreeView.Node;
};

export const TreeNode: React.FC<TreeNodeProps> = ({ node, parentNode }) => {
  const dispatch = useTreeViewDispatchContext();
  const [isDragOver, setIsDragOver] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // NOTE: 親のブランチのアコーディオンの開閉を防ぐ
    e.stopPropagation();
  };

  const handleDragOver: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // NOTE: 親のブランチのドラッグオーバーイベントを発火させないようにする
    e.stopPropagation();

    // NOTE: ドロップ可能判定させる
    e.preventDefault();

    setIsDragOver(true);
  };

  const handleDragLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // NOTE: 親のブランチのドラッグリーブイベントを発火させないようにする
    e.stopPropagation();

    setIsDragOver(false);
  };

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    // NOTE: 親のブランチのドロップイベントを発火させないようにする
    e.stopPropagation();

    setIsDragOver(false);

    dispatch({ type: "DROP_TO_NODE", payload: { targetNode: node } });
  };

  const handleDragEnd: React.DragEventHandler<HTMLDivElement> = (e) => {
    // NOTE: 親のブランチのドラッグ終了イベントを発火させないようにする
    e.stopPropagation();

    dispatch({ type: "DRAG_END" });
  };

  const handleDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
    // NOTE: 親のブランチのドラッグ開始イベントを発火させないようにする
    e.stopPropagation();

    dispatch({
      type: "DRAG_START",
      payload: { sourceNode: node, sourceParentNode: parentNode },
    });
  };

  return (
    <div
      draggable
      onClick={handleClick}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragStart={handleDragStart}
      style={{
        cursor: "pointer",
        background: isDragOver ? "lightgreen" : "none",
      }}
    >
      📄 {node.name}
    </div>
  );
};
