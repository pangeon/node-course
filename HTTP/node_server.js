const $HTTP = require('http');
const $FS = require('fs');
const content_JSON = JSON.parse($FS.readFileSync('./content.json', 'utf-8'));

$HTTP.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/html'});
    let indexFile = $FS.readFileSync('./index.html', 'utf-8');
    switch(request.url) {
        case '/buildings':
            for (let i = 0; i < content_JSON.selectors.id.length; i++) {
                indexFile = indexFile.replace(content_JSON.selectors.id[i], content_JSON.selectors.buildings_name[i]);
            }
            break;
        case '/cities':
            for (let i = 0; i < content_JSON.selectors.id.length; i++) {
                indexFile = indexFile.replace(content_JSON.selectors.id[i], content_JSON.selectors.cities_name[i]);
            }
            break;
        default:
            response.writeHead(404);
            indexFile = $FS.readFileSync('./error.html', 'utf-8');
    }
    response.end(indexFile);
}).listen(2020);

$HTTP.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'application/json'});
    // ! this is stream 
    // ? response.end(JSON.stringify(content_JSON)); ?
    $FS.createReadStream('./content.json').pipe(response);
}).listen(2021);

console.log('Server is running - abort ctrl + c');