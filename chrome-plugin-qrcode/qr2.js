/**
 * Load the image in question and display it, along with its metadata.
 */
document.addEventListener("DOMContentLoaded", function () {
  // The URL of the image to load is passed on the URL fragment.
  var imageUrl = window.location.hash.substring(1);
  if (imageUrl) {
    // Use the ImageInfo library to load the image and parse it.
  	
  	$('#qrcode').qrcode(imageUrl); 
  }
});
