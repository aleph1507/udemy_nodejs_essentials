let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let fs = require('fs');

let realPerson = {
    name: '',
    sayings: []
};

rl.question("What is the name of a real person? ", function(answer) {
    realPerson.name = answer;

    fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n=============\n\n`);

    rl.setPrompt(`What would a ${realPerson.name} say? `);

    rl.prompt();

    rl.on('line', function(saying) {
        realPerson.sayings.push(saying.trim());

        fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`);

        if(saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? (exit to leave) `);
            rl.prompt();
        }
    });
});

rl.on('close', function() {
    console.log(`${realPerson.name} would say: ${realPerson.sayings.toString()}`);
});