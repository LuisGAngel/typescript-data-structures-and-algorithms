import {
    createSinglyLinkedList,
    size,
    addAtStart,
    addAtEnd,
    remove,
    includes,
    toString,
    getMiddle,
} from "./index.js";

export function main(): void {
    // const linkedList = createSinglyLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let linkedList = createSinglyLinkedList([1, 2, 3, 4, 5, 6]);
    console.log("toString", toString(linkedList));
    console.log("size", size(linkedList));

    linkedList = addAtStart(linkedList, 0);
    console.log("toString", toString(linkedList));
    console.log("size", size(linkedList));

    linkedList = addAtEnd(linkedList, 10);
    console.log("toString", toString(linkedList));
    console.log("size", size(linkedList));

    linkedList = remove(linkedList, 5);
    console.log("toString", toString(linkedList));
    console.log("size", size(linkedList));

    linkedList = remove(linkedList, 0);
    console.log("toString", toString(linkedList));
    console.log("size", size(linkedList));

    linkedList = remove(linkedList, 10);
    console.log("toString", toString(linkedList));
    console.log("size", size(linkedList));

    console.log("toString", toString(linkedList));
    console.log("includes 5", includes(linkedList, 5));

    console.log("toString", toString(linkedList));
    console.log("includes 6", includes(linkedList, 6));

    console.log("toString", toString(linkedList));
    console.log("getMiddle", toString(getMiddle(linkedList)));
}
