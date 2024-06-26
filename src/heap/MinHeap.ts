//       10
//      /  \
//     15  20
//    /  \
//   17  25
// array: [10, 15, 20, 17 , 25]
export class MinHeap {
    public length: number = 0;
    public heap: number[] = [];

    constructor() {}

    public peek(): number {
        if (this.length < 1) {
            throw new RangeError("Length is less than 1");
        }
        return this.heap[0];
    }

    public pop(): number {
        if (this.length < 1) {
            throw new RangeError("Length is less than 1");
        }
        const element = this.heap[0]; // 10
        this.heap[0] = this.heap[this.length - 1];
        this.length--;
        this.heapifyDown();
        return element;
    }

    public add(element: number): void {
        this.heap[this.length] = element; // heap[0] = 5 // heap[1] = 10 // heap[2] = 1
        this.length++; // 1 // 2 // 3
        this.heapifyUp();
    }

    private heapifyUp(): void {
        // We start with the last element
        let currentIndex = this.length - 1;
        while (
            this.hasParent(currentIndex) &&
            this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]
        ) {
            const parentIndex = this.getParentIndex(currentIndex);
            this.swapValues(currentIndex, parentIndex);
            currentIndex = parentIndex;
        }
    }

    private heapifyDown(): void {
        let currentIndex = 0;
        while (
            this.hasLeftChild(currentIndex) &&
            this.heap[this.getLeftChildIndex(currentIndex)] < this.heap[currentIndex]
        ) {
            if (
                this.hasRightChild(currentIndex) &&
                this.heap[this.getRightChildIndex(currentIndex)] <
                    this.heap[this.getLeftChildIndex(currentIndex)]
            ) {
                this.swapValues(currentIndex, this.getRightChildIndex(currentIndex));
                currentIndex = this.getRightChildIndex(currentIndex);
            } else {
                this.swapValues(currentIndex, this.getLeftChildIndex(currentIndex));
                currentIndex = this.getLeftChildIndex(currentIndex);
            }
        }
    }

    public printHeap(index = 0, prefix = "", isTail = true): void {
        if (index < this.heap.length) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            // Print right subtree
            if (right < this.heap.length) {
                this.printHeap(right, prefix + (isTail ? "│   " : "    "), false);
            }

            // Print current node
            console.log(prefix + (isTail ? "└── " : "┌── ") + this.heap[index]);

            // Print left subtree
            if (left < this.heap.length) {
                this.printHeap(left, prefix + (isTail ? "    " : "│   "), true);
            }
        }
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    private hasParent(index: number): boolean {
        return this.getParentIndex(index) >= 0;
    }

    private hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.length;
    }

    private hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this.length;
    }

    private swapValues(index1: number, index2: number) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
}
