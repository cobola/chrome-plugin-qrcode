// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.tabs.query({
	active: true
}, function(tab) {
	url = tab[0].url;
	$('#qrcode').qrcode(url);
});

function click(e) {

alert(e.target.id);
	if (e.target.id == 'download') {
		download();
	}
	window.close();
}

function download() {
	
	// here is the most important part because if you dont replace you will get a DOM 18 exception.  
	var image = $("#qrcode").toDataURL("image/png").replace("image/png", "image/octet-stream;Content-Disposition: attachment;filename=foobar.png");  
	// var image = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	// window.location.href = image; // it will save locally  
	console.log(image);
	window.open(image);
}

document.addEventListener('DOMContentLoaded', function() {
	var divs = document.querySelectorAll('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener('click', click);
	}
});