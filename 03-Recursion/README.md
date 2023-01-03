# Recursion

## What is recursion?

A process (a function in our case) that calls itself

## How recursive functions work

Invoke the **same** function with a different input until you reach your base case (the condition when the recursion ends)!

## Why do I need it?

- It's everywhere!
  - JSON.parse / JSON.stringify
  - document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structures
- It's sometimes a cleaner alternative to iteration

In almost all program languages, there is a built in data structure that manages what happens when functions are invoked. It's called **call stack**.

## The call stack

- It's a data structure
- Any time a function is invoked it is placed (**pushed**) on the top of the call stack
- When JavaScript sees the **return** keyword or when the function ends, the compiler will remove (**pop**)

## Why do I care?

- You're used to functions being pushed on the call stack and popped off when they are done
- When we write recursive functions, we keep pushing new functions onto the call stack!

## Two essential parts of a recursive function

- Base case
- Diferent input

## Where things go wrong

- No base case
- Forgetting to return or returning the wrong thing
- Maximum call stack size exceeded!

## Helper method recursion

This is just a pattern where we have an outer function that's not recursive, which calls an inner function which is recursive

```js
function outer(input) {
	var outerScopedVariable = [];

	function helper(helperInput) {
		// modify the outerScopedVariable ...
		helper(helperInput--);
	}

	helper(input);

	return outerScopedVariable;
}
```

## Pure recursion

- For arrays, use methods like **slice**, **the spread operator**, and **concat** that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like **slice**, **substr**, or **substring** to make copies of strings
- To make copies of objects use **Object.assign** or the **spread operator**

```js
function collectOddValues(arr) {
	let newArr = [];

	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)));
	return newArr;
}
```
