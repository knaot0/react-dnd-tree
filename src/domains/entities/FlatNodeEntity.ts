import React from "react";

export class FlatNodeEntity {
  readonly id: React.Key;
  readonly name: string;
  readonly depth: number;
  readonly parentId: React.Key | null;
  readonly hasChildren: boolean;

  constructor(data: TreeView.FlatNode) {
    this.id = data.id;
    this.name = data.name;
    this.depth = data.depth;
    this.parentId = data.parentId;
    this.hasChildren = data.hasChildren;
  }

  eq(otherId: React.Key) {
    return this.id === otherId;
  }

  neq(otherId: React.Key) {
    return !this.eq(otherId);
  }
}
