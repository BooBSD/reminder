var util = require("util"),
    events = require("events");


function Reminder() {
    var self = this;
    var _hours = new Date().getHours();
    var _minutes = new Date().getMinutes();
    var tick = function() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if(date.getSeconds() == 0 && _minutes != minutes) {
            _minutes = minutes;
            var timeEvent = (hours <= 9 ? '0' + hours : hours) + ':' + (minutes <= 9 ? '0' + minutes : minutes);
            if(self.listeners(timeEvent).length > 0) self.emit(timeEvent, date);
            self.emit('minute', date);
            if(minutes % 2 == 0) self.emit('2 minutes', date);
            if(minutes % 3 == 0) self.emit('3 minutes', date);
            if(minutes % 4 == 0) self.emit('4 minutes', date);
            if(minutes % 5 == 0) self.emit('5 minutes', date);
            if(minutes % 6 == 0) self.emit('6 minutes', date);
            if(minutes % 10 == 0) self.emit('10 minutes', date);
            if(minutes % 12 == 0) self.emit('12 minutes', date);
            if(minutes % 15 == 0) self.emit('15 minutes', date);
            if(minutes % 20 == 0) self.emit('20 minutes', date);
            if(minutes % 30 == 0) self.emit('30 minutes', date);
            if(_hours != hours) {
                _hours = hours;
                self.emit('hour', date);
                if(hours % 2 == 0) self.emit('2 hours', date);
                if(hours % 3 == 0) self.emit('3 hours', date);
                if(hours % 4 == 0) self.emit('4 hours', date);
                if(hours % 6 == 0) self.emit('6 hours', date);
                if(hours % 8 == 0) self.emit('8 hours', date);
                if(hours % 12 == 0) self.emit('12 hours', date);
            }
        }
        clearTimeout(t);
        var t = setTimeout(tick, 60000 - (new Date().getTime() % 60000));
    }
    tick();
}

util.inherits(Reminder, events.EventEmitter);

Reminder.prototype.every = Reminder.prototype.on;
Reminder.prototype.at = Reminder.prototype.once;
Reminder.prototype.cancel = Reminder.prototype.removeListener;
Reminder.prototype.forget = Reminder.prototype.removeAllListeners;

module.exports = Reminder;
