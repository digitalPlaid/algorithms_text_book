// 2.3.1
// skip on computer. did on a notebook

// 2.3.2 - rewrite it so it doesn't use sentinels instead, stopping when either array has all elements in a, then copy the rest in

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
    let i = 0;
    let j = 0;
    for (let k=begin; k < end + 1; k++) {
        if (left[i] <= right[j] || right[j] === undefined) {
            array[k] = left[i];
            i += 1;
        } else {
            array[k] = right[j];
            j += 1;
        }
    }
    return array;
}

function mergeSort(array, begin, end) {
    if (begin < end) {
        let midpoint = Math.floor((begin+end)/2)
        mergeSort(array, p, midpoint)
        mergeSort(array, midpoint + 1, end)
        merge(array, begin, midpoint, end);
    }
}

let unmerged = [2,4,5,7,1,2,3,6];
let merged = merge(unmerged, 0, 3, 7);
console.log(merged);
let goal = [1,2,2,3,4,5,6,7]
if (JSON.stringify(unmerged) === JSON.stringify(goal)) {
    console.log('passed')
} else {
    console.log('failed to merge properly');
}

// 2.3.3
/*
See the proof on page 37. No reason for this problem.
*/

// 2.3.4
// pen and paper, but basically it takes constant time to if n is 1, and up to t(n-1) + insertion time for the last element
// it takes O(n) for each call. it could take up to n recursive calls. 
// whole thing is O(n^2), I think.

// 2.3.5
// binary search
// informal argument. 
// assume array is already sorted, at the minimal case, we have one element, there's nothing to split, it takes constant
// time to tell if the element is there or not. 1 recursion. 
// 2 elements. split the array in half, check each side. T(2) = split + 2*C
// 3 elements. split into 1-2 then into 1,1-1, search each thing. 2(split) + 3*c, depth is 2
// 4 elements. split into 2-2, then into 1-1,1-1, 2 depth, 2*split + 4*c
// n elements split into n/2-n/2, then into n/4-n/4, n/4-n/4 etc. eventually you get to 2. that happens in lgn.
// each time you split you only have to compare the end points around which you split, that's constant time.
// clgn = O(lgn)

// 2.3.6
// no, still have to do the work of moving the subarray over, doesn't alleviate that problem

// 2.3.7