# Sorting Algorithms

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

Examples:
- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

## Why do we need to learn this?

- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages

## JavaScript has a sort method...

Yes, it does!
... but it doesn't always work the way you expect

👇 ✅
```js
[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort();
// [ "Algorithms", "Colt", "Data Structures", "Steele" ]
```

👇 ❌
```js
[ 6, 4, 15, 10 ].sort();
// [ 10, 15, 4, 6 ]
```

## Telling JavaScript how to sort

- The built-in sort method accepts an optional comparator function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (*a* and *b*), determines their sort order based on the return value
    - If it returns a negative number, *a* should come before *b*
    - If it returns a positive number, *a* should come after *b*
    - If it returns 0, *a* and *b* are the same as far as the sort is concerned

Examples:
```js
function numberCompare(num1, num2) {
    return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]
```

```js
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort(compareByLen)
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]
```

## Comparing Bubble, Selection, and Insertion Sort

| Algorithm | Time Complexity (Best)| Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
|---|---|---|---|---|
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Selection Sort | O(n^2) | O(n^2) | O(n^2) | O(1) |