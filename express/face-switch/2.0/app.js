const $express = require('express');
const app = $express();
const port = 3000;

app.set('view engine', 'jade');

app.get('/', (request, reponse) => reponse.render('index', {title: 'Main Page'}));
app.get('/agnes', (request, reponse) => reponse.render('agnes', {title: 'Agnes'}));
app.get('/kamil', (request, reponse) => reponse.render('kamil', {title: 'Kamil'}));

app.use('/css', $express.static(__dirname + '/css'));
app.use('/img', $express.static(__dirname + '/img'));
app.listen(port, () => {console.log(`Server is running at http://localhost:${port}`)});

