"use strict"

var onOff = document.getElementById("switch");
var options = document.getElementById("options");
var bg = chrome.extension.getBackgroundPage()

if (bg.getState()) {
    onOff.textContent = "Stop";
} else {
    onOff.textContent = "Start";
}

onOff.addEventListener("click", (e) => {

    if (bg.getState()) {
        bg.backgroundFunction();
        onOff.textContent = "Start";
    } else {
        bg.backgroundFunction();
        onOff.textContent = "Stop";
    }

});

options.addEventListener("click", (e) => {
  window.open("options.html");
});