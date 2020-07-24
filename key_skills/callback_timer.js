runTime = () => new Date().getSeconds();

showPeriod = (callback) => {
    console.log("Start: " + runTime());
    for(var i = 1000; i <= 10000; i += 1000) {
        setTimeout(() => {
            callback();
        }, i);
    }
}

showPeriod(() => {
    console.log('Next second: ' + runTime());
});


     

