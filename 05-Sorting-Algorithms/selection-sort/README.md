# Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

```js
[ 5, 3, 4, 1, 2 ] // Compare 5 and 3 -> 3 is smaller
[ 5, 3, 4, 1, 2 ] // Now compare 3 and 4 -> 3 is smaller
[ 5, 3, 4, 1, 2 ] // Compare 3 and 1 -> Now 1 is smaller
[ 5, 3, 4, 1, 2 ] // Compare 1 and 2 -> 1 is smaller

// Swap the smallest value
[ 1, 5, 3, 4, 2 ] 

[ 1, 5, 3, 4, 2 ] // Now we know that 1 is the smallest value, so we compare 5 and 3 -> 3 is smaller than 5

// ...
```

## Selection Sort Pseudocode

- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
- If the "minimum" is not the value (index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted