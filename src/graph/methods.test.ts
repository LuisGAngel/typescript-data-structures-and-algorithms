import { createAdjacencyList, findShortestPath } from "./methods.js";

describe("graph.methods", function () {
    describe("findShortestPath", function () {
        const adjacencyList = createAdjacencyList([
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
        test("should return the shortest path between two nodes", () => {
            expect(findShortestPath(adjacencyList, 10, 4)).toEqual([10, 9, 0, 7, 3, 4]);
        });
        test("should return empty array if graph is disjoint", () => {
            expect(findShortestPath(adjacencyList, 10, Number.MAX_SAFE_INTEGER)).toEqual([]);
        });
    });
});
