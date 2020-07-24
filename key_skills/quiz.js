const $readline = require('readline');

const consoleInterface = $readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var points = 0;

consoleInterface.question('What is the capital of the United States? \n', (answer) => {
    (answer == 'Washington') ? console.log('good answer !') : console.log('bad answer !');
    (answer == 'Washington') ? points++ : points;
    if(points == 1) {
        consoleInterface.setPrompt('Which year ' + answer + ' was founded? \n');
        consoleInterface.prompt();
        consoleInterface.on('line', (secondAnswer) => {
            (secondAnswer == '1790') ? console.log('good answer !') : console.log('bad answer !');
            (secondAnswer == '1790') ? points++ : points;

            console.log('Your score: ' + points);
            consoleInterface.close();
        })
    } else {
        console.log('Your score: ' + points);
        consoleInterface.close();
    }
});
