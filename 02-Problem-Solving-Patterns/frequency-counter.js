// Frequency Counters Pattern

/*
This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

An example:
Write a funciton called `same`, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// A naive solution:
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		arr2.splice(correctIndex, 1);
	}

	return true;
}

// Refactored with Frequency Counter pattern:
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

// --------------------------------------
/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
*/

function validAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let val of str1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of str2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		if (!(key in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}
