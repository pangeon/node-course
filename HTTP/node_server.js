const $HTTP = require('http');
const $FS = require('fs');
const list_of_buildings = [
        {selector: '{ description }', content: 'The tallest buildings in the world'}, 
        {selector: '{ position-1 }', content: 'Burj Khalifa - 828 m'}, 
        {selector: '{ position-2 }', content: 'Shanghai Tower - 632 m'}, 
        {selector: '{ position-3 }', content: 'Abraj Al-Bait Clock Tower - 601 m'}, 
        {selector: '{ position-4 }', content: 'Ping An Finance Center - 599 m'}, 
        {selector: '{ position-5 }', content: 'Lotte World Tower - 554.5 m'}, 
        {selector: '{ position-6 }', content: 'One World Trade Center - 541.3 m'}, 
        {selector: '{ position-7 }', content: 'Guangzhou CTF Finance Center - 530 m'}, 
        {selector: '{ position-8 }', content: 'Tianjin CTF Finance Center - 530 m'}, 
    ];
const list_of_cities = [
        {selector: '{ description }', content: 'List of largest cities in the world'}, 
        {selector: '{ position-1 }', content: 'Tokyo - 37,4 mil'}, 
        {selector: '{ position-2 }', content: 'Delhi - 28,5 mil'}, 
        {selector: '{ position-3 }', content: 'Shanghai - 25,5 mil'}, 
        {selector: '{ position-4 }', content: 'São Paulo - 21,6 mil'}, 
        {selector: '{ position-5 }', content: 'Mexico City - 21,5 mil'}, 
        {selector: '{ position-6 }', content: 'Cairo - 20,0 mil'}, 
        {selector: '{ position-7 }', content: 'Mumbai - 19,9 mil'}, 
        {selector: '{ position-8 }', content: 'Beijing - 19,6 mil'}, 
    ];
$HTTP.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/html'});
    let indexFile = $FS.readFileSync('./index.html', 'utf-8');
    switch(request.url) {
        case '/buildings':
            for (let i = 0; i < list_of_buildings.length; i++) {
                indexFile = indexFile.replace(list_of_buildings[i].selector, list_of_buildings[i].content);
            }
            break;
        case '/cities':
            for (let i = 0; i < list_of_cities.length; i++) {
                indexFile = indexFile.replace(list_of_cities[i].selector, list_of_cities[i].content);
            }
            break;
        default:
            response.writeHead(404);
            indexFile = $FS.readFileSync('./error.html', 'utf-8');
    }
    response.end(indexFile);
}).listen(2020);

console.log('Server is running - abort ctrl + c');