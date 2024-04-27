import {
    createAdjacencyList,
    findShortestPath,
    reconstructPath,
    findShortestPathToExit,
} from "./methods.js";

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
    describe("findShortestPathToExit", function () {
        const dungeon = [
            [".", ".", ".", "#", ".", ".", "."],
            [".", "#", ".", ".", ".", "#", "."],
            [".", "#", ".", ".", ".", ".", "."],
            [".", ".", "#", "#", ".", ".", "."],
            ["#", ".", "#", ".", ".", "#", "."],
        ];
        test("should return the shortest path to exit", () => {
            expect(findShortestPathToExit(dungeon, [0, 0], [4, 3])).toEqual([
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 2],
                [1, 3],
                [1, 4],
                [2, 4],
                [3, 4],
                [4, 4],
                [4, 3],
            ]);
        });
        test("should return empty path if start point is out of boundaries", () => {
            expect(
                findShortestPathToExit(
                    dungeon,
                    [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
                    [4, 3],
                ),
            ).toEqual([]);
        });
        test("should return empty path if end point is out of boundaries", () => {
            expect(
                findShortestPathToExit(
                    dungeon,
                    [0, 0],
                    [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
                ),
            ).toEqual([]);
        });
        test("should return empty path if start point is a rock", () => {
            expect(findShortestPathToExit(dungeon, [0, 3], [4, 3])).toEqual([]);
        });
        test("should return empty path if end point is a rock", () => {
            expect(findShortestPathToExit(dungeon, [0, 0], [4, 0])).toEqual([]);
        });
    });

    describe("reconstructPath", function () {
        const previous = new Map([
            [1, 10],
            [9, 10],
            [8, 1],
            [0, 9],
            [1, 8],
            [7, 0],
            [1, 0],
            [2, 12],
            [3, 7],
            [6, 7],
            [4, 3],
            [5, 6],
        ]);
        test("should return the reconstructed path", () => {
            expect(reconstructPath(previous, 10, 4)).toEqual([10, 9, 0, 7, 3, 4]);
        });
        test("should return empty array if graph is disjoint", () => {
            expect(reconstructPath(previous, 10, Number.MAX_SAFE_INTEGER)).toEqual([]);
        });
    });
});
