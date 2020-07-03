'use strict';

// show added noti banner after add to localstorage.

var STUDY_MODE = false;
var blockUrls = [];

loadQuery();

function loadQuery() {
  try {
      var jsonQueries = localStorage.getItem("saved_urls");
      var queries = JSON.parse(jsonQueries) || [];
      blockUrls = queries; 
  } catch(e) {
      blockUrls = [];
  }
  // showList();
  console.log(blockUrls);
}

function writeQuery(input_url) {
  blockUrls.push(input_url);
  var jsonQueries = JSON.stringify(blockUrls);
  localStorage.setItem("saved_urls", jsonQueries);
  // showList();

}

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

function checkDuplicates(inputUrl) {
  var duplicate = blockUrls.some(function myFunction(each_url) {
      return each_url.toLowerCase() === inputUrl.toLowerCase();
  });
  return duplicate;
}