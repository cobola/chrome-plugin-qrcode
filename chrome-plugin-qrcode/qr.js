function fanyiip(){

var shares = $("a:contains('转寄')");


}


function dosmthwww(){


  var share = $("#a_share");

  var location = $(share).attr("_u");

  location = location.replace("http://www.newsmth.net/nForum","http://m.newsmth.net")

  $(share).prepend("<a href='#' name='weixinshare' class='weixinshare' id='fuguiquestion' style='color:white'>微信分享</a> ");

  $(share).after('<div class="fuguiwindow" id="fuguiqwindows" style="display:none">请扫描一下二维码以继续<div class="fuguicode" id="fuguiqcode"></div></div>');
  $('#fuguiqcode').qrcode(location);

  var scrpt = document.createElement("script");
  scrpt.type = "text/javascript";
  scrpt.innerHTML = "$('#fuguiquestion').click(function() {$('#fuguiqwindows').show();});$('#fuguiqwindows').click(function() {$('#fuguiqwindows').hide();});";
  $('body').prepend(scrpt);

}

function dosmth(location) {


  var base = location.substring(0, location.lastIndexOf("/"));

  if(base.indexOf("single")>0){
    return;
  }
  var shares = $("a:contains('转寄')");

  for (var i = 0; i < shares.length; i++) {

    var share = shares[i];


    //就在这里追加了

    var tid = $(share).attr("href");
    tid = tid.substring(tid.lastIndexOf("/"),tid.length);

    //地址 
    var url = base + "/single/" + tid;

    $(share).after(" | <a href='javascript:void(0);' name='weixinshare' class='weixinshare' id='weixinshare" + i + "' class='meta-item zu-autohide'><i class='z-icon-share'></i>微信分享</a> ");


    $(share).after('<div class="fuguiwindow" id="fuguiwindow' + i + '" style="display:none">请扫描一下二维码以继续<div class="fuguicode" id="fuguicode' + i + '"></div></div>');
    $('#fuguicode' + i).qrcode(url);

    var scrpt = document.createElement("script");
    scrpt.type = "text/javascript";
    scrpt.innerHTML = "$('#weixinshare" + i + "').click(function() {$('#fuguiwindow" + i + "').show();});$('#fuguiwindow" + i + "').click(function() {$('#fuguiwindow" + i + "').hide();});";
    $(share).prepend(scrpt);


  }

}



function dozhihuquestion(location) {



  //现在题干上加一个分享

  $('.meta-item[name="invite"]').after("<a href='#' name='weixinshare' class='weixinshare' id='fuguiquestion' class='meta-item zu-autohide'><i class='z-icon-share'></i>微信分享</a>");

  $('.meta-item[name="invite"]').after('<div class="fuguiwindow" id="fuguiqwindows" style="display:none">请扫描一下二维码以继续<div class="fuguicode" id="fuguiqcode"></div></div>');
  $('#fuguiqcode').qrcode(location);


  var scrpt = document.createElement("script");
  scrpt.type = "text/javascript";
  scrpt.innerHTML = "$('#fuguiquestion').click(function() {$('#fuguiqwindows').show();});$('#fuguiqwindows').click(function() {$('#fuguiqwindows').hide();});";
  $('body').prepend(scrpt);



  var shares = $(".answer-date-link");
  for (var i = 0; i < shares.length; i++) {

    try {
      var share = shares[i];
      //在他后面追加一个
      //得到本条目的questionid 和 answerid 
      //


      var url = "http://www.zhihu.com" + $(share).attr("href");
      // console.log("get answer url in single page " + url);
      // var aid = $(p).find("meta[itemprop='answer-url-token']").attr("content");

      $(share).parent().before("<a href='#' name='weixinshare' class='weixinshare' id='weixinshare" + i + "' class='meta-item zu-autohide'><i class='z-icon-share'></i>微信分享</a> ");


      $(share).parent().after('<div class="fuguiwindow" id="fuguiwindow' + i + '" style="display:none">请扫描一下二维码以继续<div class="fuguicode" id="fuguicode' + i + '"></div></div>');
      $('#fuguicode' + i).qrcode(url);

      var scrpt = document.createElement("script");
      scrpt.type = "text/javascript";
      scrpt.innerHTML = "$('#weixinshare" + i + "').click(function() {$('#fuguiwindow" + i + "').show();});$('#fuguiwindow" + i + "').click(function() {$('#fuguiwindow" + i + "').hide();});";
      $(share).prepend(scrpt);

    } catch (e) {

      console.log(e.message);

    }


  }
}

function dozhihuindex() {
  // var start = new Date().getTime();

  // 找分享 然后后面append 一个 微信分享 然后把图片加上

  //正中间一个 需要的时候显示就行了



  var shares = $(".zm-meta-panel");
  for (var i = 0; i < shares.length; i++) {

    try {
      var share = shares[i];
      //在他后面追加一个
      //得到本条目的questionid 和 answerid 
      //
      var p = $(share).parents(".feed-item");

      // alert(p.html());

      var qid = $(p).find("meta[itemprop='question-url-token']").attr("content");

      var url = "http://www.zhihu.com/question/" + qid;
      if ($(p).find("meta[itemprop='answer-url-token']") != 'undefined' && $(p).find("meta[itemprop='answer-url-token']").length > 0) {
        url = url + "/answer/" + $(p).find("meta[itemprop='answer-url-token']").attr("content");
      }


      $(share).prepend("<a href='#' name='weixinshare' class='weixinshare' id='weixinshare" + i + "' class='meta-item zu-autohide'><i class='z-icon-share'></i>微信分享</a>");

      $(share).prepend('<div class="fuguiwindow" id="fuguiwindow' + i + '" style="display:none">请扫描一下二维码以继续<div class="fuguicode" id="fuguicode' + i + '"></div></div>');
      $('#fuguicode' + i).qrcode(url);


      var scrpt = document.createElement("script");
      scrpt.type = "text/javascript";
      scrpt.innerHTML = "$('#weixinshare" + i + "').click(function() {$('#fuguiwindow" + i + "').show();});$('#fuguiwindow" + i + "').click(function() {$('#fuguiwindow" + i + "').hide();});";
      $(share).prepend(scrpt);

    } catch (e) {

      console.log(e.message);

    }


  }



}

(function($) {
  $.fn.exist = function() {
    if ($(this).length >= 1) {
      return true;
    }
    return false;
  };
})(jQuery);

$(document).ready(function() {
  var location = window.location.href;
  if (location == "http://www.zhihu.com/") {
    dozhihuindex();
  }

  if (location.indexOf("zhihu.com/question") > 0) {
    dozhihuquestion(location);
  }

  if (location.indexOf("m.newsmth.net") > 0) {

    dosmth(location);
  }

  if(location.indexOf("www.newsmth.net")>0){

    dosmthwww();
  }


});