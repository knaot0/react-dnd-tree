/**
 * 必要条件
 * 1. 順番を入れ替えられる
 * 2. 枝を開閉できる
 */

import { TreeView } from "./components/TreeView";

const node: TreeView.Node = {
  id: 0,
  name: "商材種別",
  children: [
    {
      id: 1,
      name: "ブランド品",
      children: [
        {
          id: 2,
          name: "バッグ",
          children: [
            {
              id: 3,
              name: "トートバッグ",
              children: [],
            },
            {
              id: 4,
              name: "ショルダーバッグ",
              children: [],
            },
            {
              id: 5,
              name: "ハンドバッグ",
              children: [],
            },
          ],
        },
        {
          id: 6,
          name: "帽子",
          children: [
            {
              id: 7,
              name: "キャップ",
              children: [],
            },
            {
              id: 8,
              name: "ハット",
              children: [],
            },
            {
              id: 9,
              name: "ニット帽",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: "貴金属",
      children: [
        {
          id: 11,
          name: "リング",
          children: [],
        },
        {
          id: 12,
          name: "ネックレス",
          children: [],
        },
        {
          id: 13,
          name: "コイン",
          children: [],
        },
      ],
    },
  ],
};

function App() {
  return <TreeView testMode initialNode={node} />;
}

export default App;
