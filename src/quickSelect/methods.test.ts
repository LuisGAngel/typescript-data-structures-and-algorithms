import { findSmallestKthValue, findLargestKthValue, swapValues } from "./methods.js";

describe("quickSelect.methods", function () {
    describe("findSmallestKthValue", function () {
        const array = [3, 2, 1, 5, 6, 4];
        const startOfArray = 0;
        const endOfArray = array.length - 1;
        it("should return the smallest kth value, k close to start", () => {
            expect(findSmallestKthValue(array, 2, startOfArray, endOfArray)).toEqual(2);
        });
        it("should return the smallest kth value", () => {
            expect(findSmallestKthValue(array, 6, startOfArray, endOfArray)).toEqual(6);
        });
        it("should throw with empty array", () => {
            expect(() => {
                findSmallestKthValue([], 2, startOfArray, endOfArray);
            }).toThrow(Error);
        });
        it("should throw with k out of bounds", () => {
            expect(() => {
                findSmallestKthValue(array, Number.MAX_SAFE_INTEGER, 0, 1);
            }).toThrow(Error);
        });
        it("should throw with left index out of bounds", () => {
            expect(() => {
                findSmallestKthValue(array, 2, -1, 1);
            }).toThrow(Error);
        });
        it("should throw with right index out of bounds", () => {
            expect(() => {
                findSmallestKthValue(array, 2, 0, -1);
            }).toThrow(Error);
        });
    });

    describe("findLargestKthValue", function () {
        const array = [3, 2, 1, 5, 6, 4];
        const startOfArray = 0;
        const endOfArray = array.length - 1;
        it("should return the largest kth value, k close to start", () => {
            expect(findLargestKthValue(array, 1, startOfArray, endOfArray)).toEqual(6);
        });
        it("should return the largest kth value", () => {
            expect(findLargestKthValue(array, 3, startOfArray, endOfArray)).toEqual(4);
        });
        it("should throw with empty array", () => {
            expect(() => {
                findLargestKthValue([], 2, startOfArray, endOfArray);
            }).toThrow(Error);
        });
        it("should throw with k out of bounds", () => {
            expect(() => {
                findLargestKthValue(array, Number.MAX_SAFE_INTEGER, 0, 1);
            }).toThrow(Error);
        });
        it("should throw with left index out of bounds", () => {
            expect(() => {
                findLargestKthValue(array, 2, -1, 1);
            }).toThrow(Error);
        });
        it("should throw with right index out of bounds", () => {
            expect(() => {
                findLargestKthValue(array, 2, 0, -1);
            }).toThrow(Error);
        });
    });

    describe("swapValues", function () {
        it("should modify the array in place", () => {
            const array = [1, 2, 3];
            swapValues(array, 0, 2);
            expect(array).toEqual([3, 2, 1]);
        });
        it("returned array should have values swaped", () => {
            expect(swapValues([1, 2, 3], 0, 2)).toEqual([3, 2, 1]);
        });
    });
});
