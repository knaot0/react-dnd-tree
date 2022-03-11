import { useState } from "react";
import { useTreeViewDispatchContext } from "../hooks/useTreeViewDispatchContext";

type TreeSpacerProps = {
  index: number;
  parentNode: TreeView.Node;
};

export const TreeSpacer: React.VFC<TreeSpacerProps> = ({
  index,
  parentNode,
}) => {
  const dispatch = useTreeViewDispatchContext();
  const [isDragOver, setIsDragOver] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // NOTE: 親のブランチのアコーディオンの開閉を防ぐ
    e.stopPropagation();
  };

  const handleDragOver: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // NOTE: ドロップ可能判定させる
    e.preventDefault();

    // NOTE: 親のブランチのドラッグオーバーイベントを発火させないようにする
    e.stopPropagation();

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

    dispatch({
      type: "DROP_TO_SPACER",
      payload: { targetIndex: index, targetParentNode: parentNode },
    });
  };

  return (
    <div
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{ height: 10, background: isDragOver ? "yellow" : "none" }}
    />
  );
};
