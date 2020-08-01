const $express = require('express');
const $fs = require('fs');
const app = $express();
const port = 3000;

const index = $fs.readFileSync('./content.html', 'utf-8');
const agnes = $fs.readFileSync('./agnes.html', 'utf-8');
const kamil = $fs.readFileSync('./kamil.html', 'utf-8');

app.get('/', (request, reponse) => reponse.send(index));
app.get('/agnes', (request, reponse) => reponse.send(agnes));
app.get('/kamil', (request, reponse) => reponse.send(kamil));

app.use('/css', $express.static(__dirname + '/css'));
app.use('/img', $express.static(__dirname + '/img'));
app.listen(port, () => {console.log(`Server is running at http://localhost:${port}`)});

