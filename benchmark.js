var Reminder = require('./index'),
    remind = new Reminder(),
    maxListeners = 1000000,
    maxLatency = 0;


console.log('Starting Reminder benchmark with ' + maxListeners + ' listeners...');

remind.setMaxListeners(maxListeners + 1);

for(var i = 0; i < maxListeners; i++) {
    remind.every('minute', function(date) {
        var latency = date.getTime() % 60000;
        maxLatency < latency ? maxLatency = latency : latency;
    });
}

remind.every('minute', function(date) {
    var t = setTimeout(function() {
        console.log('Max latency: ' + maxLatency + ' ms');
        console.log
        maxLatency = 0;
    }, 1000);
});

console.log('One minute, please.');
