'use strict';

let STUDY_MODE = false;

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log("Intercepted");
    console.log(info);
    return {redirectUrl: "https://leetcode.com"};
  },
  // filters
  {urls: url},
  // extraInfoSpec
  ["blocking"]);
