const MathService = require('../factorial.js');
const expect = require('chai').expect;

describe('function fact():', () => {
    it('should be return factorial value:', () => {
        const mathService = new MathService();
        expect(mathService.fact(5)).to.equal(120);
    });
});
describe('function avg()', () => {
    it('counts the average of several values:', () => {
        const mathService = new MathService();
        expect(mathService.avg([3, 6, 8, 9])).to.equal(6.5);
    })
})
