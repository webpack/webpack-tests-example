// Client side tests

var path = require("path");
var Server = require("webpack-dev-server");

new Server(path.join(__dirname, "lib", "main.js"), {
	webpack: {
		output: "bundle.js",
		debug: true,
		watch: true,
		middleware: {
			noInfo: true
		},
		resolve: {
			alias: {
				chai: "chai/lib/chai"
			}
		}
	}
}).listen(8082, "localhost");
console.log("http://localhost:8082");

// Server side test

var EnhancedMocha = require("./lib/EnhancedMocha");

var mocha = new EnhancedMocha({
	reporter: "spec"
});

mocha.addFile(path.join(__dirname, "shared", "shared.js"));
mocha.addFile(path.join(__dirname, "server", "server.js"));

mocha.watch();