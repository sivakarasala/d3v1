// Scatter plots allow you to chart large amounts of data. They are circles that represent 2 pieces of data. They can also vary in size to show more impact over others.
//
// Creating a scatter plot is similar to bar graph. You create the elements, bind the data,  create more elements for the data and add details.
//
// You can use the join() function to combine arrays to strings. This can be useful for displaying coordinates stored in arrays.
//
// Math is used to position and set the size of elements. D3 can take care of the more complex operations so you don't have to.

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

// create SVG Element
var svg = d3.select('#chart')
  .append('svg')
  .attr('width', chart_width)
  .attr('height', chart_height);

// create circles
svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function(d) {
    return d[0];
  })
  .attr('cy', function(d) {
    return d[1];
  })
  .attr('r', function(d) {
    return d[1] / 10;
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
    return d[0];
  })
  .attr('y', function(d) {
    return d[1];
  });
