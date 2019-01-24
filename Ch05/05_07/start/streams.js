let fs = require("fs");

let stream = fs.createReadStream("./chat.log", "UTF-8");

let data = "";

stream.once("data", function () {
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
});

stream.on("data", function(chunk) {

    process.stdout.write(`   chunk: ${chunk.length} |`);

    data += chunk;

});

stream.once("end", function() {
    console.log("\n\n\n");
    console.log(`Finished Reading File ${data.length}`);
    console.log("\n\n\n");
});

// fs.readFile("./chat.log", "UTF-8", function(err, chatlog) {
//
//     console.log(`File Read ${chatlog.length}`);
//
// });
//
// console.log("Reading File");