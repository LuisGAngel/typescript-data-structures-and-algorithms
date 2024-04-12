export interface TreeNodeString {
    value: string;
    left: TreeNodeString | null;
    right: TreeNodeString | null;
}

export interface TreeNodeNumber {
    value: number;
    left: TreeNodeNumber | null;
    right: TreeNodeNumber | null;
}
