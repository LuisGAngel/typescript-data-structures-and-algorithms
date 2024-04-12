import { SinglyLinkedListNode } from "./index.js";

export function toString<T>(root: SinglyLinkedListNode<T> | null): string {
    if (!root) {
        return "null";
    }

    let listString = "";
    let current: SinglyLinkedListNode<T> | null = root;

    while (current !== null) {
        listString += `${current.value} => `;
        current = current.next;
    }

    return listString + `${current}`;
}

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

export function size<T>(root: SinglyLinkedListNode<T> | null): number {
    if (!root) {
        return 0;
    }

    let count = 0;
    let current: SinglyLinkedListNode<T> | null = root;
    while (current !== null) {
        count += 1;
        current = current.next;
    }

    return count;
}

export function addAtStart<T>(
    root: SinglyLinkedListNode<T> | null,
    element: T,
): SinglyLinkedListNode<T> {
    const newRoot = {
        value: element,
        next: root,
    };
    return newRoot;
}

export function addAtEnd<T>(
    root: SinglyLinkedListNode<T> | null,
    element: T,
): SinglyLinkedListNode<T> {
    if (!root) {
        return {
            value: element,
            next: null,
        };
    }

    let currentElement = root;
    while (currentElement.next !== null) {
        currentElement = currentElement.next;
    }

    currentElement.next = { value: element, next: null };

    return root;
}

export function remove<T>(
    root: SinglyLinkedListNode<T> | null,
    element: T,
): SinglyLinkedListNode<T> | null {
    if (!root) {
        return null;
    }

    // Look for element at root
    if (root.value === element) {
        if (root.next === null) {
            root = null;
        } else {
            root = root.next;
        }
        return root;
    }

    let previousElement = root;
    let currentElement = root.next;
    // Look for element in the middle or end
    while (currentElement) {
        if (currentElement.value === element) {
            previousElement.next = currentElement.next;
            return root;
        }
        previousElement = currentElement;
        currentElement = currentElement.next;
    }

    return root;
}

export function includes<T>(root: SinglyLinkedListNode<T> | null, element: T): boolean {
    if (!root) {
        return false;
    }

    let current: SinglyLinkedListNode<T> | null = root;
    while (current !== null) {
        if (current.value === element) {
            return true;
        }
        current = current.next;
    }
    return false;
}
// 1 2 3 4 5
export function getMiddle<T>(root: SinglyLinkedListNode<T> | null): SinglyLinkedListNode<T> | null {
    if (!root) {
        return null;
    }

    let slow: SinglyLinkedListNode<T> | null = root; // 3
    let fast: SinglyLinkedListNode<T> | null = root; // 5
    while (fast !== null) {
        if (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            // Asserting as slow can't be null as per condition above
            slow = slow.next as SinglyLinkedListNode<T>;
        } else {
            fast = null;
        }
    }
    return slow;
}
