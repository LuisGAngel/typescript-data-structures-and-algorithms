import { TreeNodeString, TreeNodeNumber } from "./types.js";

//       a
//      / \
//     b   c
//    / \   \
//   d   e   f

//       3
//      / \
//     11  4
//    / \   \
//   4   2   1

export function maxRootToLeafSum(root: TreeNodeNumber | null): number {
    if (!root) return 0;

    return root.value + Math.max(maxRootToLeafSum(root.left), maxRootToLeafSum(root.right));
}

export function sumTreeBfs(root: TreeNodeNumber | null): number {
    if (!root) return 0;

    const queue = [root];
    let sum = 0;

    while (queue.length > 0) {
        const current = queue.shift() as TreeNodeNumber;
        sum += current.value;

        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }
    }

    return sum;
}

export function sumTreeDfsRecursive(root: TreeNodeNumber | null): number {
    if (!root) return 0;
    return root.value + sumTreeDfsRecursive(root.left) + sumTreeDfsRecursive(root.right);
}

export function sumTreeDfsIterative(root: TreeNodeNumber | null): number {
    if (!root) return 0;

    const stack = [root];
    let sum = 0;

    while (stack.length > 0) {
        const current = stack.pop() as TreeNodeNumber;
        sum += current.value;

        if (current.left) {
            stack.push(current.left);
        }

        if (current.right) {
            stack.push(current.right);
        }
    }

    return sum;
}

export function treeIncludesBfs(root: TreeNodeString | null, target: string): boolean {
    if (!root) return false;

    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift() as TreeNodeString;
        if (current.value === target) {
            return true;
        }
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }

    return false;
}

export function treeIncludesDfsIterative(root: TreeNodeString | null, target: string): boolean {
    if (!root) return false;

    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop() as TreeNodeString;
        if (current.value === target) {
            return true;
        }
        if (current.right) {
            stack.push(current.right);
        }
        if (current.left) {
            stack.push(current.left);
        }
    }

    return false;
}

//       a
//      / \
//     b   c
//    / \   \
//   d   e   f
export function treeIncludesDfsRecursive(root: TreeNodeString | null, target: string): boolean {
    // root: b
    // target: e
    if (!root) return false;

    if (root.value === target) {
        return true;
    }

    return (
        treeIncludesDfsRecursive(root.left, target) || treeIncludesDfsRecursive(root.right, target)
    );
}

export function breadthFirstSearch(root: TreeNodeString | null): TreeNodeString[] {
    if (!root) return [];

    const results: TreeNodeString[] = []; // a b c d e f
    const queue = [root]; //

    while (queue.length > 0) {
        // `array.shift()` can't return undefined per while condition checking array length > 0 so
        // we cast as TreeNode
        const current = queue.shift() as TreeNodeString; // f
        results.push(current);

        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }

    return results;
}

/**
 * Traverse tree using depth search first (DSF) algorithm, left branch first. The method returns an
 * array of the visited nodes in that order.
 * @param {TreeNodeString} root
 * @returns {TreeNodeString[]}
 */
export function depthSearchFirstIterative(root: TreeNodeString | null): TreeNodeString[] {
    if (!root) return [];

    const result: TreeNodeString[] = [];
    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        if (current) {
            result.push(current);
        }
        if (current && current.right) {
            stack.push(current.right);
        }
        if (current && current.left) {
            stack.push(current.left);
        }
    }
    return result;
}

/**
 * Traverse tree using depth search first (DSF) algorithm, left branch first. The method returns an
 * array of the visited nodes in that order.
 * @param {TreeNodeString} root
 * @returns {TreeNodeString[]}
 */
export function depthSearchFirstRecursive(
    root: TreeNodeString | null,
    results: TreeNodeString[] = [],
): TreeNodeString[] {
    if (!root) return [];

    results.push(root);

    if (root.left) {
        depthSearchFirstRecursive(root.left, results);
    }
    if (root.right) {
        depthSearchFirstRecursive(root.right, results);
    }
    return results;
}

export function createTreeNode(value: string): TreeNodeString {
    return {
        value,
        left: null,
        right: null,
    };
}
