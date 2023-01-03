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
