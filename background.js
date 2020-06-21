<<<<<<< HEAD
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});
=======
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log("Intercepted");
    return {redirectUrl: "https://leetcode.com"};
  },
  // filters
  {urls: url},
  // extraInfoSpec
  ["blocking"]);
>>>>>>> 03713857cab7018a513de017c9c225c9ec8f074a
