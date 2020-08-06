const $assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;
pow = (k, n) =>  k ** n; 
var Agus = {
    name: 'Agnes',
    surname: 'Lasota',
    age: 47
}
var Kamil = {
    name: 'Kamil',
    surname: 'Cecherz',
    age: 34
}
var games = ['The Settlers', 'Quake 3', 'Gothic 3', 'Mario Forever'];
var software = ['Photoshop', 'Corel Draw', 'Visual Studio', 'RAR'];
var numbers = [2, 4, 8, 16];
var str = 'Hello';
var num = 5
var powers = [pow(2, 1), pow(2, 2), pow(2, 3), pow(2,4)];


try {
    // ? Tests ?
    $assert.notEqual(pow(2, 2), 8);
    $assert.equal(games[0], 'The Settlers');
    $assert.notDeepEqual(games, software);
    $assert.notDeepEqual(Agus, Kamil);
    $assert.deepEqual(numbers, powers);

    // ? Tests Chai ? 
    // ** https://www.chaijs.com/
    str.should.be.a('string');
    num.should.be.a('number');
    powers.should.be.length(4);
    expect(Agus.name).to.equal('Agnes');
    expect(Kamil).to.have.property('age');

    console.log('Success. All tests are good.');
} catch(error) {
    console.log('Test no passed !');
} 



