# Bubble Sort

A sorting algorithm where the largest values bubble up to the top!

```js
// First iteration:

[ 5, 3, 4, 1, 2 ]

// Swap
[ 3, 5, 4, 1, 2 ]

// Swap
[ 3, 4, 5, 1, 2 ]

// Swap
[ 3, 4, 1, 5, 2 ]

// Swap
[ 3, 4, 1, 2, 5 ]

// Second iteration:

// Swap
[ 3, 1, 4, 2, 5 ]

// ...
```

## Before we sort, we must swap!

Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

```js
// ES5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp
}

// ES2015
const swap = (arr, idx1, idx2) => {
    [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
}
```

## BubbleSort Pseudocode

- Start looping from with a variable called *i* the end of the array towards the beginning
- Start an inner loop with a variable called *j* from the beginning until `i - 1`
- If `arr[j]` is greater than `arr[j + 1]`, swap those two values!
- Return the sorted array

## Big O Complexity
- The Big O complexity of the bubble sort algorithm is O(n^2). This is because the algorithm has two nested loops that each iterate over the input array of length n. 