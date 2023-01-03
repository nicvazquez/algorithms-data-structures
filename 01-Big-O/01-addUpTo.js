function addUpToFirst(n) {
	let total = 0;
	for (let i = 0; i <= n; i++) {
		total += i;
	}
	return total;
}
const time1 = performance.now();
addUpToFirst(1000000000);
const time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds`);

// ---------------------------------
// This is a better alternative as it runs in less time and also has much fewer operations to perform.
function addUpToSecond(n) {
	return (n * (n + 1)) / 2;
}
const time3 = performance.now();
addUpToSecond(1000000000);
const time4 = performance.now();
console.log(`Time Elapsed: ${(time3 - time4) / 1000} seconds`);
