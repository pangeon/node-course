console.log(process.platform);
console.log(process.pid);
console.log(process.argv);

var exit = setTimeout(() => { process.abort();}, 3000);