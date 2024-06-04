import { MinHeap } from "./MinHeap.js";

describe.only("heap", function () {
    describe.only("MinHeap.add", function () {
        const minHeap = new MinHeap();
        const inputElements = [48, 86, 1, 15, 71, 3, 28, 31, 40, 70];

        for (const element of inputElements) {
            minHeap.add(element);
        }

        it("adds elements into de heap", () => {
            expect(minHeap.length).toEqual(inputElements.length);
        });
    });

    describe("MinHeap.pop", function () {
        const minHeap = new MinHeap();
        const inputElements = [48, 86, 1, 15, 71, 3, 28, 31, 40, 70];
        const outputElements: number[] = [];

        for (const element of inputElements) {
            minHeap.add(element);
        }

        while (minHeap.length > 0) {
            outputElements.push(minHeap.pop());
        }

        it("pops elements in correct order", () => {
            expect(minHeap.length).toEqual(0);
            expect(outputElements).toEqual(inputElements.sort());
        });
    });

    describe("MinHeap.peek", function () {
        const minHeap = new MinHeap();
        const inputElements = [48, 86, 1, 15, 71, 3, 28, 31, 40, 70];

        for (const element of inputElements) {
            minHeap.add(element);
            it("returns the first without removing it", () => {
                expect(minHeap.peek()).toEqual(element);
            });
        }
    });
});
