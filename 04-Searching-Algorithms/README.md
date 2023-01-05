# Searching Algorithms

---

## Linear Search

#### How do we search?
Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want
There are many different search methods on arrays in JavaScript:
- indexOf
- includes
- find
- findIndex

#### Linear Search Pseudocode
- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

---

## Linear Search Big O
- O(1) -> Best
- O(n) -> Average
- O(n) -> Worst

---

## Binary Search
- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays!

#### Divide and Conquer
- The basic idea behind binary search is to use the "divide and conquer" strategy to find a target element in a sorted array.
- The algorithm works by first comparing the target element to the middle element of the array. If the target element is less than the middle element, then the algorithm searches the left half of the array. If the target element is greater than the middle element, then the algorithm searches the right half of the array.
- This process is repeated until the target element is found, or it is clear that the element is not present in the array.

#### Binary Search Pseudocode
- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
    - Create a pointer in the middle
    - If you find the value you want, return the index
    - If the value is too small, move the left pointer up
    - If the value is too large, move the right pointer down
- If you never find the value, return -1

#### What About Big O?
- O(log n) -> Worst and Average Case
- O(1) -> Best Case