---
published: true
layout: post
title: Massive building footprints data for TotalTopo
subtitle: FIND software integrates Bing buildings into topo maps for SAR.
date: 2018-07-18
author: jason_dalton
folder: blog/assets/2018-07-18-bing-buildings-topo
headerColor: '#000'
headerImage: header.png
tags: geospatial
---

In our work with the Department of Homeland Security and dbS SAR, Azimuth1 is designing and building search and rescue software for first responders.  Part of that system is a custom topo map for SAR personnel to use to plan and carry out search tasks.  Recently Microsoft open sourced a large data set of building footprints that they are providing as Open Data.  [Read more here](https://blogs.bing.com/maps/2018-06/microsoft-releases-125-million-building-footprints-in-the-us-as-open-data)

We quickly integrated that data into the TotalTopo maps for search and rescue.  The difference is very significant and we're very happy that we'll be conducting our first SAR exercise using the new maps in Coeur d'Alene ID this weekend.  Here's a before and after look at the difference it makes.  

<div class="flexItem col-md-2">
BEFORE:
</div>
<div class="flexItem col-md-10">
<img class="img-fluid img-float sarcatImg" src="{{site.baseurl}}/{{page.folder}}/buildings-before.png">
</div>

<div class="flexItem col-md-2">
AFTER:
</div>
<div class="flexItem col-md-10">
<img class="img-fluid img-float sarcatImg" src="{{site.baseurl}}/{{page.folder}}/buildings-after.png">
</div>

Have to give credit to the Bing Maps team for providing this.  These buildings are drawn using computer vision techniques from aerial images, so even though the data aren't perfect (we've found a few building shapes that aren't out in the world)  They are easy to distinguish from the vast amounts of good data, and having a 99% correct nationwide set of buildings is terrific for SAR and public safety.  In particular the images can see sheds and out-buildings that lost persons may use for shelter or have gotten trapped.  We're making updates to the maps in our software all the time to make them better for public safety and other outdoor users.  Look for more info here as we improve.
