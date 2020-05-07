---
published: true
layout: post
title: Bayesian updating for sensor fusion
date: 2014-03-07 12:00:00
author: jason_dalton
folder: blog/assets/2014-03-07-sensorbayes
headerColor: '#fff'
---

Bayesian statistics are useful for handling uncertainty of outcomes in many situations. With the growth of small-sats, the latest generation of small and relatively cheap sensors for Earth imaging, the precision <!--more-->and resolution is far less than the best high-end commercial imaging, so there it becomes even more important to understand how to quantify and account for errors when detecting objects in these images. In the course of teaching spatial statistics for GeoINT, I've found that it's useful to have a good grasp of the concept of probability of detection, false positives, and how to bring that information together mathematically to estimate the posterior probabilities for detecting things from space.  

## Quick Start Guide

The table below is a calculator for computing the actual probability of a detected object from a sensor, accounting for multiple looks at an object, and for positive and negative results.  You can edit the values for the starting, or prior, probability, the sensor detection accuracy, and whether there was a detection or not [True or False]

The probablility updates come from Bayes Theorem, which allows us to update probabilities based on new evidence.

\\[  P\[target \| evidence\] = \frac{P\[evidence \| target\] \times P\[target\]}{P\[evidence\]}
\\]


Click the "Calculate" button to generate probabilities updated through Bayesian reasoning after 10 simulated sensor observations. You can change the values of each observation's Sensor Accuracy and the resulting detection reading from the sensor.
<html>
<script type="text/javascript" src="//www.google.com/jsapi"></script>
    <script type="text/javascript"
            src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
    </script>
<table id="assumptions" border="1">
<tr>
<td>Starting probability P[H]:</td>
<td contentEditable="true">0.0001</td>
</tr>
</table>

<h3>Bayesian Sensor Fusion Calculator</h3>

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

<form>
<input type="button" onclick="bayesUpdates()" value="Calculate">
</form>

<div id="visualization" style="width: 600px; height: 400px;"></div>
</html>

## How to use the calculator

This page calculates the updated probability of an anomaly or target by updating the probability to account for new evidence coming from a sensor. We have provided some example numbers for the Starting Probability and the Probability of Detection of your sensors - you will need to enter your own values for your work. The calculator will then provide updated probabilities for up to 10 observations from any sensor POD you provide. You can also specify when a sensor gives a reading of 'False' or 'Non-detect'. For sensors that provide a measurement or concentration, you should use a threshold and for all sensor readings above your threshold, indicate a reading of 'True'.

<html>

<script>
      google.load('visualization', '1', {packages: ['corechart']});


function bayesUpdates(){
var P=document.getElementById('assumptions').rows[0].cells[1].innerHTML;
var x=document.getElementById('dataTable');

  for (var i=1;i<11;i++){
    var reading = x.rows[i].cells[2].children[0].selectedIndex;
    var pod = x.rows[i].cells[1].innerHTML;
    if (reading == 1) {
        pod = 1-pod;
    }
    var Pe = P*pod + (1-P)*(1-pod);
    x.rows[i].cells[3].innerHTML=(P * pod / Pe).toFixed(7);  //Baysian update
    P = (P * pod / Pe);  //set Prior P to the newly calculated estimate
  }
}

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







</html>


## What's this all about?

All sensors and detectors used in environmental site characterization or GeoINT have an inherent probability of detection that is based on the attributes of the sensor. How sensitive it is, the internal electrical noise dampening, environmental factors, and operator proficiency all lead to an uncertain result when a sensor indicates the presence of some target of interest. This can be generalized to any sensor or anomaly detection system, whether automated, or human driven. There is some chance that the system will indicate the presense of an anomaly when it doesn't really exist. That is called a false positive, or a Type I error. This uncertainty in the results, plus the rarity of the target compounds means that even with a positive sensor response, the probability that the target is actually there can still be quite low. Many people find this difficult to understand, and while there are many descriptions and explanations of Bayes Theorem online, I find this calculator lets you explore different settings of your sensors and results, leading to a better undersanding of how to apply Bayes Theorem. Some good exercises to try:

* Set a Sensor POD value of 0.5 and observe the effect this has on the Updated Probability.
* Set a Sensor Reading to False and observe the effect this has on the Updated Probability.
