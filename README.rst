========
Reminder
========

Simple scheduler for Node.JS

Installation
============

To install Reminder please run the following command::

    $ npm install reminder

Usage
=====

Quick start
-----------

Initializing the reminder::

    var Reminder = require('reminder');
    var remind = new Reminder();

Adding the few tasks::

    remind.every('5 minutes', function(date) {
        console.log("Close the Twitter and start to work!");
    });

    remind.every('4 hours', function(date) {
        console.log("It\'s time to eat something!");
    });

Also you may add the task that should be done only once::

    remind.at('07:45', function(date) {
        console.log("Wake up! You have an interview at 9 AM.")
    });

Events
------

* 'minute'
* '2 minutes'
* '3 minutes'
* '4 minutes'
* '5 minutes'
* '6 minutes'
* '10 minutes'
* '12 minutes'
* '15 minutes'
* '20 minutes'
* '30 minutes'
* 'hour'
* '2 hours'
* '3 hours'
* '4 hours'
* '6 hours'
* '8 hours'
* '12 hours'

Methods
-------

* remind.at
* remind.every
* remind.cancel
* remind.forget
