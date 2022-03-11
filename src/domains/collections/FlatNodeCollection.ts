import { FlatNodeEntity } from "../entities/FlatNodeEntity";
import { NodeEntity } from "../entities/NodeEntity";

export class FlatNodeCollection {
  private readonly flatNodes: FlatNodeEntity[];

  constructor(flatNodes: FlatNodeEntity[] = []) {
    this.flatNodes = flatNodes;
  }

  remove(id: React.Key) {
    return new FlatNodeCollection(this.flatNodes.filter((x) => x.neq(id)));
  }

  toArray(): FlatNodeEntity[] {
    return [...this.flatNodes];
  }

  toNode(depth: number = 0): TreeView.Node | null {
    const flatNode = this.flatNodes.find((x) => x.depth === 0);
    if (!flatNode) return null;

    return {
      id: flatNode.id,
      name: flatNode.name,
      children: this.toNodes(1, flatNode.id),
    };
  }

  private toNodes(depth: number, parentId: React.Key | null): TreeView.Node[] {
    return this.flatNodes
      .filter((x) => x.depth === depth && x.parentId === parentId)
      .map((x) => ({
        id: x.id,
        name: x.name,
        children: this.toNodes(depth + 1, x.id),
      }));
  }
}
