var regexForMainURL = /.*\/\/.+?\//;
var currentURL = document.URL;
var newURL = currentURL.replace(regexForMainURL, "http://cn.xcv58.com/");
var greeting = "<h1>You may visit link from my Chinese Blog</br>redirect to in 3 seconds:</br>";
function update() {
    document.getElementById("cn-xcv58-com").innerHTML = "<h1>You may visit link from <a href='" + newURL + "'>my Chinese Blog</a> redirect to it in <font color='red'>" + timer / 1000 + "</font> seconds</h1>";
}
// var xmlHttp = new XMLHttpRequest();
// xmlHttp.open( "GET", newURL );
// xmlHttp.send( null );
// var response = xmlHttp.responseText;
var timer = 5000;
update()
setInterval(function () {
    timer -= 1000;
    if (timer == 0) {
        window.location = newURL;
    } else {
        update();
    }
}, 1000);
