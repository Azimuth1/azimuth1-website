---
published: true
layout: post
title: EnviMetric's New Feature - Flow Path Following Plumes
subtitle: How we're using digital elevation models to make our groundwater plume models more representative of non-linear flow path conditions.
date: 2022-06-29
author: anna_harrington
folder: blog/assets/2022-06-29-flowpathfollowingplumes
headerColor: '#FFFFFF'
headerImage: 'header.png'
---
Since 2017, Daybreak (previously Azimuth1) has been funded by the National Science Foundation to build a machine learning technology to be used during site investigation of contaminated groundwater sites.  During the course of this [technology](https://testazimuth1site.com/products/envimetric/)'s development, we’ve spoken with hundreds of environmental engineers, geologists, project managers and property owners in the environmental site investigation and remediation space.
          
When discussing many contaminated sites across the country, we learned that many professionals work at sites with non-linear predominant groundwater flow direction.  Because so many of our customers wished to be able to ‘warp’ our linear modeling output to better fit their non-linear groundwater flow direction, we decided to build that functionality into our modeling output to streamline their workflow and provide better value.

## Our Approach

Our basic approach for converting linear plume geometries into non-linear or curved geometries is as follows: identify the major and medial axes of our linear plume, apply curvature to the major axis while maintaining the length values of the medial axes, construct the new curved plume area using warped medial axes endpoints as nodes of the plume polygon.

Step 1

![I1]({{site.baseurl}}/{{page.folder}}/step1.png){:class="img-fluid" width="30%"}

Step 2

![I2]({{site.baseurl}}/{{page.folder}}/step2.png){:class="img-fluid" width="30%"}

Step 3

![I3]({{site.baseurl}}/{{page.folder}}/step3.png){:class="img-fluid" width="30%"}

To be able to do this, we needed to find the predominant flow path using the topography of the contaminated site–this way we can incorporate plume curvature by having the plume’s major axis direction mirror what would be the flow path from the source of the site’s topography.

Using the USGS digital elevation models, we identified the flowpath at each contaminated site from the source, then performed flowline processing.  Our flowline processing simplified and then smoothed the flowline; this smoothed flowline is what we then used for our curved plume’s major axis. Check out an example of this processing below!

![I4]({{site.baseurl}}/{{page.folder}}/flowlineprocessing.png){:class="img-fluid" width="80%"}


## The results

Below you can check out an example of our new technique applied at a contaminated site.  This is a leaking underground storage tank site located in Florida.  The red shows the real world observed plume extent at the site.  The blue shows the original linear EnviMetric model at the site oriented to reflect the customer’s provided groundwater flow direction.  The green shows the new, non-linear EnviMetric model projection based on topography of the site.  

![I5]({{site.baseurl}}/{{page.folder}}/example.png){:class="img-fluid" width="80%"}

This new technical development is already available on the EnviMetric out for users to try out.   Our approach cuts down on customer’s post EnviMetric model run processing time and provides a more representative model output, leading to better site investigation results.



**Interested in hearing more from us? [Subscribe](https://www.azimuth1.com/envimetric-insights.html) to our mailing list so you never miss an update!**






