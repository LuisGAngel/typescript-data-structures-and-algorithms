export function createHeap(array: number[]): number[] {
    return [];
}

//       10
//      / \
//     15  20
//    /
//   17
// array: [10, 15, 20, 17]
class MinHeap {
    private heap: number[] = [];
    private size: number = 0;

    constructor(array: number[]) {}

    public peek(): number {
        if (this.size < 1) {
            throw new RangeError("Size is less than 1");
        }
        return this.heap[0];
    }

    public pop(): number {
        if (this.size < 1) {
            throw new RangeError("Size is less than 1");
        }
        const element = this.heap[0];
        this.heap[0] = this.heap[this.size - 1];
        this.size--;
        this.heapifyDown();
        return element;
    }

    public add(element: number): void {
        this.heap[this.size] = element;
        this.size++;
        this.heapifyUp();
    }

    private heapifyUp(): void {}

    private heapifyDown(): void {}

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
        return this.getParentIndex(index) > 0;
    }

    private hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.size;
    }

    private hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this.size;
    }

    private swapValues(index1: number, index2: number) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
}
