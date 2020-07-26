function stringToCypher(string) {
    const encrypt = new Buffer.from(string);
    let code = ''; 
    encrypt.forEach(e => { code +=  e + '#'; });
    console.log('String: ' + encrypt.toString()); 
    console.log('ASCII Code: ' + code); 
}
stringToCypher('Agnieszka Lasota');
stringToCypher('Kamil Cecherz');
