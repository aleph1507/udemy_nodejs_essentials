let waitTime = 3000;
let currentTime = 0;
let waitInterval = 10;
let percentWaited = 0;

// console.log("wait for it");

function writeWaitingPercent(p) {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);

}

let interval = setInterval(function() {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime / waitTime) * 100);
    // console.log(`waiting ${currentTime/1000} seconds...`);
    writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function() {

    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\n\ndone\n\n");

}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);