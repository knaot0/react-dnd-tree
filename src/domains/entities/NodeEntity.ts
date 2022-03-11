import { FlatNodeCollection } from "../collections/FlatNodeCollection";
import { NodeCollection } from "../collections/NodeCollection";
import { FlatNodeEntity } from "./FlatNodeEntity";

type ToFlatNodeArgs = {
  depth: number;
  parentId: React.Key | null;
};

type ToFlatNodeCollectionArgs = {
  depth: number;
  parentId: React.Key | null;
};

const TO_FLAT_NODE_COLLECTION_DEFAULT_ARGS = {
  depth: 0,
  parentId: null,
} as const;

export class NodeEntity {
  readonly id: React.Key;
  readonly name: string;
  readonly children: NodeCollection;

  constructor(data: TreeView.Node) {
    this.id = data.id;
    this.name = data.name;
    this.children = new NodeCollection(
      data.children.map((x) => new NodeEntity(x))
    );
  }

  eq(otherId: React.Key): boolean {
    return this.id === otherId;
  }

  neq(otherId: React.Key) {
    return !this.eq(otherId);
  }

  toFlatNodeCollection({
    depth,
    parentId,
  }: ToFlatNodeCollectionArgs = TO_FLAT_NODE_COLLECTION_DEFAULT_ARGS): FlatNodeCollection {
    const flatNode = this.toFlatNode({ depth, parentId });
    const flatNodes = this.children.toFlatNodes({
      depth: depth + 1,
      parentId: this.id,
    });

    return new FlatNodeCollection([flatNode, ...flatNodes]);
  }

  private toFlatNode({ depth, parentId }: ToFlatNodeArgs): FlatNodeEntity {
    return new FlatNodeEntity({
      id: this.id,
      name: this.name,
      depth,
      parentId,
      hasChildren: this.hasChildren,
    });
  }

  private get hasChildren(): boolean {
    return this.children.isPresent;
  }
}
