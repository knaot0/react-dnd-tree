import { FlatNodeEntity } from "../entities/FlatNodeEntity";
import { NodeEntity } from "../entities/NodeEntity";

type ToFlatNodesArgs = {
  depth: number;
  parentId: React.Key;
};

export class NodeCollection {
  private readonly nodes: NodeEntity[];

  constructor(nodes: NodeEntity[] = []) {
    this.nodes = nodes;
  }

  toFlatNodes({ depth, parentId }: ToFlatNodesArgs): FlatNodeEntity[] {
    return this.nodes.flatMap((x) =>
      x.toFlatNodeCollection({ depth, parentId }).toArray()
    );
  }

  toArray(): NodeEntity[] {
    return [...this.nodes];
  }

  get isPresent(): boolean {
    return this.nodes.length > 0;
  }
}
