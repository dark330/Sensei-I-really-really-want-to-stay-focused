"use strict"

var onOff = document.getElementById("switch");
var options = document.getElementById("options");
var bg = chrome.extension.getBackgroundPage();

var form = document.getElementById("search");
var input = document.getElementById("input");

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

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var input_url = input.value;
    if (!input_url.endsWith('.com')) {
        alert("Invalid url, save failed!");
    } else if (bg.checkDuplicates(input_url)) {
        alert("Same url saved!");
    } else {
        bg.writeQuery(input_url);
    }
});