// Scatter plots allow you to chart large amounts of data. They are circles that represent 2 pieces of data. They can also vary in size to show more impact over others.
//
// Creating a scatter plot is similar to bar graph. You create the elements, bind the data,  create more elements for the data and add details.
//
// You can use the join() function to combine arrays to strings. This can be useful for displaying coordinates stored in arrays.
//
// Math is used to position and set the size of elements. D3 can take care of the more complex operations so you don't have to.

//********************************Adding Scales*******************************

// The d3.max() and d3.min() functions can be passed in accessor functions for complex array and object structures.
//
// An accessor function is a function that returns a value that's used for grabbing certain data from an object or array.
//
// Adding padding to your visualizations is common so that shapes and text don't get cut off from the viewing area.
//
// You can reverse the range and D3 will take care of scaling the values appropriately for you.

// D3 provides various scales for various scenarios. An official list of scales can be found on the D3 Scales library.
//
// Each scale can be used for scaling different types of shapes such as the scaleSqrt() function for circles.
//
// Some scales are used for data that don't contain numeric values such as colors or categorical data.

var data = [
  [400, 200],
  [210, 140],
  [722, 300],
  [70, 160],
  [250, 50],
  [110, 280],
  [699, 225],
  [90, 220]
];

var chart_width = 800;
var chart_height = 400;
var padding = 50;

// create SVG Element
var svg = d3.select('#chart')
  .append('svg')
  .attr('width', chart_width)
  .attr('height', chart_height);

// create Scales
var x_scale = d3.scaleLinear()
  .domain([0, d3.max(data, function(d) {
    return d[0];
  })])
  .range([padding, chart_width - padding * 2]);

var y_scale = d3.scaleLinear()
  .domain([0, d3.max(data, function(d) {
    return d[1];
  })])
  .range([chart_height - padding, padding]); // reversed range

var r_scale = d3.scaleLinear()
  .domain([0, d3.max(data, function(d) {
    return d[1];
  })])
  .range([5, 30]);

var a_scale = d3.scaleSqrt()
  .domain([0, d3.max(data, function(d){
    return d[1];
  })])
  .range([0,25]);

// create circles
svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function(d) {
    return x_scale(d[0]);
  })
  .attr('cy', function(d) {
    return y_scale(d[1]);
  })
  .attr('r', function(d) {
    return a_scale(d[1]);
  })
  .attr('fill', '#D1AB0E');

// create labels
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(function(d) {
    return d.join(',');
  })
  .attr('x', function(d) {
    return x_scale(d[0]);
  })
  .attr('y', function(d) {
    return y_scale(d[1]);
  });
