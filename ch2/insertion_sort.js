function insertionSort(array) {
    for (let j = 1; j < array.length; j++) {
        key = array[j];
        // Insert A[i] into the sorted sequence A[1...j-1]
        let i = j-1;
        while (i > -1 && array[i] > key) {
            array[i+1] = array[i];
            i = i - 1;
        }
        array[i+1] = key;
    };
    return array;
};

let ary = [5,2,4,6,1,3];
let expected = [1,2,3,4,5,6];
let actual = insertionSort(ary);
console.log('final: ', actual)
if (JSON.stringify(expected) === JSON.stringify(actual)) {
    console.log('passed');
} else {
    console.log('failed')
}