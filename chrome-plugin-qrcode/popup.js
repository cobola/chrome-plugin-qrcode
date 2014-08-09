// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.tabs.query({active:true},function(tab){
    url = tab[0].url;
    $('#qrcode').qrcode(url);
});

function click(e) {
	
	window.close();
}

document.addEventListener('DOMContentLoaded', function() {
	var divs = document.querySelectorAll('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener('click', click);
	}
});