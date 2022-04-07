const Rollbar = require("rollbar");


function darkMode() {
	var element = document.body;
	element.className = "dark-mode";
    Rollbar.log('switched to darkmode')
}

function lightMode() {
	var element = document.body;
	element.className = "light-mode";
    Rollbar.log('switched to lightmode')
}