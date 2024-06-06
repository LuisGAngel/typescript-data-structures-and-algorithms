import { MinHeap } from "./heap/MinHeap.js";

const minHeap = new MinHeap();
console.log(minHeap.heap);

minHeap.add(5);
console.log(minHeap.heap);

minHeap.add(9);
console.log(minHeap.heap);

minHeap.add(1);
console.log(minHeap.heap);

//       1
//      / \
//     9   5
//    / \
//   x   x
// array: [1, 9, 5]
