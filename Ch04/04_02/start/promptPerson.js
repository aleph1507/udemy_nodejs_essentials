let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

let realPerson = {
    name: '',
    sayings: []
};

rl.question("what is the name of a real person? ", function(answer) {

    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say? `);
    // console.log(answer);
    rl.prompt();

    rl.on('line', function(saying) {

        realPerson.sayings.push(saying.trim());

        if(saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? (type exit to leave) `);
            // console.log(saying.trim());
            rl.prompt();
        }

    });
});

rl.on('close', function() {

    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();

});