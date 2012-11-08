var should = require("chai").should();

describe("server", function() {
	it("should succeed", function() {
		true.should.be.ok;
	});
	it("should fail", function() {
		false.should.be.ok;
	});
});