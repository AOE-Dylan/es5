//invert values

//Given a set of values, return the additive inverse of each.
//Each positive becomes negative, negative becomes positive
//Watch for zero edge case
//Build for this, invoke and pass test parameters of [0,1,3,-2]
//Output should be [0, -1, -3, 2]

function invert(arr) {
	var n = arr;
	var inverses = [];
	for (var i = 0; i < n.length; i++) {
		if (n[i] < 0) {
			inverses.push(i + 2 * -i);
		} else if (n[i] > 0) {
			inverses.push(i - 2 * i);
		} else {
			inverses.push(0);
		}
	}
	return(inverses);
	console.log(inverses);
}

console.log(invert([0,1,3,-2]));