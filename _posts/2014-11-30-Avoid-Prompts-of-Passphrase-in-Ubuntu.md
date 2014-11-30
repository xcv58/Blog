---
layout: post
title: "Avoid Prompts of Passphrase in Ubuntu"
description: "Avoid Prompts of Passphrase in Ubuntu"
category: Tech
tags: [Tech, Shell, SSH]
imagefeature:
mathjax:
chart:
comments: true
---

If you face the same problem, I assume that:

* you are using Ubuntu 14.04 or later version.
* your keys are properly set.

First you need:
{% highlight bash %}
sudo apt-get install keychain
{% endhighlight %}

Then add this line in your ~/.bashrc, ~/.zshrc, or whatever *sh you used:
{% highlight bash %}
eval $(keychain --eval --agents ssh -Q --quiet ~/.ssh/id_rsa)
{% endhighlight %}

Sometimes, you need change `~/.ssh/id_rsa` to the path of your key.

And enjoy.
