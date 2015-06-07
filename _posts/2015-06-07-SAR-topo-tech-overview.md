---
published: false
layout: post
title: The SAR Topographic Map
subtitle: A technical overview
date: {2015-06-07 12:00:00}
author: Kara Mahoney
"header-img": "images/post_header_6715.png"
---

# FIND: Search and Rescue Topographic Map

As you may have read in our [preceding post](http://www.azimuth1.com/a-new-topo-map-for-saving-lives/), Azimuth1's Search and Rescue (SAR) map seeks to combine the vital features of USGS topographic maps with the ease of use, readability, and higher update frequency of a vector tile based map, in addition to providing supplemental data that may prove useful in SAR related work. This next post is meant to further elaborate on the process behind the SAR map's creation and current status. 

#### A brief introduction

To start things off, I love the old USGS topographic maps. I love their style. I've got a 1984 Old Rag quadrangle hanging above my desk. Those older USGS topos featured more detailed surface features (e.g. trails and utilities) but are, unfortunately, limited by their age and format. Newer USGS topos are generally in [GeoPDF](https://en.wikipedia.org/wiki/GeoPDF), a format which allows for multiple layers that can be toggled depending on the view you want, all enveloped together in a PDF. This comes with its own advantages, however they do not include some of the more specific features one would want for SAR work, as reviewed in [Jason's post](http://www.azimuth1.com/a-new-topo-map-for-saving-lives/). In addition, GeoPDF not a particularly lightweight platform. With our SAR topo we hope to take everything that's great about both the older and newer USGS topographic maps, add in any other data that may prove useful in a search and rescue situation, and provide a fully interactive map that can still be used in offline field situations.

#### Picking a platform

When we were first exploring possible platforms for this project, we'd started with [Mapbox](https://www.mapbox.com/) and their newly released tool [Mapbox Studio](https://www.mapbox.com/mapbox-studio/#darwin). The initial prototype for the SAR map was built using the [Mapbox Outdoors](https://github.com/mapbox/mapbox-studio-outdoors.tm2) style and source in Studio. However, we ran into two primary issues. 

1. The more data we wanted to incorporate into the map, the less Mapbox Studio seemed suited to our needs. With the wide variety of substantial datasets we're working with, this project just doesn't lend itself to efficient use of the Studio model, which is highly suited to rapid, lightweight web map development and styling.
2. Mapbox does not currently support combining both remote and local data sources for vector tile source creation and styling via Studio, and for the purposes of this prototype we wanted to create something completely independent of sources that require internet access.

That being said, Mapbox Studio is a very powerful, and actively evolving design tool. The work we did initially in Studio really provided a foundation for how we decided to move forward with the project. Using both the [OpenStreetMap](http://wiki.openstreetmap.org) data and the supplemental SAR data we'd compiled for styling in Studio, we created an `.mbtiles` archive. [MBTiles](https://www.mapbox.com/guides/an-open-platform/) is "an efficient format for storing [large vector and raster tilesets] in a single [SQLite](https://www.sqlite.org/) database." Once these sources are combined and exported, we can locally host them with relative ease. For this prototype, we're using a simple [Node](https://nodejs.org/) server for hosting the tiles in concert with [Mapbox GL](https://www.mapbox.com/mapbox-gl/), Mapbox's OpenGL based vector tile renderer, for the client side rendering. This is further detailed below in **Work Flow**, followed by an overview of all the different datasets we used in **Data Sources and Layers**.

#### Work Flow

1. Data wrangling. Compiling all of the necessary data from a wide variety of sources.
    - Running test extracts on OSM data with [Osmosis](https://wiki.openstreetmap.org/wiki/Osmosis).
    - Performing any necessary conversions, e.g. converting the [National Land Cover Data](http://www.mrlc.gov/nlcd2011.php) from [GeoTIFF](https://trac.osgeo.org/geotiff/) to vector with [ogr2ogr](http://www.gdal.org/ogr2ogr.html).
    - Additional processing with [QGIS](http://www.qgis.org/en/site/) and Python [Pandas](http://pandas.pydata.org/).
2. Generate [PostgreSQL](http://www.postgresql.org/)/[PostGIS](http://postgis.net/) database for OpenStreetMap data using [osm2pgsql](https://github.com/openstreetmap/osm2pgsql).
    - Currently prototyped with an extract of Virginia, if we continue with this method we will have to expand beyond a locally hosted database to include the rest of the necessary OSM data OR switch to a method which caches tiles from a web based map for offline use, as opposed to 100% local hosting.
3. Combine queried OSM data with the additional SAR relevant datasets in Mapbox Studio.
    - See **Data Sources and Layers**.
4. Export vector tileset from Studio for self-hosting.
5. Locally host the .mbtiles archive via Node.
    - The process for setting up a simple Node server for viewing the vector tile set is based on this [GIS StackExchange thread](http://gis.stackexchange.com/questions/125037/self-hosting-mapbox-vector-tiles). It incorporates the node modules [Express](https://www.npmjs.com/package/express), [tileive](https://www.npmjs.com/package/tilelive), and [mbtiles](https://www.npmjs.com/package/mbtiles).
6. Render and style map with Mapbox GL.
    - Prototyped in [CartoCSS](https://www.mapbox.com/guides/style-manual/) within MapBox Studio, rewritten in the Mapbox GL JSON structure.
    - _Note: Having gone through the process of rewriting all of my Mabox Studio styling in JSON for Mabpox GL, I'd be very interested in seeing a tool for the conversion between the Studio and GL styling languages. I know it's not a perfect "one-to-one" conversion in that they are pretty different systems, but it still seems like a gap in the Mapbox workflow. Maybe this will be filled by the new Mapbox GL Design tool, which is currently in beta._
7. This vector tile rendering utility can be contained within a single local Javascript utility, e.g. [NW.js](https://github.com/nwjs/nw.js/), for simple offline use.
    - The Virginia prototype takes up just under 3 GB, easy to store a flash drive.

#### Data Sources and Layers

- United States elevation contours, Source: [USGS](ftp://rockyftp.cr.usgs.gov/vdelivery/Datasets/Staged/Elev/).
- USGS Hydrogeography dataset, Source: [USGS NHD](http://nhd.usgs.gov/).
- National Land Cover Database 2011, Source: [MRLC](http://www.mrlc.gov/index.php).
    - Exploring more recent vector datasets for this.
- Roads, trails, transportation infrastructure, and building footprints, Source: OpenStreetMap.
    - More detailed and regularly updated than comparable USGS data.
- United States interstate and intrastate natural gas pipelines, Source: [EIA](http://www.eia.gov/maps/layer_info-m.cfm).
- United States local natural gas infrastructure, Source: OpenStreetMap.
    - Note: Collected as a supplement to the smaller scale, national level EIA dataset, queried as `man_made=pipeline` and `location!=underground,underwater`.
- United States power lines, Source: OpenStreetMap.
    - Note: No declassified national power infrastructure dataset exists, queried from OSM as `power=line` and `power=minor_line`.
    - Visual buffer around utilities to show potential cleared canopy around power lines, gas lines, etc.
- Shelter locations, Source: OpenStreetMap.
    - Query includes all features `amenity=shelter` and `shelter_type!=public_transport` (e.g. bus shelters, covered train platforms). Unfortunately there are a large number of shelter features that do not include the `shelter_type` tag.   
    - You can see a full listing of all the shelter sub-types in OSM [here](http://wiki.openstreetmap.org/wiki/Key:shelter_type). In addition to features included under `amenity=shelter`, there are a number of other tags that could contain shelters relevant to SAR: e.g. `tourism=wilderness_hut`, `tourism=alpine_hut`, and `building=hut`. For the most part features with these more specific IDs are also tagged with `amenity=shelter`, and those outliers were mostly private residences or paid lodging (at least within the US). Another potentially relevant shelter tag was `shelter_type=rock_shelter`, unfortunately though there are no features currently tagged as such in the US (I guess I'll have to start mapping those on my hikes).
- Emergency Medical Services and Fire Stations, Source: OpenStreetMap.
    - Query includes all features `amenity=clinic`, `amenity=doctors`, `amenity=hospital`, `amenity=veterinary`, `amenity=rescue_station`, and `amenity=fire_station`.
- Churches, frequently used for Incident Command Post (ICP), Source: OpenStreetMap.
    - Query includes all features `amenity=place_of_worship`.
- Mountains and other topographic highs, Source: OpenStreetMap.
    - Query includes all features `natural=peak`.
    - Elevation from OSM is included in label.

You can view the map below and [here](http://sandlot.azimuth1.net/FIND/).

<iframe class='mapembed' width="800" height="380" src="http://sandlot.azimuth1.net/FIND/" frameborder="0" allowfullscreen></iframe>

#### As it stands

There are still quite a few things to work on with this prototype, beyond improving general performance: there's a whole lot to be done with the dynamic labeling, we need to add airport information (e.g. runways, boundaries, etc), distinguish dirt roads from paved roads with more distinctive styling, add styling for mines and caves, add pattern overlay for wetlands, update the land cover data, refine a few of the OSM queries, to name a few. Blue contour lines to designate snow or ice cover have been suggested, as well as differentiating between tree canopy type (e.g. deciduous vs coniferous). Please let us know of any additional features you feel could be potentially helpful to SAR efforts that you'd like to see included in the map!

_Note: For the purpose of this web demo, a Mapbox API key is used for access to [glyphs](https://www.mapbox.com/mapbox-gl-style-spec/#glyphs) and [sprites](https://www.mapbox.com/mapbox-gl-style-spec/#sprite). At the moment I'm exploring a few of the tools in Mapbox's repo for storing this information locally for offline use, e.g. [fontnik](https://github.com/mapbox/fontnik), [node-fontnik](https://github.com/mapbox/node-fontnik), and [spritenik](https://github.com/mapbox/spritenik). However, I recently learned that Mapbox GL is working towards using [HarfBuss](https://wiki.freedesktop.org/www/Software/HarfBuzz/) for this, which would render local storage for font rendering unnecessary._