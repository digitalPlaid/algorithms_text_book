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
    for (i=0; i < lengthOne; i++) {
        left.push(array[start+i]);
    }
    for (i=0; i < lengthTwo; i++) {
        right.push(array[midpoint+1+i]); // unsure of this index in particular
    }

}





