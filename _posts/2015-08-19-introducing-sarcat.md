---
published: true
layout: post
title: Introducing SARCAT
subtitle: The open-source Search and Rescue data management system
date: 2015-08-19
author: jason_dalton
folder: blog/assets/2015-08-19-introducing-sarcat
headerColor: '#fff'
replaceHeaderImage: '#325271'
headerImage: header.png
tags: SAR
---

<div class="pad1y"></div>
Understanding lost person behavior is essential to making better decisions in how you allocate trained search resources like field search teams, search dogs, helicopters, and drones.  For several years now we at Azimuth1 have been working with the leading researcher in lost person behavior, Robert Koester.  Robert started cataloging search mission records back in the 90's and published one of the first studies on the wandering patterns of those disoriented due to Alzheimers and dementia.  Bob's work has expanded to several dozen lost person types including children, hunters, hikers, those with severe autism, and accounts for differences in climate and terrain and their impact on lost person behavior.  Earlier this year we worked with Bob to put out a mobile app called Lost Person Behavior that includes summary descriptions, statistics, and checklists to help manage a search mission.  It's useful for first responders to quickly get their hands on best practices in search management when they might find themselves in charge of a search for the first time.

These statistics come from data provided to ISRID, the International Search and Rescue Incident Database.  One of the difficulties of getting new data into ISRID is the wide variation of data structures, formats, and category codes used by agencies around the globe.  To give search teams a way to more easily catalog their data, and a way to very easily contribute data back to ISRID, we've created SARCAT, a records management system for search and rescue missions.  SARCAT is open source, so you can set up a DIY instance, or use our hosted system either for free without support, or a paid subscription for support.

<div class="pad1y"></div>
<hr>
<div class="h2 text-center">A complete records management system</div>
<div class="flexCont">





<div class="flexItem col-md-6">
SARCAT is easy to set up, with just a single script to install and start the server.   Users access it through a browser, so there's nothing to install on user's desktops.  Our design goals were to make it simple and fast to use, install, and maintain.  We did this by creating a single step installer, a fast web based UI, and using web services to automatically pull in data that is normally collected on paper.   
</div>
<div class="flexItem col-md-6">
<img class="img-fluid sarcatImg" src="{{site.baseurl}}/{{page.folder}}/SARCAT_stats_screen.png">
</div>

</div>




<div class="pad1y"></div>
<hr>
<div class="h2 text-center">Entering mission data</div>
<div class="flexCont">


<div class="flexItem col-md-12">
<img class="img-fluid sarcatImg" src="{{site.baseurl}}/{{page.folder}}/SARCAT_record_map_screen.png">
</div>



<div class="flexItem col-md-6">
It all starts with the map.  The user drops a point on a map to start the record and add details.    It also auto-populates the administrative details like the point of contact, team name, location, and address information.  Once SARCAT knows the coordinate and date of a mission, it automatically adds the terrain, elevation, land cover, eco-region, and weather data.
</div>




<div class="flexItem col-md-6">
<img class="img-fluid sarcatImg" src="{{site.baseurl}}/{{page.folder}}/SARCAT_record_weather_screen.png">
</div>

</div>

<div class="pad1y"></div>
<hr>
<div class="h2 text-center">Sending data to ISRID</div>
SARCAT will make data handling fast and easy for teams, but another very powerful feature is the simple submission of data to the ISRID database.  We expect this will mean great improvements to the community's knowledge about search behavior since updates to the database will be made at more regular intervals, and publishing results will be fast and more frequent.   Growing the ISRID database means that we will get more data for underserved areas, and can begin to age out some of the older data to reflect a lost person's changed behavior now that mobile devices and handheld GPS are so prevalent.  Thank you to all the SAR teams and instructors of the Lost Person Behavior course who provided early feedback and guidance in creating SARCAT.   You can read more at http://sarcat.azimuth1.com, try it out using the live demo, and stay tuned for an in depth technical description in an upcoming post.
