var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '3fee38264cba4599be10bebcb15ca58a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

function darkMode() {
	var element = document.body;
	element.className = "dark-mode";
    rollbar.log('darkmode activated')
    // darkAlert()
}

function lightMode() {
	var element = document.body;
	element.className = "light-mode";
}
