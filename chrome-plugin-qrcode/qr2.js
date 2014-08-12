/**
 * Load the image in question and display it, along with its metadata.
 */
document.addEventListener("DOMContentLoaded", function() {
	// The URL of the image to load is passed on the URL fragment.
	var imageUrl = window.location.hash.substring(1);


	if (imageUrl) {
		// Use the ImageInfo library to load the image and parse it.
		imageUrl = utf16to8(imageUrl);
		if (imageUrl.length > 500) {
			imageUrl = imageUrl.substring(0, 500);
			alert("最大支持500个字节，已经截取。");
		}

		$('#qrcode').qrcode(imageUrl);

	}
});

function utf16to8(str) {
	var out, i, len, c;
	out = "";
	len = str.length;
	for (i = 0; i < len; i++) {
		c = str.charCodeAt(i);
		if ((c >= 0x0001) && (c <= 0x007F)) {
			out += str.charAt(i);
		} else if (c > 0x07FF) {
			out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
			out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		} else {
			out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		}
	}
	return out;
}