'use strict';

var msg = new SpeechSynthesisUtterance();
var voices = [];
var voicesDropdown = document.querySelector('[name="voice"]');
var options = document.querySelectorAll('[type="range"], [name="text"]');
var speakButton = document.querySelector('#speak');
var stopButton = document.querySelector('#stop');