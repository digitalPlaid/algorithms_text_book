// number 1:
// Theta(n^3)

// number 2:
// write selection sort:
// find smallest element, change with a[0], find next smallest, change with a[1]...
// these algorithms are ones performed in place
// not going to assume any native js functions
/*
function selectionSort(array) {
    // find smallest in whole array
    for (let i = 0; i < array.length-1; i++) {
        let smallest = array[i];
        let smallestIdx = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < smallest) {
                smallest = array[j];
                smallestIdx = j;
            }
        }
        array[smallestIdx] = array[i];
        array[i] = smallest; 
    }
    return array
}

let ary = [5,2,4,6,1,3];
let expected = [1,2,3,4,5,6];
let actual = selectionSort(ary);
console.log('final: ', actual)
if (JSON.stringify(expected) === JSON.stringify(actual)) {
    console.log('passed');
} else {
    console.log('failed')
}

// best case: theta(n^2)
// worst case: theta(n^2)


*/

// exercise 2.2-3:
// on average, half. it's uniformally distributed
// worst case, every element is checked
// theta(n) for both best and worst

// exercise 2.2-4
// write in checks for special cases that can be solved rapidly