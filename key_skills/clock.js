getSec = () => new Date().getSeconds();
getMin = () => new Date().getMinutes();
getHours = () => new Date().getHours();

var interval = setInterval(() => {
    var sec = getSec();
    var min = getMin();
    var hours = getHours();
    (sec < 10) ? console.log(hours +':'+min +':0'+sec) : console.log(hours +':'+min +':'+sec);
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 10000);

