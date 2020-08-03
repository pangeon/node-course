const $mongo = require('mongodb');
const client = $mongo.MongoClient;
const db_name = 'programming_books';
const url = 'mongodb://localhost:27017/' + db_name;

client.connect(url, { useUnifiedTopology: true }, (error, db) => { 
    if(error) {
        console.log(error)
    } else {
        console.log('Connect to database !');
        insertData(db, () => {
            console.log('Close connection !');
            db.close();
        });
    }  
});
let insertData = (db, callback) => {
    const programming_books_db = db.collection('programming_books');
    const data = [
		{'author': 'Włodzimierz Gajda', 'title': 'PHP. Praktyczne Projekty', 'kind': 'PHP elementary and tools.'},
		{'author': 'Craig Walls', 'title': 'Spring w Akcji', 'kind': 'Java frameworks'},
		{'author': 'Marcin Lis', 'title': 'JavaScript - ćwiczenia praktyczne', 'kind': 'JS elementary'},
		{'author': 'Aditya Y.Bhargava', 'title': 'Algorytmy - ilustrowany przewodnik', 'kind': 'algorithms'},
		{'author': 'Larry Ullman', 'title': 'Nowoczesny język JavaScript', 'kind': 'JS techniques of work'},
		{'author': 'Robert C.Martin', 'title': 'Czysty Kod - podręcznik dobrego programisty', 'kind': 'guide'}
    ]
    programming_books_db.insert(data, (error, result) => {
        if(error) {
            console.log(error);
        } else {
            console.log('Add new data to database !');
            callback(result);
        }
    }); 
}