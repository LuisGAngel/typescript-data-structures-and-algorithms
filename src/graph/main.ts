import {
    createAdjacencyList,
    breadthFirstSearch,
    depthFirstSearch,
    findShortestPath,
} from "./methods.js";

export function main(): void {
    // 0 -- 2   3 -- 5
    //  \  / \ /
    //   1    4 ---- 6
    // BFS(3): 3, 4, 5, 2, 6, 0, 1
    // DFS(3): 3, 4, 2, 0, 1, 5, 6
    let adjacencyList = createAdjacencyList([
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

    adjacencyList = createAdjacencyList([
        [0, [9, 7, 11]],
        [1, [10, 8]],
        [2, [12, 3]],
        [3, [2, 4, 7]],
        [4, [3]],
        [5, [6]],
        [6, [5, 7]],
        [7, [3, 6, 11, 0]],
        [8, [12, 9, 1]],
        [9, [10, 1, 8, 0]],
        [10, [1, 9]],
        [11, [0, 7]],
        [12, [8, 2]],
    ]);
    console.log("findShortestPath(10, 4): ", findShortestPath(adjacencyList, 10, 4).join());
}
