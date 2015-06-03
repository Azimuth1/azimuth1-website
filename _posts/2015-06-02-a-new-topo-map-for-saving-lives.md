---
published: true
layout: post
title: Designing a topo map for search and rescue
subtitle: Using open map data to help save lives outdoors
date: {}
author: jason.dalton
"header-img": "images/topo-bg.png"
---


_This article was originally submitted for presentation at State of the Map US 2015 in NYC_

A child is lost in the forest.  An elderly dementia patient wanders away from home.  A hiker is overdue from a weekend outing.  These scenarios happen daily around the world and wilderness search and rescue teams are called in to find that missing person.  Wilderness SAR teams are specially trained to travel in small groups over varying terrain in all weather, day and night. The lives saved by SAR each year owe their safe return to the training, dedication, and compassion of a largely volunteer SAR response across the globe.  The problem of finding lost individuals starts on a map.  Maps are used to find likely places where the lost person may have stopped, lost their way, or tried to reach, and so are used to prioritize search tasks for a search mission.  The same map is used in the field as a team leader navigates their way through the task, delineating which areas they have searched and where they have not.  A good map is critical to this accurate accounting of the search effort to ensure that the entire area is being covered appropriately. In the United States the map most often used for search missions is the USGS 7.5 minute series topographic map.  These maps have a long history of exhaustive work and meticulous detail that went into each map revision.  As changes in our environment appeared more rapidly, and USGS sought to streamline their map production process to save time, money, and labor, several tradeoffs were made that impacted the usefullness of these maps for SAR purposes.  

### USGS updates their map style

The new USTopo map style has several cartographic improvements for readability on digital devices. They are more flexible in that they are delivered in layered PDF files rather than fixed raster images.  However, many important features were removed or degraded that can impact the ability of SAR teams to accurately navigate and ensure that they have covered an area.

Contour lines are algorithmically generated from digital elevation data rather than from manual photogrammetry.  Faster, cheaper, but lacks details for precise navigation in microterrain. [1]

|Raster Version|New Vector Version|
| :-------------: |:-------------:|
| ![]({{site.baseurl}}/images/USGS_old1.png)| ![]({{site.baseurl}}/images/USGS_new1.png)

Utilities
|Raster Version|New Vector Version|
| :-------------: |:-------------:|
| ![]({{site.baseurl}}/images/USGS_old1.png)| ![]({{site.baseurl}}/images/USGS_new1.png)

Trails
|Raster Version|New Vector Version|
| :-------------: |:-------------:|
| ![]({{site.baseurl}}/images/USGS_old1.png)| ![]({{site.baseurl}}/images/USGS_new1.png)

Buildings

Land Cover

### A new topo map for search missions
To improve the existing topo map, we supplemented the USGS data with features available from the OpenStreetMap database, and other open source licensed data that could be integrated into a topo map tailored for SAR use.
We added back the useful features that USGS had to remove.  

Trails

Utilities

Buildings

Since USGS strives for equal data coverage across the whole United States, they would not include a dataset of trails in a single state for example, even if it was very good.   Our approach is just the opposite.  If we can include only one item listed as 'culvert' and that culvert is useful to a particular search then it's useful to put on our map.  We don't require that we show _every_ culvert before we show _any_ culvert.   This is exactly where OpenStreetMap is a strong dataset.  The completeness of coverage of any of those high level of detail features varies widely across the US, but in places where volunteers have taken the time to map and verify detailed feature data, it is extremely valuable in that area.

### Features for SAR
Some map features that may not be generally applicable or interesting but are useful for searchers to know  valuable for SAR use are included on this topo.

Hospitals, local doctors, and other EMS - medical support in the event of an injury or when the lost person is found and needs medical attention.

Veterinarians - search dog handlers will see any known veterinarian offices from their task map and planning maps. 

Churches - often used as areas to set up base operations and staging areas for volunteers to rest and eat.

Aquaducts - feature where finds are often made.

Trail shelters - possible waiting area for overdue subjects, and navigation points.


You can access the new SAR map here and at <a href="http://azimuth1.kara.link/FIND/" target="_blank">this link</a>.   Please give us your feedback and ideas to make this map more helpful in saving lives outdoors.

<iframe width="800" height="400" src="http://azimuth1.kara.link/FIND/" frameborder="0" allowfullscreen></iframe>

FOOTNOTES

[1] To which everyone says "So use GPS and you get that precision back."  Which is partly true, but even with the growth of GPS and GIS in SAR operations, there are still some real deficiencies.  Getting high quality maps onto GPS is difficult.  Handheld units typically require expensive map upgrades or a complex series of steps to update your own map data.  Mobile phone GPS apps have the ability to display high quality maps, but require precaching of maps before going in the field since mobile coverage isn't usually present.  Then there's the issue of battery life.  Constant navigation over a 6-10 hour task would deplete most phone batteries.  Extra capacity battery cases, rechargers, solar chargers, etc just add to the already significant weight of gear carried by most field searchers.   Then there's the logistics of getting GPS track data back onto a central map at search base.  Without wifi, compliant software, etc, there are just too many possible devices and connections for a thinly staffed search base to accommodate most possibilities.  The future of mobile mapping in SAR is coming, but it stands on battery and interoperability.


