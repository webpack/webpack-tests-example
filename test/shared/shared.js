var should = require("chai").should();

describe("shared", function() {
	it("should succeed", function() {
		true.should.be.ok;
	});
	it("should fail", function() {
		false.should.be.ok;
	});
	it("should be there", function() {
	});

	describe("CrazyAsyncUtils", function() {
		var CrazyAsyncUtils = require("../../lib/CrazyAsyncUtils");

		it("should sum two numbers", function(done) {
			CrazyAsyncUtils.sumTwoNumbers(1, 2, function(err, result) {
				if(err) throw err;
				should.exist(result);
				result.should.be.eql(3);
				done();
			});
		});
	});
});