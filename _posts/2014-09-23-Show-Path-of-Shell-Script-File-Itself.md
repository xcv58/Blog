---
layout: post
title: "Show Path of Shell Script File itself"
description: "Just for fun"
category: Tech
tags: [Tech, Shell, Script, Path]
imagefeature:
mathjax:
chart:
comments: true
---
I recently write shell script which need to know the path of itself.

Here is my implement:

{% highlight bash %}
SCRIPT_FILE=`which $0`
if [ -L $SCRIPT_FILE ]; then
    SCRIPT_FILE=`readlink $SCRIPT_FILE`
fi
SCRIPT_PATH=`dirname $SCRIPT_FILE`
SCRIPT_FILE=`basename $SCRIPT_FILE`
echo Path: $SCRIPT_PATH
echo Filename: $SCRIPT_FILE
{% endhighlight %}

The gist:
<a href="https://gist.github.com/ceba2a4f4bb8729d2e58.git" targer="_blank"> https://gist.github.com/ceba2a4f4bb8729d2e58.git </a>
