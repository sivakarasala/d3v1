// D3 can be used to create any type of visualization. It's not biased towards any chart or graph.
//
// Adobe color is tool that allows you to find great color combinations and even build your own.
//
// You can use the data to change the outcome of the bar chart. Most commonly used to manipulate the height.

// var data = [ 10,20,30,40,50 ]

// Generating random data can help battle test your graph as it allows you to cover most scenarios.
//
// There are situations where clients may not be able to provide you data so you'll be responsible for generating dummy data in the mean time.
//
// The D3 random library takes care of generating random data for you.

// generating random data
var data = [];

for (i = 0; i < 20; i++) {
  // Math.round()
  var num = Math.floor(Math.random() * 50);
  data.push(num);
}

// d3.select("#chart")
//   .selectAll('div')
//   .data(data)
//   .enter()
//   .append('div')
//   .attr("class", "bar") //classed('bar', true)
//   .style("height", function(d) {
//     var height = d * 3;
//     return height + "px";
//   });

// Generate bar using SVG elements

// Moving SVG elements requires that you change their x and y coordinates. The X coordinate goes from left to right and the Y coordinate goes from top to bottom.
//
// If you're reusing the values, then you should store it in a variable. This makes it easy to change later on if you ever need to.
//
// Labels are a way to identify a shape. Users will be able to better understand compare your visualization if you provide labels.
//
// Text anchoring is special to SVG. You can determine whether text gets pushed from its side or center point.

// Create SVG element
var chart_width = 800;
var chart_height = 400;
var bar_padding = 5;

var svg = d3.select('#chart')
  .append('svg')
  .attr('width', chart_width )
  .attr('height', chart_height);

// Bind data and create bars
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr("x", function(d,i){
    return i*(chart_width/data.length); // 0 - 0, 1 - 30, 2 - 60
  })
  .attr("y", function(d){
      return chart_height - d*5;
  })
  .attr("width", chart_width/data.length - bar_padding)
  .attr("height", function(d){
    return d*5;
  })
  .attr('fill', '#7ED26D');

// create labels
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(function(d){
    return d;
  })
  .attr("x", function(d,i){
    return i*(chart_width/data.length) + (chart_width/data.length - bar_padding)/2;
  })
  .attr("y", function(d){
      return chart_height - d*5 +15;
  })
  .attr('font-size', 15)
  .attr('fill', '#fff')
  .attr('text-anchor', 'middle');
