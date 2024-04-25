import { createAdjacencyList, breadthFirstSearch, depthFirstSearch } from "./methods.js";

export function main(): void {
    // 0 -- 2   3 -- 5
    //  \  / \ /
    //   1    4 ---- 6
    // BFS(3): 3, 4, 5, 2, 6, 0, 1
    // DFS(3): 3, 4, 2, 0, 1, 5, 6
    const adjacencyList = createAdjacencyList([
        [0, [1, 2]],
        [1, [0, 2]],
        [2, [0, 1, 4]],
        [3, [4, 5]],
        [4, [2, 3, 6]],
        [5, [3]],
        [6, [4]],
    ]);
    console.log("breadthFirstSearch(3): ", breadthFirstSearch(adjacencyList, 3).join());
    console.log("breadthFirstSearch(2): ", breadthFirstSearch(adjacencyList, 2).join());
    console.log("depthFirstSearch(3): ", depthFirstSearch(adjacencyList, 3).join());
    console.log("depthFirstSearch(2): ", depthFirstSearch(adjacencyList, 2).join());
}
