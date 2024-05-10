export function findSmallestKthValue(
    array: number[],
    k: number,
    left: number,
    right: number,
): number {
    if (k < 1 || k > array.length) {
        throw new Error("K out of bounds");
    }

    if (left < 0 || left > array.length - 1) {
        throw new Error("Left index out of bounds");
    }

    if (right < 0 || right > array.length - 1) {
        throw new Error("Right index out of bounds");
    }

    if (array.length < 1) {
        throw new Error("Array must not be empty");
    }

    // Pivot value will have its sorted position in the array after partition
    let pivot = partition(array, left, right);

    // When looking for the smallest Kth value, its index is equal to k-1
    const indexOfKthPosition = k - 1;

    // If the index of the Kth is less than pivot. Run findSmallestKthValue on the left subarray of the pivot
    if (indexOfKthPosition < pivot) {
        return findSmallestKthValue(array, k, 0, pivot - 1);
    }
    // If the index of the Kth is greater than pivot. Run findSmallestKthValue on the right subarray of the pivot
    if (indexOfKthPosition > pivot) {
        return findSmallestKthValue(array, k, pivot + 1, array.length - 1);
    }

    return array[indexOfKthPosition];
}

export function findLargestKthValue(
    array: number[],
    k: number,
    left: number,
    right: number,
): number {
    if (k < 1 || k > array.length) {
        throw new Error("K out of bounds");
    }

    if (left < 0 || left > array.length - 1) {
        throw new Error("Left index out of bounds");
    }

    if (right < 0 || right > array.length - 1) {
        throw new Error("Right index out of bounds");
    }

    if (array.length < 1) {
        throw new Error("Array must not be empty");
    }

    // Pivot value will have its sorted position in the array after partition
    let pivot = partition(array, left, right);

    // When looking for the largest the index of the Kth position is equal to array.length-k
    const indexOfKthPosition = array.length - k;

    // If the index of the Kth is less than pivot. Run findLargestKthValue on the left subarray of the pivot
    if (indexOfKthPosition < pivot) {
        return findLargestKthValue(array, k, 0, pivot - 1);
    }

    // If the index of the Kth is greater than pivot. Run findLargestKthValue on the right subarray of the pivot
    if (indexOfKthPosition > pivot) {
        return findLargestKthValue(array, k, pivot + 1, array.length - 1);
    }

    return array[indexOfKthPosition];
}

// [3, 2, 1, 5, 6, 4]
export function partition(array: number[], left: number, right: number): number {
    // array: [3, 2, 1, 5, 6, 4], left: 0, right: 5
    // We choose the last element as our pivot to partition
    const pivotIndex = right;
    let i = left; // 3
    for (let j = left; j < right; j++) {
        // j: 5
        if (array[j] <= array[pivotIndex]) {
            swapValues(array, i, j);
            i++;
        }
    }
    // Swap values at pivot index and where i stopped
    // After the swap the pivot has the correct position in the array
    swapValues(array, i, pivotIndex);
    return i;
}

export function swapValues<T>(array: T[], index1: number, index2: number): T[] {
    if (index1 < 0 || index2 < 0 || index1 > array.length - 1 || index2 > array.length - 1) {
        throw new Error("Index out of bounds");
    }

    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}
