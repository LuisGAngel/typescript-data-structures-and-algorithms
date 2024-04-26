// A directed/undirected unweighted graph can be represented using an adjacency list
export type AdjacencyList<T> = Map<T, T[]>;

// A directed/undirected weighted/unweighted graph can be represented using an adjacency matrix but
// the matrix doesn't contain the data that represents. e.g. value property
export type AdjacencyMatrix = number[][];

// A graph can be represented by Nodes and Edges
export interface Node<T> {
    value: T;
    edges: Edge<T>[];
}

export interface Edge<T> {
    node: Node<T>;
    weight?: number;
}
