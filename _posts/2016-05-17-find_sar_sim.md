---
published: true
layout: post
title: FIND software tested at NPS SAR Exercise
subtitle: Building a field deployable system for search and rescue incident management
date: 2016-05-31 12:00:00
author: jason_dalton
folder: blog/assets/2016-05-17-find_sar_sim
headerColor: '#fff'
replaceHeaderImage: '#334d00'
---

Two weeks ago, Azimuth1 supported search and rescue teams from across Virginia and North Carolina at the [Blue Ridge Parkway Search and Rescue Exercise (SAREX)](https://www.evensi.us/2016-blue-ridge-parkway-sarex-blue-ridge-music-center/170102646){:target="_blank"}, a simulated lost person search mission sponsored and run by the National Park Service. Read all about the experience in this account of the exercise by our team.  <!--more-->  

![SarSim]({{site.baseurl}}/{{page.folder}}/SarSim.jpg)


Search simulations are good opportunities to practice searching and typically everyone moves "up a grade" in terms of their job on scene, so they can try out new skills and responsibilities without lives on the line.  We were there to field test the new FIND software we developed under the guidance of Robert Koester of [dbS SAR](http://www.dbs-sar.com) as part of a contract from the Department of Homeland Security
Science and Technology Directorate First Responders Group. It's an organization that sponsors research and development to create technologies that directly help police, fire, rescue, and other first responder agencies.

![FIND Software]({{site.baseurl}}/{{page.folder}}/SitStat.png){:target="_blank"}



### Mission Planning
The FIND software was used to map lost person behavior statistics to discern the regions of the search area in which the lost person is most likely to be found.

![Planning]({{site.baseurl}}/{{page.folder}}/PlanningSegments.png)

Then FIND was used to generate search task maps and assignments, create planning maps of the area and collect photos of clues and footprints that were found by teams in the field.  The two-day exercise started with an evening planning session in which FIND was used to mirror and augment the tasks being drawn up in the manual way with printouts of maps and acetate overlays.  We gradually integrated more planners into the FIND unit and by the end of the planning session we had five laptops with planners collaboratively generating tasks to be sent out on the next day.

One of the nicest features of FIND is that it calculates and plots the latest lost person behavior statistics that have been collected and compiled by Bob Koester at dbS SAR.  

![SarModels]({{site.baseurl}}/{{page.folder}}/SubjBehaviorModels.png)

Not having to look up the stats and plot them manually really saves a lot of time, and immeidately directs the search mission planner to the highest priority search areas.  This is particularly important for search managers that may not have years of experience and lots of searches under their belt.



### Briefing and Debriefing
Briefing and debriefing of teams was mostly done manually, but we shadowed the process and duplicated all the steps in the flow so we could see what it would be like to run a search mission using FIND.  

![Briefing]({{site.baseurl}}/{{page.folder}}/Briefing.png)

All teams in the field used maps that FIND generated and they were a big hit, as we could add features to the map and it had the most up to date data.



### Communications and team tracking
The communications log in FIND was used to briefly track team location and status updates.  

![Comms]({{site.baseurl}}/{{page.folder}}/CommLog.png)

The concrete block building we were in caused communication static, but we were able to accurately track, update, and log communications with status.



### Tech
Technology has come and gone in the SAR community.  There are very advanced radio communication systems that integrate with federal, state, and local radio networks across the country.  That aspect of searches is typically very smooth, accounting for the occasional loss of signal due to steep and remote terrain.  The technology at the Incident Command Post for developing and issuing search tasks to field teams hasn't changed much since I first joined a SAR team back in 1993.  The process and terminology is almost exactly the same.  And for good reason, it means that teams that perhaps have never worked or trained together can step into a mission and know exactly what to do and where to go without any time wasted getting to know a variety of terms and unique processes.  

> Our design goal all along was "Google Docs for Searches."

I haven't been active in SAR in over a decade, but I have been active in creating tech to solve operational resource deployment problems, and there is an opportunity to help speed up search planning and management if it's done correctly. While a lost person search is a spatial problem, it's just as much a process problem, and getting that process running smoothly and quickly is the key to getting teams out in the right places in a very short amount of time.  That's the improvement that can help save lives, since we know that the longer lost persons stay missing, the less likely they will be found alive and well. We knew from the start we didn't want to create a GIS application.  Having users run ArcGIS or QGIS themselves would limit us technologically, and create a barrier to entry for new users who aren't familiar with GIS.  Our design goal all along was "Google Docs for Searches."  We wanted a familiar, simple interface, that was 'always on' in terms of getting updates from other users.  Since there is so much teamwork and collaboration on tasks in search planning, that's also central to our design.  One user's new task is immediately visible to all other users, and personnel signing into a search are immediately visible to the staffer briefing teams.  We may do a technology post about the software architecture, but in short we leverage a lot of GDAL, web sockets, Meteor, and MongoDB.  



### Feedback
We had about a dozen people sit down with us during the SAREX with their own laptop, and pull up the search planning interface from our local system that was running the FIND server on a laptop.  This made it easy for folks to pop in, take a look, generate some tasks, brief and debrief teams, and give us feedback all along the way.  Here are some of our favorites.

> "You're my new best friend."

This was right after the mission planner discovered that we had already generated all the tasks needed for the following operational period.

> "It's pretty easy to create tasks"

Drawing tasks is pretty simple in FIND, you just click to add pre-segmented areas and lines together.  You get a tally of the total length or area so you know how long the area should take a search team to complete it.

> "It's great that it's not tied to the internet"

We package an [entire tiled map service]({% post_url 2015-06-02-a-new-topo-map-for-saving-lives %}) along with the software.  It's a ton of work, but since SAR missions are commonly taking place outside of wireless or broadband connections, it's absolutely necessary to operate 'off-grid'.  

The FIND software is part of a trio of tools developed for SAR use.

1. A mobile app that is a handy reference for lost person behavior statistics and recommended early actions in the event of a lost person search.  It's designed for SAR agencies, and first responders who may be leading a search effort for the first time. The LPB App is on the Google Play store, and Apple App Store.
2. The SARCAT records management system for agencies who need to track search incidents.  It has all the data entry needed to report to the International Search and Rescue Incident Database (ISRID).  SARCAT is free and open source.
3. The FIND search management system.  Desktop/laptop server application that hosts a search management system for planning, tracking, and managing a lost person search.

<img style="float: right" src="{{site.baseurl}}/{{page.folder}}/nps_sign.jpg">
