---
title: Absoflexing
description : TIL the unique flex positioning of absolute elements
date: '2019-05-22'
---

This is a short recap of something I’ve stumbled upon in preparation for a new upcoming project. Due to signed contracts I’m not allowed to show any visuals just yet.
The layout consists of a lot of shapes, which across different viewports change in size, but not so much in position (except for a few exceptions). After a few trial and error codepens I landed on SVGs as my reliable solution.
Since using the Flexible Box Layout Module has almost become 2nd nature and will come in handy for this task as well I wanted to throw some ideas into a codpen, play around and see if it lives up to my expectations.

Here we reach the interesting part and something I believe a bunch of the Flexbox guides out there are missing.

> Absolutely-Positioned Flex Children  
  As it is out-of-flow, an absolutely-positioned child of a flex container does not participate in flex layout.  
  The static position of an absolutely-positioned child of a flex container is determined such that the child is positioned as if it were the sole flex item in the flex container, assuming both the child and the flex container were fixed-size boxes of their used size. For this purpose, auto margins are treated as zero.  
  In other words, the static-position rectangle of an absolutely-positioned child of a flex container is the flex container’s content box, where the static-position rectangle is the alignment container used to determine the static-position offsets of an absolutely-positioned box.  

[W3C spec](https://www.w3.org/TR/css-flexbox-1/#abspos-items)

Especially the 2nd paragraph is interesting and threw me off a bit. Even tho the element is position absolute it’s static position is still determined by whatever the flex container is set to. Meaning if your flex container says: `justify-content: center; align-items: center;` you’ll end up with a perfectly centred, yet absolute positioned element. I was expecting a static position of `top: 0; left: 0;`. As we can clearly see I was wrong. I do like this behaviour to be quite honest and its still completely controllable via overwrites.
