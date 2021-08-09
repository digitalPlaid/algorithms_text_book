function mergeSort(array, begin, end) {
    if (begin < end) {
        let midpoint = Math.floor((begin+end)/2)
        mergeSort(array, p, midpoint)
        mergeSort(array, midpoint + 1, end)
        merge(array, begin, midpoint, end);
    }
}

function merge(array, begin, midpoint, end) {
    let lengthOne = midpoint-begin+1;
    let lengthTwo = end-midpoint;
    let left = [];
    let right = [];
    for (let i=0; i < lengthOne; i++) {
        left.push(array[begin+i]);
    }
    for (let i=0; i < lengthTwo; i++) {
        right.push(array[midpoint+1+i]); // unsure of this index in particular
    }
    left.push(99999);
    right.push(99999); // using 99999 as our sentinel - I'm sure this would have to be bigger for a usable implementation
    let i = 0;
    let j = 0;
    for (let k=begin; k < end + 1; k++) {

        if (left[i] <= right[j]) {
            array[k] = left[i];
            i += 1;
        } else {
            array[k] = right[j];
            j += 1;
        }
    }
    return array;
}

let unmerged = [2,4,5,7,1,2,3,6];
let merged = merge(unmerged, 0, 3, 7);
let goal = [1,2,2,3,4,5,6,7]
if (JSON.stringify(unmerged) === JSON.stringify(goal)) {
    console.log('passed')
} else {
    console.log('failed to merge properly');
}




