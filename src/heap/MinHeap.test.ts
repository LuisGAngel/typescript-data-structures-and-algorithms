import { MinHeap } from "./MinHeap.js";

describe("heap", function () {
    describe("MinHeap.add", function () {
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
        // Sort input elements randomly
        const inputElements = [48, 86, 1, 15, 71, 3, 28, 31, 40, 70].sort(
            () => Math.random() - 0.5,
        );
        const outputElements: number[] = [];

        // Add random elements one by one
        for (const element of inputElements) {
            minHeap.add(element);
        }

        // Pop elements one by one
        while (minHeap.length > 0) {
            outputElements.push(minHeap.pop());
        }

        it("pops elements in correct order", () => {
            expect(minHeap.length).toEqual(0);
            // Given min heap property popped elements should be in order from small to big
            expect(outputElements).toEqual(inputElements.sort((a, b) => a - b));
        });
    });

    describe("MinHeap.peek", function () {
        const minHeap = new MinHeap();
        const inputElements = [48, 86, 1, 15, 71, 3, 28, 31, 40, 70];
        const minElement = Math.min(...inputElements);

        for (const element of inputElements) {
            minHeap.add(element);
        }

        it("returns the first element without removing it", () => {
            expect(minHeap.peek()).toEqual(minElement);
        });
    });
});
