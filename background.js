'use strict';

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log("Intercepted");
    return {redirectUrl: "https://leetcode.com"};
  },
  // filters
  {urls: url},
  // extraInfoSpec
  ["blocking"]);

