const $mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test';
const db = $mongoose.connection;

$mongoose.connect(url, {useNewUrlParser: true});

db.on('error', () => { console.log('Connection failed !'); });
db.once('open', () => { 
    console.log('Connection success !'); 
    const programmingBookSchema = $mongoose.Schema({'author': String, 'title': String, 'kind': String});
    const programmingBook = $mongoose.model('programmingBook', programmingBookSchema);
    const bookItem_1 = new programmingBook({'author': 'Marcin Lis', 'title': 'JavaScript - ćwiczenia praktyczne', 'kind': 'JS elementary'});
    const bookItem_2 = new programmingBook({'author': 'Aditya Y.Bhargava', 'title': 'Algorytmy - ilustrowany przewodnik', 'kind': 'algorithms'});
    const bookItem_3 = new programmingBook({'author': 'Larry Ullman', 'title': 'Nowoczesny język JavaScript', 'kind': 'JS techniques of work'});
    const bookItem_4 = new programmingBook({'author': 'Robert C.Martin', 'title': 'Czysty Kod - podręcznik dobrego programisty', 'kind': 'guide'});
    const bookItem_5 = new programmingBook({'author': 'Włodzimierz Gajda', 'title': 'PHP. Praktyczne Projekty', 'kind': 'PHP elementary and tools.'});
    const bookItem_6 = new programmingBook({'author': 'Craig Walls', 'title': 'Spring w Akcji', 'kind': 'Java frameworks'});
    
    bookItem_1.save((error, bookItem_1) => { error ? console.log(error) : console.log('Add new book: ' + bookItem_1); });
    bookItem_2.save((error, bookItem_2) => { error ? console.log(error) : console.log('Add new book: ' + bookItem_2); });
    bookItem_3.save((error, bookItem_3) => { error ? console.log(error) : console.log('Add new book: ' + bookItem_3); });
    bookItem_4.save((error, bookItem_4) => { error ? console.log(error) : console.log('Add new book: ' + bookItem_4); });
    bookItem_5.save((error, bookItem_5) => { error ? console.log(error) : console.log('Add new book: ' + bookItem_5); });
    bookItem_6.save((error, bookItem_6) => { error ? console.log(error) : console.log('Add new book: ' + bookItem_6); });
}); 
// ? db.programmingbooks.find()