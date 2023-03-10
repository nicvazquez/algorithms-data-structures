# Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted

```js
[ 5, 3, 4, 1, 2 ]
[ 3, 5, 4, 1, 2 ]
[ 3, 4, 5, 1, 2 ]
[ 1, 3, 4, 5, 2 ]
[ 1, 2, 3, 4, 5 ]
```

## Insertion Sort Pseudocode

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- Repeat until the array is sorted

## Big O Complexity
- The Big O complexity of the insertion sort algorithm is O(n^2). This is because the algorithm has one nested loop that iterates over the input array of length n. 