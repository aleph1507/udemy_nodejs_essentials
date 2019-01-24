let expect = require("chai").expect;
let tools = require("../lib/tools");

describe("Tools", function() {

    describe("printName()", function() {

        it("should print the last name first", function() {

            let results = tools.printName({ first: "Alex", last: "Banks"});

            expect(results).to.equal("Banks, Alex");

        });

    });

    describe("loadWiki()", function() {

        it("Load Abraham Linkoln's wikipedia page")

    });
});
