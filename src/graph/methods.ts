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

export function reconstructPath<T>(previous: Map<T, T>, start: T, end: T): T[] {
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

// This problem demonstrates graph theory on grids. The dungeon problem: The dungeon has a size of R
// x C and you're provided by a point Start and a point Exit. A cell full of rock is indicated by a
// "#" and empty cells respresented by ".". Find the shortest path between the start and the exit
// point.
// Sample dungeon
// [S . . # . . .]
// [. # . . . # .]
// [. # . . . . .]
// [. . # # . . .]
// [# . # E . # .]
// start [0, 0]
// end [4, 3]
export function findShortestPathToExit(
    dungeon: string[][],
    start: [number, number],
    end: [number, number],
): [number, number][] {
    const numberOfRows = dungeon.length;
    const numberOfColumns = dungeon[0].length;
    const maxIndexOfRows = numberOfRows - 1;
    const maxIndexOfColumns = numberOfColumns - 1;
    const minIndexOfRows = 0;
    const minIndexOfColumns = 0;
    const [startRow, startColumn] = start;
    const [endRow, endColumn] = end;

    // Check if start point is out of boundaries
    if (
        startRow < minIndexOfRows ||
        startRow > maxIndexOfRows ||
        startColumn < minIndexOfColumns ||
        startColumn > maxIndexOfColumns
    ) {
        return [];
    }

    // Check if end point is out of boundaries
    if (
        endRow < minIndexOfRows ||
        endRow > maxIndexOfRows ||
        endColumn < minIndexOfColumns ||
        endColumn > maxIndexOfColumns
    ) {
        return [];
    }

    // Check if start or end points are rocks
    if (dungeon[startRow][startColumn] === "#" || dungeon[endRow][endColumn] == "#") {
        return [];
    }

    const queue: [number, number][] = [start];
    const visited: boolean[][] = Array.from({ length: numberOfRows }, () =>
        Array.from({ length: numberOfColumns }, () => false),
    );
    visited[startRow][startColumn] = true;
    const previous: ([number, number] | undefined)[][] = Array.from({ length: numberOfRows }, () =>
        Array.from({ length: numberOfColumns }, () => undefined),
    );

    while (queue.length > 0) {
        const [currentRow, currentColumn] = queue.shift() as [number, number];

        // Check north
        if (
            currentRow - 1 >= minIndexOfRows &&
            currentRow - 1 <= maxIndexOfRows &&
            currentColumn >= minIndexOfColumns &&
            currentColumn <= maxIndexOfColumns &&
            dungeon[currentRow - 1][currentColumn] === "." &&
            visited[currentRow - 1][currentColumn] === false
        ) {
            visited[currentRow - 1][currentColumn] = true;
            queue.push([currentRow - 1, currentColumn]);
            previous[currentRow - 1][currentColumn] = [currentRow, currentColumn];
        }
        // Check east
        if (
            currentRow >= minIndexOfRows &&
            currentRow <= maxIndexOfRows &&
            currentColumn + 1 >= minIndexOfColumns &&
            currentColumn + 1 <= maxIndexOfColumns &&
            dungeon[currentRow][currentColumn + 1] === "." &&
            visited[currentRow][currentColumn + 1] === false
        ) {
            visited[currentRow][currentColumn + 1] = true;
            queue.push([currentRow, currentColumn + 1]);
            previous[currentRow][currentColumn + 1] = [currentRow, currentColumn];
        }
        // Check south
        if (
            currentRow + 1 >= minIndexOfRows &&
            currentRow + 1 <= maxIndexOfRows &&
            currentColumn >= minIndexOfColumns &&
            currentColumn <= maxIndexOfColumns &&
            dungeon[currentRow + 1][currentColumn] === "." &&
            visited[currentRow + 1][currentColumn] === false
        ) {
            visited[currentRow + 1][currentColumn] = true;
            queue.push([currentRow + 1, currentColumn]);
            previous[currentRow + 1][currentColumn] = [currentRow, currentColumn];
        }
        // Check west
        if (
            currentRow >= minIndexOfRows &&
            currentRow <= maxIndexOfRows &&
            currentColumn - 1 >= minIndexOfColumns &&
            currentColumn - 1 <= maxIndexOfColumns &&
            dungeon[currentRow][currentColumn - 1] === "." &&
            visited[currentRow][currentColumn - 1] === false
        ) {
            visited[currentRow][currentColumn - 1] = true;
            queue.push([currentRow, currentColumn - 1]);
            previous[currentRow][currentColumn - 1] = [currentRow, currentColumn];
        }
    }

    // Reconstruct path if exists
    const path: [number, number][] = [[endRow, endColumn]];
    let currentRow = endRow;
    let currentColumn = endColumn;
    let validPathExists = true;
    while ((currentRow !== startRow || currentColumn !== startColumn) && validPathExists) {
        const previousOrUndefined = previous[currentRow][currentColumn];
        if (previousOrUndefined !== undefined) {
            const [previousRow, previousColumn] = previousOrUndefined;
            path.push([previousRow, previousColumn]);
            currentRow = previousRow;
            currentColumn = previousColumn;
        } else {
            validPathExists = false;
        }
    }

    return validPathExists ? path.reverse() : [];
}
