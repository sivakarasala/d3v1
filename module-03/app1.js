//***********************Band scales for Bar charts**************************

// You can use numeric data as ordinal data if you wish. Instead of using the numbers themselves, you can use their index.
//
// The band width is the distance between number in the band range. D3 provides a function called bandwidth() which will calculate this for you without the padding.
//
// Band scales were made specifically for bar charts so it's recommended you use them.

// see below for info about updating the bar chart 

var data = [6, 20, 14, 24, 3, 7, 17, 23, 2, 6, 25, 11, 26, 9, 12]

// Create SVG element
var chart_width = 800;
var chart_height = 400;
var bar_padding = 5;

var svg = d3.select('#chart')
  .append('svg')
  .attr('width', chart_width)
  .attr('height', chart_height);

// create scales
// 800/15 =53.33
// 0 - 0; 1 - 53.33
var x_scale = d3.scaleBand()
  .domain(d3.range(data.length))
  .rangeRound([0, chart_width]) // rangeRound to round values
  .paddingInner(0.05);

var y_scale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, chart_height]);

// Bind data and create bars
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr("x", function(d, i) {
    return x_scale(i); // 0 - 0, 1 - 30, 2 - 60
  })
  .attr("y", function(d) {
    return chart_height - y_scale(d);
  })
  .attr("width", x_scale.bandwidth())
  .attr("height", function(d) {
    return y_scale(d);
  })
  .attr('fill', '#7ED26D');

// create labels
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(function(d) {
    return d;
  })
  .attr("x", function(d, i) {
    return x_scale(i) + (x_scale.bandwidth()) / 2;
  })
  .attr("y", function(d) {
    return chart_height - y_scale(d) + 15;
  })
  .attr('font-size', 15)
  .attr('fill', '#fff')
  .attr('text-anchor', 'middle');

//******************************Updating bar chart****************************

// There are 3 situations you'll find yourself in when it comes to updating data. This can be a change in original data, an addition or a removal.
//
// Changes in data usually occur during an event. By default, D3 supports all JavaScript events by using the on() function on a selection.
//
// The reverse() function is a JavaScript array function that will take care of reversing the values in your array.
//
// You can bind your data to the elements again to let D3 be aware of the change. You will have to redraw only the elements affected and only change the attributes that were affected.

// Events
d3.select('button').on('click', function() {
  // console.log('Om Namah Shivaya!');
  data.reverse();
  svg.selectAll('rect')
    .data(data)
    .attr("y", function(d) {
      return chart_height - y_scale(d);
    })
    .attr("height", function(d) {
      return y_scale(d);
    });
  // create labels
  svg.selectAll('text')
    .data(data)
    .text(function(d) {
      return d;
    })
    .attr("x", function(d, i) {
      return x_scale(i) + (x_scale.bandwidth()) / 2;
    })
    .attr("y", function(d) {
      return chart_height - y_scale(d) + 15;
    })

});
