// A graph can be represented using an adjacency list
export type AdjacencyList<T> = Map<T, T[]>;

// A graph can be represented using an adjacency matrix
export type AdjacencyMatrix = number[][];

// A graph can be represented Nodes and Edges
export interface Node<T> {
    value: T;
    edges: Edge<T>[];
}

export interface Edge<T> {
    node: Node<T>;
    weight?: number;
}
