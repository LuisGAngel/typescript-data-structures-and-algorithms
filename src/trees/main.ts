import {
    TreeNodeNumber,
    breadthFirstSearch,
    createTreeNode,
    depthSearchFirstIterative,
    depthSearchFirstRecursive,
    maxRootToLeafSum,
    sumTreeBfs,
    sumTreeDfsIterative,
    sumTreeDfsRecursive,
    treeIncludesBfs,
    treeIncludesDfsIterative,
    treeIncludesDfsRecursive,
} from "./index.js";

export function main(): void {
    //       a
    //      / \
    //     b   c
    //    / \   \
    //   d   e   f
    const a = createTreeNode("a");
    const b = createTreeNode("b");
    const c = createTreeNode("c");
    const d = createTreeNode("d");
    const e = createTreeNode("e");
    const f = createTreeNode("f");
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //       3
    //      / \
    //     11  4
    //    / \   \
    //   4   2   1
    const numericTree: TreeNodeNumber = {
        value: 3,
        left: {
            value: 11,
            left: {
                value: 4,
                left: null,
                right: null,
            },
            right: {
                value: 2,
                left: null,
                right: null,
            },
        },
        right: {
            value: 4,
            left: null,
            right: {
                value: 1,
                left: null,
                right: null,
            },
        },
    };

    console.log(
        "depthSearchFirstIterative",
        depthSearchFirstIterative(a).map((node) => node.value),
    ); // a b d e c f

    console.log(
        "depthSearchFirstRecursive",
        depthSearchFirstRecursive(a).map((node) => node.value),
    ); // a b d e c f

    console.log(
        "breadthFirstSearch",
        breadthFirstSearch(a).map((node) => node.value),
    ); // a b c d e f

    console.log("treeIncludesDfsIterative", treeIncludesDfsIterative(a, "e")); // true

    console.log("treeIncludesDfsRecursive", treeIncludesDfsRecursive(a, "e")); // true

    console.log("treeIncludesBfs", treeIncludesBfs(a, "f")); // true

    console.log("sumTreeDfsIterative", sumTreeDfsIterative(numericTree)); // 25

    console.log("sumTreeDfsRecursive", sumTreeDfsRecursive(numericTree)); // 25

    console.log("sumTreeBfs", sumTreeBfs(numericTree)); // 25

    console.log("maxRootToLeafSum", maxRootToLeafSum(numericTree)); // 18
}
