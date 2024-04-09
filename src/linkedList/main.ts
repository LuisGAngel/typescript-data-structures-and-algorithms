import { createSinglyLinkedList } from "./index.js";

export function main(): void {
    const linkedList = createSinglyLinkedList([1, 2, 3, 4, 5]);
    console.log("createSinglyLinkedList", linkedList);
}
