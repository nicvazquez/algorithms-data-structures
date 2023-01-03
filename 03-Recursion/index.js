// Our first recursive function

function countDown(num) {
	if (num <= 0) {
		console.log("All done !");
		return;
	}

	console.log(num);
	num--;
	countDown(num);
}

// Our second recursive function
function sumRange(num) {
	if (num === 1) return 1; // Base case
	return num + sumRange(num - 1);
}
