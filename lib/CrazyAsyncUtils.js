exports.sumTwoNumbers = function(a, b, callback) {
	require("bundle!./CrazyAsyncUtilsImpl")(function(impl) {
		impl.sumTwoNumbers(a, b, callback);
	})
}