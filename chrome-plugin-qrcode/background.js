// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Returns a handler which will open a new window when activated.
 */

function getClickHandler() {
  return function(info, tab) {

    // The srcUrl property is only available for image elements.
    var url = 'qr.html#' + info.srcUrl;
    // Create a new window to the info page.
    chrome.windows.create({
      url: url,
      width: 450,
      height: 600
    });
  };
};


function getTextHandler() {

  return function(info, tab) {

    // The srcUrl property is only available for image elements.
    var url = 'qr.html#' + info.selectionText;
   
    // Create a new window to the info page.
    chrome.windows.create({
      url: url,
      width: 450,
      height: 600
    });
  };

}
/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
  "title": chrome.i18n.getMessage("image_to_qrcode"),
  "type": "normal",
  "contexts": ["image"],
  "onclick": getClickHandler()
});


chrome.contextMenus.create({
  "title": chrome.i18n.getMessage("selection_to_qrcode"),
  "type": "normal",
  "contexts": ["selection"],
  "onclick": getTextHandler()
});