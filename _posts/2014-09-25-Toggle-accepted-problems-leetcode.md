---
layout: post
title: "Toggle Accepted Problem in Leetcode"
description: ""
category: tech
tags: [Coding, JavaScript, js]
imagefeature:
mathjax:
chart:
comments: true
---

I recently written some code on <a href="https://oj.leetcode.com/problems/" target="_blank">Leetcode</a>, it's a really fantastic website.
But it has no feature to let us hidden accepted problem.

So I write my own bookmarklet to do it. The repository is here: <a href="https://github.com/xcv58/toggle-leetcode-ac" target="_blank">https://github.com/xcv58/toggle-leetcode-ac</a>

The main part is:
{% highlight javascript %}(
    function()
    {
        var filter = new RegExp("=\"ac");
        var list=document.getElementById("problemList").childNodes[3].childNodes;
        for (var i=1;i<list.length;i+=2){
            if (filter.test(list[i].children[0].innerHTML)) {
                if (list[i].style.display == "none") {
                    list[i].style.display="";
                } else {
                    list[i].style.display="none";
                }
            }
        }
        return;
    }
)();
{% endhighlight %}

I host this part on my Dropbox Public folder.

So you just need add this line of code as a bookmark:

{% highlight javascript %}
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://dl.dropboxusercontent.com/u/4121165/js/toggle-display-leetcode.js';})();
{% endhighlight %}

or you can drag
<a href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://dl.dropboxusercontent.com/u/4121165/js/toggle-display-leetcode.js';})();">
this
</a> to your bookmark bar.
