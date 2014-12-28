var regexForMainURL = /.*\/\/.+?\//;
var currentURL = document.URL;
var newURL = currentURL.replace(regexForMainURL, "http://cn.xcv58.com/").replace(/\?.*/, '');
var checkAddress = "https://dl.dropboxusercontent.com/u/4121165/cn-blog-list/list"

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", checkAddress, false );
xmlHttp.send( null );
var response = xmlHttp.responseText;

if (response.indexOf(newURL.replace(/.*cn.xcv58.com/, "")) != -1) {
    window.location = newURL;
}
