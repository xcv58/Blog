var regexForMainURL = /.*\/\/.+?\//;
var currentURL = document.URL;
var newURL = currentURL.replace(regexForMainURL, "http://cn.xcv58.com/").replace(/\?.*/, '');
var suffix = currentURL.replace(regexForMainURL, "").replace(/\?.*/, '');
var cnBlogListAddress = "https://dl.dropboxusercontent.com/u/4121165/cn-blog-list/list";

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", cnBlogListAddress, false );
xmlHttp.send( null );
var response = xmlHttp.responseText;
if (response.indexOf(newURL.replace(/.*cn.xcv58.com/, "")) != -1) {
    window.location = newURL;
}

var dropboxPublicURL = "https://dl.dropboxusercontent.com/u/4121165/xcv58.me/" + suffix + ".txt";
xmlHttp.open( "GET", dropboxPublicURL, false );
xmlHttp.send( null );
if (xmlHttp.status == 200) {
    window.location = xmlHttp.responseText;
}
