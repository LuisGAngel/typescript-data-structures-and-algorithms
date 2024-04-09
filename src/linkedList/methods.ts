import { SinglyLinkedListNode } from "./index.js";

export function createSinglyLinkedList<T>(array: T[]): SinglyLinkedListNode<T> | null {
    if (array.length < 1) {
        return null;
    }

    const linkedList: SinglyLinkedListNode<T> = {
        value: array[0],
        next: null,
    };
    for (let index = 1; index < array.length; index++) {
        addAtEnd(linkedList, array[index]);
    }

    return linkedList;
}

export function size<T>(root: SinglyLinkedListNode<T>): number {
    if (!root) {
        return 0;
    }

    let count = 1;
    let current = root;
    while (current.next !== null) {
        count += 1;
    }

    return count;
}

export function addAtStart<T>(root: SinglyLinkedListNode<T>, element: T): SinglyLinkedListNode<T> {
    const newRoot = {
        value: element,
        next: root,
    };
    return newRoot;
}

export function addAtEnd<T>(root: SinglyLinkedListNode<T>, element: T): SinglyLinkedListNode<T> {
    let currentElement = root;
    while (currentElement.next !== null) {
        currentElement = currentElement.next;
    }

    currentElement.next = { value: element, next: null };

    return root;
}

export function remove<T>(
    root: SinglyLinkedListNode<T> | null, // 5 3 0
    element: T, // 6
): SinglyLinkedListNode<T> | null {
    if (!root) {
        return null;
    }

    // Root matches element
    if (root.value === element) {
        const removed = root; // 5

        if (root.next === null) {
            root = null;
        } else {
            root = root.next;
        }
        return removed;
    }

    let previousElement = root; // 6
    let currentElement = root.next; // 0

    while (currentElement) {
        if (currentElement.value === element) {
            const removed = currentElement; // 3
            previousElement.next = currentElement.next;
            return removed;
        }
        previousElement = currentElement;
        currentElement = currentElement.next;
    }

    return null;
}

export function search<T>(
    root: SinglyLinkedListNode<T> | null,
    element: T,
): SinglyLinkedListNode<T> | null {
    if (!root) {
        return null;
    }

    if (root.value === element) {
        return root;
    }

    let current = root;
    while (current.next !== null) {
        if (current.value === element) {
            return current;
        }
        current = current.next;
    }
    return null;
}
