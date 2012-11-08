exports.sumTwoNumbers = function(a, b, callback) {
	setTimeout(function() {
		if(typeof a != "number") return callback(new Error("a must be a number"));
		if(typeof b != "number") return callback(new Error("b must be a number"));
		return callback(null, a + b);
	}, 1000);
}