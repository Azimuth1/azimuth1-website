---
published: true
layout: post
title: A technical overview of our SAR topo implementation
date: 2015-06-07 12:00:00
author: azimuth1_team
folder: blog/assets/2015-06-07-sar-topo-tech-notes
headerColor: '#fff'
---



As you may have read in our [preceding post](http://www.azimuth1.com/a-new-topo-map-for-saving-lives/), the Search and Rescue (SAR) map we are building seeks to combine the vital features of USGS topographic maps with the ease of use, readability, and<!--more--> higher update frequency of a vector tile based map, in addition to providing supplemental data that may prove useful in SAR related work. This follow-up post is meant to further elaborate on the process behind the SAR map's creation and current status.

## A brief introduction

<img style="float: right" src="{{site.baseurl}}/{{page.folder}}/VA_Old Rag Mtn_topo_thumb.jpg">To start things off, I love the old USGS topographic maps. I love their style. I have a 1984 Old Rag quadrangle hanging above my desk. Those older USGS topos featured more detailed surface features (e.g. trails and utilities) but are, unfortunately, limited by their age and format. Newer USGS topos are generally in <a href="https://en.wikipedia.org/wiki/GeoPDF" target="_blank">GeoPDF</a>, a format which allows for multiple layers that can be toggled depending on the view you want, all enveloped together in a PDF. This comes with its own advantages, however they do not include some of the more specific features one would want for SAR work, as reviewed in [Jason's post](http://www.azimuth1.com/a-new-topo-map-for-saving-lives/). In addition, GeoPDF not a particularly lightweight platform. With our SAR topo we hope to take everything that's great about both the older and newer USGS topographic maps, add in any other data that will prove useful in a search and rescue situation, and provide a fully interactive map that can still be used in offline field situations.

## Picking a platform

When we were first exploring possible platforms for this project, we'd started with <a href="https://www.mapbox.com/" target="_blank">Mapbox</a> and their new map design tool <a href="https://www.mapbox.com/mapbox-studio/#darwin" target="_blank">Mapbox Studio</a>. The initial prototype for the SAR map was inspired by the <a href="https://github.com/mapbox/mapbox-studio-outdoors.tm2" target="_blank">Mapbox Outdoors</a> style and source in Studio. However, we ran into two primary issues.

1. The more data we wanted to incorporate into the map, the less Mapbox Studio seemed suited to our needs. With the wide variety of substantial datasets we're working with, this project just doesn't lend itself to efficient use of the Studio model, which is highly suited to rapid, lightweight web map development and styling.
2. Mapbox does not currently support combining both remote and local data sources for vector tile source creation and styling via Studio, and for the purposes of this prototype we wanted to create something completely independent of sources that require internet access, to support use in the field by searchers.

That being said, Mapbox Studio is a very powerful, and actively evolving design tool. The work we did initially in Studio really provided a foundation for how we decided to move forward with the project. Using both the <a href="http://wiki.openstreetmap.org" target="_blank">OpenStreetMap</a> data and the supplemental SAR data we'd compiled for styling in Studio, we created an `.mbtiles` archive. <a href="https://www.mapbox.com/guides/an-open-platform/" target="_blank">MBTiles</a> is "an efficient format for storing [large vector and raster tilesets] in a single <a href="https://www.sqlite.org/" target="_blank">SQLite</a> database." Once these sources are combined and exported, we can locally host them with relative ease. For this prototype, we're using a simple <a href="https://nodejs.org/">Node</a> server for hosting the tiles in concert with <a href="https://www.mapbox.com/mapbox-gl/" target="_blank">Mapbox GL</a>, Mapbox's OpenGL based vector tile renderer, for the client side rendering. This is further detailed below in **Work Flow**, followed by an overview of all the different datasets we used in **Data Sources and Layers**.

## Work Flow
1. Data wrangling. Compiling all of the necessary data from a wide variety of sources.
    - Running test extracts on OSM data with <a href="https://wiki.openstreetmap.org/wiki/Osmosis" target="_blank">Osmosis</a>.
    - Performing any necessary conversions, e.g. converting the <a href="http://www.mrlc.gov/nlcd2011.php" target="_blank">National Land Cover Data</a> from <a href="https://trac.osgeo.org/geotiff/" target="_blank">GeoTIFF</a> to vector with <a href="http://www.gdal.org/ogr2ogr.html" target="_blank">ogr2ogr</a>.
    - Additional processing with <a href="http://www.qgis.org/en/site/" target="_blank">QGIS</a> and Python <a href="http://pandas.pydata.org/" target="_blank">Pandas</a>.
2. Generate <a href="http://postgis.net/" target="_blank">PostGIS</a> database for OpenStreetMap data using <a href="https://github.com/openstreetmap/osm2pgsql" target="_blank">osm2pgsql</a>.
    - Currently prototyped with an extract of Virginia, if we continue with this method we will have to expand beyond a locally hosted database to include the rest of the necessary OSM data OR switch to a method which caches tiles from a web based map for offline use, as opposed to 100% local hosting.
3. Combine queried OSM data with the additional SAR relevant datasets in Mapbox Studio.
    - See **Data Sources and Layers**.
4. Export vector tileset from Studio for self-hosting.
5. Locally host the .mbtiles archive via Node.
    - The process for setting up a simple Node server for viewing the vector tile set is based on this <a href="http://gis.stackexchange.com/questions/125037/self-hosting-mapbox-vector-tiles" target="_blank">GIS StackExchange thread</a>. It incorporates the node modules <a href="https://www.npmjs.com/package/express" target="_blank">Express</a>, <a href="https://www.npmjs.com/package/tilelive" target="_blank">TileLive</a>, and <a href="https://www.npmjs.com/package/mbtiles" target="_blank">mbtiles</a>
6. Render and style map with Mapbox GL.
    - Prototyped in <a href="https://www.mapbox.com/guides/style-manual/" target="_blank">CartoCSS</a> within MapBox Studio, rewritten in the Mapbox GL JSON structure.
    - Note: Having gone through the process of rewriting all of my Mabox Studio styling in JSON for Mapbox GL, I'd be very interested in seeing a tool for the conversion between the Studio and GL styling languages. I know it's not a perfect "one-to-one" conversion in that they are pretty different systems, but it still seems like a gap in the Mapbox workflow. Maybe this will be filled by the new Mapbox GL Design tool, which is currently in beta.
7. This vector tile rendering utility can be contained within a single local Javascript utility, e.g. <a href="https://github.com/nwjs/nw.js/" target="_blank">NW.js</a>, for simple offline use.
    - The Virginia prototype takes up just under 3 GB, easy to store a flash drive.




## Data Sources and Layers
- United States elevation contours, Source: <a href="ftp://rockyftp.cr.usgs.gov/vdelivery/Datasets/Staged/Elev/" target="_blank">USGS</a>.
- USGS Hydrogeography dataset, Source: <a href="http://nhd.usgs.gov/" target="_blank">USGS NHD</a>.
- National Land Cover Database 2011, Source: <a href="http://www.mrlc.gov/index.php" target="_blank">MRLC</a>.
    - Exploring more recent vector datasets for this.
- Roads, trails, transportation infrastructure, and building footprints, Source: OpenStreetMap.
    - More detailed and regularly updated than comparable USGS data.
- United States interstate and intrastate natural gas pipelines, Source: <a href="http://www.eia.gov/maps/layer_info-m.cfm" target="_blank">EIA</a>.
- United States local natural gas infrastructure, Source: OpenStreetMap.
    - Note: Collected as a supplement to the smaller scale, national level EIA dataset, queried as `man_made=pipeline` and `location!=underground,underwater`.
- United States power lines, Source: OpenStreetMap.
    - Note: No declassified national power infrastructure dataset exists, queried from OSM as `power=line` and `power=minor_line`.
    - Visual buffer around utilities to show potential cleared canopy around power lines, gas lines, etc.
- Shelter locations, Source: OpenStreetMap.
    - Query includes all features `amenity=shelter` and `shelter_type!=public_transport` (e.g. bus shelters, covered train platforms). Unfortunately there are a large number of shelter features that do not include the `shelter_type` tag.   
    - You can see a full listing of all the shelter sub-types in OSM <a href="http://wiki.openstreetmap.org/wiki/Key:shelter_type" target="_blank">here</a>. In addition to features included under `amenity=shelter`, there are a number of other tags that could contain shelters relevant to SAR: e.g. `tourism=wilderness_hut`, `tourism=alpine_hut`, and `building=hut`. For the most part features with these more specific IDs are also tagged with `amenity=shelter`, and those outliers were mostly private residences or paid lodging (at least within the US). Another potentially relevant shelter tag was `shelter_type=rock_shelter`, unfortunately though there are no features currently tagged as such in the US (I guess I'll have to start mapping those on my hikes).
- Emergency Medical Services and Fire Stations, Source: OpenStreetMap.
    - Query includes all features `amenity=clinic`, `amenity=doctors`, `amenity=hospital`, `amenity=veterinary`, `amenity=rescue_station`, and `amenity=fire_station`.
- Churches, frequently used for Incident Command Post (ICP), Source: OpenStreetMap.
    - Query includes all features `amenity=place_of_worship`.
- Mountains and other topographic highs, Source: OpenStreetMap.
    - Query includes all features `natural=peak`.
    - Elevation from OSM is included in label.

You can view the map below and <a href="http://sandlot.azimuth1.net/FIND/" target="blank">here</a>.

<iframe class='mapfembed rofw cofntainer' width="100%" height="380" src="http://sandlot.azimuth1.net/" frameborder="0" allodwfullscreen></iframe>





## As it stands

There are still quite a few things to work on with this prototype, beyond improving general performance: there's a whole lot to be done with the dynamic labeling, we need to add airport information (e.g. runways, boundaries, etc), distinguish dirt roads from paved roads with more distinctive styling, add styling for mines and caves, add pattern overlay for wetlands, update the land cover data, and refine a few of the OSM queries, just to name a few. Blue contour lines over snow or ice cover have been suggested, as well as differentiating between tree canopy type (e.g. deciduous vs coniferous). Please let us know of any additional features you feel could be potentially helpful to SAR efforts that you'd like to see included in the map!

_Note: For the purpose of this web demo, a Mapbox API key is used for access to <a href="https://www.mapbox.com/mapbox-gl-style-spec/#glyphs" target="_blank">glyphs</a> and <a href="https://www.mapbox.com/mapbox-gl-style-spec/#sprite" target="_blank">sprites</a>. At the moment I'm exploring a few of the tools in Mapbox's repo for storing this information locally for offline use, e.g. <a href="https://github.com/mapbox/fontnik" target="_blank">fontnik</a>, <a href="https://github.com/mapbox/node-fontnik" target="_blank">node-fontnik</a>, and <a href="https://github.com/mapbox/spritenik" target="_blank">spritenik</a>. However, I recently learned that Mapbox GL is working towards using <a href="http://www.freedesktop.org/wiki/Software/HarfBuzz/" target="_blank">HarfBuzz</a> for this, which would render local storage for font rendering unnecessary._
