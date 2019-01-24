let expect = require("chai").expect;
let rewire = require("rewire");
let order = rewire("../lib/order");

describe("Ordering Items", function() {

    beforeEach(function() {

        this.textData = [
            {sku: "AAA", qty: 10},
            {sku: "BBB", qty: 0},
            {sku: "CCC", qty: 3}
        ];

        order.__set__("inventoryData", this.testData);

    });

    it("order an item when there are enough in stock", function(done)  {

        order.orderItem("CCC", 3, function() {
            done();
        });

    });

});