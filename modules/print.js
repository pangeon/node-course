module.exports = {
    print: (txt) => process.stdout.write(txt),
    printn: (txt) => process.stdout.write(txt + '\n'),
    answer: (txt) => process.stdin.on('data', (arg) => {
        process.stdout.write(txt + " " + arg.toString());
        process.abort();
    })
}
    