//***************************Scatter Plot********************************
//
// The axis needs to be updated when your data changes drastically. If not, then the data can be inaccurately read.
//
// You do not need to pass in the scales again as D3 will be able to detect those changes for you and update the axis appropriately.
//
// You are allowed to animate the axis by chaining the transition(), delay() and duration() functions.

// Clip path allow you to hide portions of a shape that appears outside of its viewing area.
//
// It's more efficient to group your elements together and then apply a clipping path rather than applying clip paths to each element individually.
//
// Transitions have events called start and end. The start event is triggered when the transition begins. The end transition event is triggered when the transition ends. Each element will have their own transition events.
//
// You can have multiple transitions occurring on the page. However, you can't have multiple transitions applied to the same element at the same time or else the previous transitions will be cancelled.

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

// Clip paths
svg.append("clipPath")
  .attr('id', 'plot-area-clip-path')
  .append('rect')
  .attr('x', padding)
  .attr('y', padding)
  .attr('width', chart_width - padding * 3)
  .attr('height', chart_height - padding * 2);

// create Axis
var x_axis = d3.axisBottom(x_scale); //d3.axisBottom.scale(x_axis)
svg.append('g')
  .attr('class', 'x-axis')
  .attr('transform', 'translate(0,' + (chart_height - padding) + ')')
  .call(x_axis);

var y_axis = d3.axisLeft(y_scale)
  .ticks(5); // d3.axisLeft.scale(y_scale) .tickValues([]) for setting exact val
svg.append('g')
  .attr('class', 'y-axis')
  .attr('transform', 'translate(' + (padding) + ',0)')
  .call(y_axis);


// create circles
svg.append('g')
  .attr('id', 'plot-area')
  .attr('clip-path', "url(#plot-area-clip-path)")
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function(d) {
    return x_scale(d[0]);
  })
  .attr('cy', function(d) {
    return y_scale(d[1]);
  })
  .attr('r', 15)
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

// Events
d3.select('button').on('click', function() {
  // Create Random Data
  data = [];
  var max_num = Math.random() * 1000;
  for (var i = 0; i < 8; i++) {
    var new_x = Math.floor(Math.random() * max_num);
    var new_y = Math.floor(Math.random() * max_num);
    data.push([new_x, new_y]);
  }

  // Update Scales
  x_scale.domain([0, d3.max(data, function(d) {
    return d[0];
  })]);
  y_scale.domain([0, d3.max(data, function(d) {
    return d[1];
  })]);

  var colors = [
    '#F26D6D', '#1E6190', '#7559D9', '#D1AB0E'
  ];
  var color_index = Math.floor(Math.random() * colors.length);

  // Update circles
  svg.selectAll('circle')
    .data(data)
    .transition()
    .duration(1000)
    // .on('start', function(){
    //   d3.select(this)
    //     .attr('fill', '#F26D2D');
    // })
    .attr('cx', function(d) {
      return x_scale(d[0]);
    })
    .attr('cy', function(d) {
      return y_scale(d[1]);
    })
    // .on('end', function(){
    //   d3.select(this)
    //     .attr('fill', colors[color_index]);
    // })
    .transition()
    .attr('fill', colors[color_index]);
  // update labels
  svg.selectAll('g')
    .selectAll('text')
    .data(data)
    .transition()
    .duration(1000)
    .text(function(d) {
      // console.log(d.join(','));
      return d.join(',');

    })
    .attr('x', function(d) {
      return x_scale(d[0]);
    })
    .attr('y', function(d) {
      return y_scale(d[1]);
    });

  // Update axis
  svg.select(".x-axis")
    .transition()
    .duration(1000)
    .call(x_axis);

  svg.select(".y-axis")
    .transition()
    .duration(1000)
    .call(y_axis);
});
