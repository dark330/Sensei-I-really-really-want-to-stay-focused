'use strict';

var STUDY_MODE = false;

// var popup = chrome.extension.getViews({
//   type: "popup"
// });

// // for (var i = 0; i < popup.length; i++) {
// var onOff = popup[0].document.getElementById("switch");
// // }


chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    if (STUDY_MODE) {
      console.log("Intercepted");
      console.log(info);
      return {redirectUrl: "https://leetcode.com"};
    }
  },
  // filters
  {urls: url},
  // extraInfoSpec
  ["blocking"]);

function backgroundFunction() {
  if (STUDY_MODE) {
    STUDY_MODE = false;
  } else {
    STUDY_MODE = true;
  }
}

function getState() {
  return STUDY_MODE;
}