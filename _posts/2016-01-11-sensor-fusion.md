---
published: true
layout: post
title: Updated Sensor Fusion calculator
subtitle: The latest version that calculated Bayesian probablility updates for a combination of sensors.
date: 2017-01-11 10:00:00
author: jason_dalton
folder: blog/assets/2017-01-11-sensor-fusion
headerColor: '#fff'
replaceHeaderImage: '#334d00'
---

### Quick Start Guide

Click the "Calculate" button to generate probabiilties updated through Bayesian reasoning after 10 simulated sensor observations. 

You can change the <!--more--> values of each observation's Sensor Accuracy and the resulting detection reading from the sensor.

<div class="container"> &nbsp; &nbsp;
<table id="assumptions" border="1">
<tr>
<td>Starting probability P[H]:</td>
<td contentEditable="true">0.0001</td>
</tr>
</table>
<p>
<h3>Bayesian Sensor Fusion Calculator</h3>
<div class="CSSTableGenerator" >
<table id="dataTable" border="1">
<tr>
<th>Observation:</th>
<th>Sensor Accuracy [0.0 - 1.0]</th>
<th>Sensor Reading [True, False]</th>
<th>Updated Probability</th>
</tr>
<tr>
<td>1</td>
<td contentEditable="true" min="0.0" max="1.0">0.9</td>
<td>
<select>
  <option value="True">True</option>
  <option value="False">False</option>
</select>
</td>
<td>0</td>
</tr>
<tr>
<td>2</td>
<td contentEditable="true">0.9</td>
<td>
<select>
  <option value="True">True</option>
  <option value="False">False</option>
</select>
</td>
<td>0</td>
</tr>
<tr>
<td>3</td>
<td contentEditable="true">0.9</td>
<td>
<select>
  <option value="True">True</option>
  <option value="False">False</option>
</select>
</td>
<td>0</td>
</tr>
<tr>
<td>4</td>
<td contentEditable="true">0.9</td>
<td>
<select>
  <option value="True">True</option>
  <option value="False">False</option>
</select>
</td>
<td>0</td>
</tr>
<tr>
<td>5</td>
<td contentEditable="true">0.9</td>
<td>
<select>
  <option value="True">True</option>
  <option value="False">False</option>
</select>
</td>
<td>0</td>
</tr>
<tr>
<td>6</td>
<td contentEditable="true">0.9</td>
<td>
<select>
  <option value="True">True</option>
  <option value="False">False</option>
</select>
</td>
<td>0</td>
</tr>
<tr>
<td>7</td>
<td contentEditable="true">0.9</td>
<td>
<select>
  <option value="True">True</option>
  <option value="False">False</option>
</select>
</td>
<td>0</td>
</tr>
<tr>
<td >8</td>
<td contentEditable="true">0.9</td>
<td>
<select>
  <option value="True">True</option>
  <option value="False">False</option>
</select>
</td>
<td>0</td>
</tr>
<tr>
<td>9</td>
<td contentEditable="true">0.9</td>
<td>
<select>
  <option value="True">True</option>
  <option value="False">False</option>
</select>
</td>
<td>0</td>
</tr>
<tr>
<td>10</td>
<td contentEditable="true">0.9</td>
<td>
<select>
  <option value="True">True</option>
  <option value="False">False</option>
</select>
</td>
<td>0</td>
</tr>
</table>
</div>
<form>
<input type="button" onclick="bayesUpdates()" value="Calculate">
</form>

<script>
function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    [' ', ' '],
    ['1',   .0008989],
    ['2',   .0080357],
    ['3',   .0679530],
    ['4',   .3961956],
    ['5',   .8551877],
    ['6',   .9815326],
    ['7',   .9979138],
    ['8',   .9997678],
    ['9',   .9999742],
    ['10',  .9999971]
  ]);

// Create and populate the data table.
        var options = {
          title: 'Updated probability',
          curveType: "function",
          width: 600,
          height: 400,
          vAxis: {maxValue: 1},
          legend: {position: 'none'}
        };

  // Create and draw the visualization.
      new google.visualization.LineChart(document.getElementById('visualization')).
          draw(data, options);
      };
      google.setOnLoadCallback(drawVisualization);
</script>


<h3> How to use this calculator</h3>

<p>This page calculates the updated probability of an anomaly or target by updating the probability to account for new evidence coming from a sensor.  We have provided some example numbers for the Starting Probability and the Probability of Detection of your sensors - you will need to enter your own values for your work.  The calculator will then provide updated probabilities for up to 10 observations from any sensor POD you provide.   You can also specify when a sensor gives a reading of 'False' or 'Non-detect'. For sensors that provide a measurement or concentration, you should use a threshold and for all sensor readings above your threshold, indicate a readong of 'True'. A more advanced approach would be to model the POD as a function of the sensor reading rather than a fixed threshold.   If there is enough interest, we'll add that function.</p>

<h3> What's this all about?</h3>


<p>All sensors and detectors used in environmental site characterization have an inherent probability of detection that is based on the attributes of the sensor.  How sensitive it is, the internal electrical noise dampening, and environmental factors all lead to an uncertain result when a sensor indicates the presence of some target compound.  Of course, this can be generalized to any sensor or anomaly detection system.  There is some chance that the system will indicate the presense of an anomaly when it doesn't really exist.  That is called a false positive, or a Type I error.  This uncertainty in the results, plus the rarity of the target compounds means that even with a positive sensor response, the probability that the target is actually there can still be quite low.   Many people find this difficult to understand, and while there are many descriptions and explanations of Bayes Theorem online, we find this calculator lets you explore different settings of your sensors and results, leading to a better undersanding of how to apply Bayes Theorem.  Some good exercises to try:

<ul>
<li>Set a Sensor POD value of 0.5 and observe the effect this has on the Updated Probability.</li>
<li>Set a Sensor Reading to False and observe the effect this has on the Updated Probability.</li>
</p>

