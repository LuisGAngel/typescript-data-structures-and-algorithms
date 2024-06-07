import { MinHeap } from "./heap/MinHeap.js";

const minHeap = new MinHeap();
const inputElements = [48, 86, 1, 15, 71, 3, 28, 31, 40, 70];

for (const element of inputElements) {
    minHeap.add(element);
}

minHeap.printHeap();
