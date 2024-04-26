import { AdjacencyList } from "./types.js";

export function createAdjacencyList<T>(edges: Array<[T, T[]]>): AdjacencyList<T> {
    return new Map(edges);
}

// 0 -- 2   3 -- 5
//  \  / \ /
//   1    4 ---- 6
// BFS(3): 3, 4, 5, 2, 6, 0, 1
export function breadthFirstSearch<T>(adjacencyList: AdjacencyList<T>, initialNode: T): T[] {
    if (adjacencyList.size === 0) return [];
    if (!adjacencyList.get(initialNode)) return [];

    const queue = [initialNode];
    const visited = new Set<T>([initialNode]);

    while (queue.length > 0) {
        // Assert T, queue.shift() can not be undefined given queue.length > 0
        const value = queue.shift() as T;
        // Assert T[], adjacencyList.get(value) can not be undefined given that value
        // always comes from the queue
        const neighbors = adjacencyList.get(value) as T[];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return Array.from(visited);
}

// 0 -- 2   3 -- 5
//  \  / \ /
//   1    4 ---- 6
// DFS(3): 3, 4, 2, 0, 1, 6, 5
export function depthFirstSearch<T>(adjacencyList: AdjacencyList<T>, initialNode: T): T[] {
    if (adjacencyList.size === 0) return [];
    if (!adjacencyList.get(initialNode)) return [];

    const stack = [initialNode]; // 4, 5
    const visited = new Set<T>([initialNode]); // 3

    while (stack.length > 0) {
        // Assert T, queue.shift() can not be undefined given queue.length > 0
        const value = stack.pop() as T;
        // Assert T[], adjacencyList.get(value) can not be undefined given that value
        // always comes from the queue
        const neighbors = adjacencyList.get(value) as T[];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
    }

    return Array.from(visited);
}

export function findShortestPath<T>(adjacencyList: AdjacencyList<T>, start: T, end: T): T[] {
    if (adjacencyList.size === 0) {
        return [];
    }

    const queue = [start];
    const visited = new Set<T>([start]);
    // Map contains a node in the key and the previous node in the value from the traversal of the
    // graph
    const previous = new Map<T, T>();

    // Breadth first search
    while (queue.length > 0) {
        const value = queue.shift() as T;

        for (const neighbor of adjacencyList.get(value) as T[]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                // Populate the previous node
                previous.set(neighbor, value);
            }
        }
    }

    return reconstructPath(previous, start, end);
}

function reconstructPath<T>(previous: Map<T, T>, start: T, end: T): T[] {
    const path: T[] = [end];
    let current: T = end;
    let validPathExists = true;
    while (current !== start && validPathExists) {
        const previousOrUndefined = previous.get(current);
        if (previousOrUndefined !== undefined) {
            path.push(previousOrUndefined);
            current = previousOrUndefined;
        } else {
            validPathExists = false;
        }
    }

    return validPathExists ? path.reverse() : [];
}
