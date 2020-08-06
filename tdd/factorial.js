module.exports = class MathsService {
    fact(n) {
        if (n < 0) 
            return -1;
        else if (n == 0) 
            return 1;
        else {
            return (n * this.fact(n - 1));
        }
    }
    avg(arr) {
        var sum = 0;
        for(var i in arr) { 
            sum += arr[i];
        }
        var numbersCnt = arr.length;
        return (sum / numbersCnt);
    }
}

