export function binarySearch(
    array: number[], // [12, 23, 45, 56, 90, 100]
    element: number,
    left: number,
    right: number,
): boolean {
    if (array.length === 0) {
        return false;
    }

    // Check for out of bound indexes
    // If indexes are out of bound that means that we didn't find the element
    // or initial arguments are invalid
    if (left < 0 || left > array.length - 1 || right < 0 || right > array.length - 1) {
        return false;
    }

    const arrayLength = right - left + 1; // 6 // 3
    // Calculate the lower middle index of the array
    // We subtract 1 and divide by 2 from the array length to get the lower middle
    // We add the left index to adjust for arrays that do not start at 0
    const lowerMiddleIndex = Math.floor((arrayLength - 1) / 2) + left;

    if (element === array[lowerMiddleIndex]) {
        return true;
    }

    if (element < array[lowerMiddleIndex]) {
        // Look in the left part
        return binarySearch(array, element, left, lowerMiddleIndex - 1);
    }

    if (element > array[lowerMiddleIndex]) {
        // Look in the left part
        return binarySearch(array, element, lowerMiddleIndex + 1, right);
    }

    return false;
}
