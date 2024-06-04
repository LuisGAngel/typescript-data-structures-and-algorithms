import { binarySearch } from "./methods.js";

describe("binarySearch.methods", function () {
    describe("binarySearch", function () {
        const array = [12, 23, 45, 56, 90, 100];
        const startOfArray = 0;
        const endOfArray = array.length - 1;
        it("should return true if element is present in array", () => {
            expect(binarySearch(array, 56, startOfArray, endOfArray)).toEqual(true);
        });
        it("should return false if element is not present in array", () => {
            expect(binarySearch(array, 1, startOfArray, endOfArray)).toEqual(false);
        });
    });
});
