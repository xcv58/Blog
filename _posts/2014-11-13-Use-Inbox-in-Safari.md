---
layout: post
title: "Use Inbox in Safari"
description: ""
category: tech
tags: [Mac, Safari]
imagefeature:
mathjax:
chart:
comments: true
---
<a href="http://www.google.com/inbox/" target="_blank">Inbox by Gmail</a> is a great product.
But right now it works only in Chrome. When you open it in Safari:
![screenshot of Inbox in Safari]({{ site.url }}/images/inbox-in-safari.png)
We can change the default User Agent to mock Google.

# Usage

Just run such command in <a href="http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line" target="_blank">Terminal</a>:

```
defaults write com.apple.Safari CustomUserAgent "\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36\""
```

Then you can open Inbox in a new tab in Safari and it should works.

If you just wanna use Inbox in Safari, please stop here and enjoy.

# Find Other User Agent Strings

The other User Agent String can be found in:

`/Applications/Safari.app/Contents/Resources/UserAgents.plist`

# How to Revert

To revert the change, you just need run this command:

```
defaults delete com.apple.Safari CustomUserAgent
```

Then restart Safari.
