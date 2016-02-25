---
published: true
layout: post
title: Designing a topo map for search and rescue
subtitle: Using open map data to help save lives outdoors
date: 2015-06-02 12:00:00
author: jason_dalton
folder: blog/assets/2015-06-02-a-new-topo-map-for-saving-lives
headerColor: '#000'
---
 
A child is lost in the forest.  An elderly dementia patient wanders away from home.  A hiker is overdue from a weekend outing.  These scenarios happen daily around the world and wilderness search and rescue teams are called in to find<!--more--> that missing person.  Wilderness SAR teams are specially trained to travel in small groups over varying terrain in all weather, day and night. The lives saved by SAR each year owe their safe return to the training, dedication, and compassion of a largely volunteer SAR response across the globe.  The mission of finding lost individuals often starts on a map.  Maps are used to find likely places where the lost person may have stopped, lost their way, or tried to reach, and so are used to prioritize search tasks for a search mission.  The same map is used in the field as team leaders navigate their way through the task, delineating which areas they have searched and where they have not.  A good map is critical to this accurate accounting of the search effort to ensure that the entire area is being covered appropriately. In the United States, the map most often used for search missions is the US Geological Survey (USGS) <a href="http://en.wikipedia.org/wiki/Quadrangle_%28geography%29" target="_blank">7.5 minute series topographic map</a>.  These maps have a long history of exhaustive work and meticulous detail that went into each map revision.    

## Then USGS updated their maps

In 2009, the USGS began changing the style and delivery of their topo maps under the new <a href="http://nationalmap.gov/ustopo/" target="_blank">US Topo</a> program.  As changes in our environment appeared more rapidly, the USGS sought to streamline their map production process to increase production, save time, money, and labor. Several tradeoffs were made that impacted the usefullness of these maps for SAR purposes. The new US Topo map style has several cartographic improvements for readability on digital devices, and they are delivered in more flexible layered PDF files rather than fixed raster images.  However, many important features were removed or degraded that can impact the ability of SAR teams to accurately navigate and ensure that they have covered an area.

The new contour lines are algorithmically generated from digital elevation data rather than from manual photogrammetry.  Faster, cheaper, but lacks details for precise navigation in microterrain [^1].




<html>
<div class="row row-centered mar2">
<div class="col-xs-6 col-centered pad0"><h4 class="text-center">Pre-2009 Raster Contours</h4><img class="img-responsive" src="{{ site.baseurl }}/{{page.folder}}/USGS_old1.png"></div>
<div class="col-xs-6 col-centered pad0"><h4 class="text-center">Current Vector Contours</h4><img class="img-responsive" src="{{ site.baseurl }}/{{page.folder}}/USGS_new1.png"></div>
</div>
</html>




Utility lines, like trails, are often used by lost persons to travel.  They are an important feature for search task planning and navigating in the field.


<html>
<div class="row row-centered mar2">
<div class="col-xs-6 col-centered pad0"><h4 class="text-center">Pre-2009 Raster utilities</h4><img class="img-responsive" src="{{ site.baseurl }}/{{page.folder}}/USGS_old2.png"></div>
<div class="col-xs-6 col-centered pad0"><h4 class="text-center">Current Vector maps without utilities</h4><img class="img-responsive" src="{{ site.baseurl }}/{{page.folder}}/USGS_new2.png"></div>
</div>
</html>

   

Trails were removed from the new US Topo series - a critical feature to know about for search and rescue.


<html>
<div class="row row-centered mar2">
<div class="col-xs-6 col-centered pad0"><h4 class="text-center">Pre-2009 Raster trails</h4><img class="img-responsive" src="{{ site.baseurl }}/{{page.folder}}/USGS_old3.png"></div>
<div class="col-xs-6 col-centered pad0"><h4 class="text-center">Current Vector maps without trails</h4><img class="img-responsive" src="{{ site.baseurl }}/{{page.folder}}/USGS_new3.png"></div>
</div>
</html>


Buildings were removed from the new US Topo series.  They just change much faster than the topo map series are updated.



<html>
<div class="row row-centered mar2">
<div class="col-xs-6 col-centered pad0"><h4 class="text-center">Pre-2009 Raster buildings</h4><img class="img-responsive" src="{{ site.baseurl }}/{{page.folder}}/usgs-bldg-old.png"></div>
<div class="col-xs-6 col-centered pad0"><h4 class="text-center">Current Vector maps without  buildings</h4><img class="img-responsive" src="{{ site.baseurl }}/{{page.folder}}/usgs-bldg-new.png"></div>
</div>
</html>


---

## So we made a new topo map for search missions
Azimuth1 is part of a team working on support tools for first responders formed by Robert Koester of <a href="http://dbs-sar.com/" target="_blank">dbS Productions</a>, a long time lost person behavior researcher and publisher for SAR related topics. The work is supported by the First Responder Group within the DHS Office of Science and Technology. Azimuth1 is providing the tech strategy and design component of the program and among other things, we are undertaking an effort to improve the existing topo map to better support search missions.  We've supplemented the USGS data with features available from the OpenStreetMap database, and other open source licensed data, that could be integrated into a topo map tailored for SAR use.

First, we added back the useful features that USGS had to remove [^2].  

**Trails**  
![]({{ site.baseurl }}/{{page.folder}}/sar-contour.png){: width="100%"}

**Utilities**  
![]({{ site.baseurl }}/{{page.folder}}/sar-utility.png){: width="100%"}

**Buildings**  
![]({{ site.baseurl }}/{{page.folder}}/sar-bldg.png){: width="100%"}

Since USGS strives for equal data coverage across the whole United States, it would not include a dataset of trails in a single state, even if it was very good. Our approach is just the opposite. If we can include only one item listed as 'culvert' and that culvert is useful to a particular missing person search then it's useful to put on our map.  In other words, we don't require that we show _every_ culvert before we show _any_ culvert.  The mapping of these detailed features varies widely across the country. But in places where volunteers have taken the time to map and verify detailed feature data, it is extremely valuable to searchers in that area.  This is exactly why OpenStreetMap is such a valuable dataset for custom mapping.

### Features for SAR
Second, we added map features that were specifically chosen to help searchers:

**Medical** - local doctors, and other EMS - medical support in the event of an injury or when the lost person is found and needs medical attention.  Search dog handlers will now see any known veterinarian offices from their task map and planning maps.  
![]({{ site.baseurl }}/{{page.folder}}/sar-hospital.png){: width="100%"}

**Churches** - often used as areas to set up base operations and staging areas for volunteers to rest and eat.   
![]({{ site.baseurl }}/{{page.folder}}/sar-church.png){: width="100%"}

**Aquaducts** - feature where finds are often made.   
![]({{ site.baseurl }}/{{page.folder}}/sar-aquaduct.png){: width="100%"}

**Shelters** - possible waiting area for overdue subjects, and navigation points.   
![]({{ site.baseurl }}/{{page.folder}}/sar-shelter.png){: width="100%"}



You can access the new SAR map below and at <a href="http://sandlot.azimuth1.net/FIND/" target="_blank">this link</a>. Right now, we're just hosting the state of Virginia (our home state) but will have the whole US available very soon.

SAR folks! Please give us your feedback and ideas to make this map more helpful in saving lives outdoors.   And look for our next post in this series where we detail the data, technology, and processing used to create these maps.

#### Test drive our topo for the state of Virginia
<iframe class='mapembed' width="800" height="380" src="http://sandlot.azimuth1.net/" frameborder="0" allowfullscreen></iframe>


See [part 2]({% post_url 2015-06-07-sar-topo-tech-notes %}) of this article where we detail the tech approach to creating the SAR map.

=======


**FOOTNOTES**

<span class="small em">This article was originally submitted for presentation at <a href="http://stateofthemap.us/" target="_blank">State of the Map US</a> 2015 in NYC
</span>

[^1]: To which everyone says "So use GPS and you get that precision back."  Which is partly true, but even with the growth of GPS and GIS in SAR operations, there are still some real deficiencies.  Getting high quality maps onto GPS units is difficult.  Handheld units typically require expensive map upgrades or a complex series of steps to update your own map data.  Mobile phone GPS apps have the ability to display high quality maps, but require precaching of maps before going in the field since mobile coverage isn't usually available.  Then there's the issue of battery life.  Constant navigation over a 6-10 hour task would deplete most phone batteries.  Extra capacity battery cases, rechargers, solar chargers, etc just add to the already significant weight of gear carried by most field searchers.   Then there's the logistics of getting GPS track data back onto a central map at search base.  Without wifi, compliant software, etc, there are just too many possible devices and connections for a thinly staffed search base to accommodate most possibilities.  The future of mobile mapping in SAR is coming, but right now it stands on the weak shoulders of battery life and interoperability.  Then there's the issue of training.  If a team leader loses or breaks a GPS unit, we don't want them to be out of commission until a new one can be found.  The essential skills of precise land navigation with map and compass will be in our forseeable future, so we want to provide a map that searchers deserve.

[^2]: There aren't any up to date sources of the high precision contour lines available to our knowledge, so we haven't been able to replace the contour lines.  The new <a href="http://www.geo-airbusds.com/worlddem/" target="_blank">WorldDEM</a> high resolution elevation data for the globe from Airbus that is coming available now might make the high resolution contours possible again.

