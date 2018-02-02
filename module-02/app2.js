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

//**********************************Adding Axes********************************
//
// An axis is a line with ticks that provide a way to visually measure the distance between certain points in a graph. D3 provides a set of functions for creating an axis.
//
// The axisTop() and axisBottom() functions are used for creating a horizontal axis. The axisLeft() and axisRight() functions are used for creating a vertical axis.
//
// Unlike scales, these functions will draw the SVG elements for you. It's good practice to store these generated elements inside a group so they can be moved and managed easily.
//
// You can use CSS to refine the outcome of your SVG shapes. The more cleaner a shape looks, the more resources is required to render it.

//***********************************Customizing Axes**************************
//
// The ticks() function allows you to set a number of ticks an axis should have. The number will only be taken as a suggestion.
//
// The tickValues() function will allow you to completely control how many ticks are outputted along with the actual values themselves. D3 will take the time to space them out.
//
// The tickFormat() function will allow you to format the text that gets outputted for each tick. You are provided the data for each tick so you can manipulate it appropriately.

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

// create Axis
var x_axis = d3.axisBottom(x_scale); //d3.axisBottom.scale(x_axis)
svg.append('g')
  .attr('class', 'x-axis')
  .attr('transform', 'translate(0,' +(chart_height-padding)+')'
  )
  .call(x_axis);

var y_axis = d3.axisLeft(y_scale)
  .ticks(5); // d3.axisLeft.scale(y_scale) .tickValues([]) for setting exact val
svg.append('g')
  .attr('class', 'y-axis')
  .attr('transform', 'translate('+(padding)+',0)'
  )
  .call(y_axis);


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
svg.append('g')
  .selectAll('text')
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
