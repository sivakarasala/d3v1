//***************************** Scales ***********************************

// Scales are functions that take your data and will lower or increase the values so that they can be used for visualization.
//
// The input domain is the original set of data. It's the highest and lowest numbers in your data.
//
// The output name is the numbers that the original data should be scaled to. These would usually be size of the viewing area.
//
// The D3 array library is a utility library that provides functions for working with arrays no matter how complex. It's included in the core by default so you don't need to do anything to set it up.

var slices = [100, 200, 300, 400, 500];

// create scales
var scale = d3.scaleLinear()
  .domain([d3.min(slices), d3.max(slices)])
  .range([10, 350]);

//*********************************Time Scales*******************************

// Dates in your data will almost likely come in a format that neither D3 nor JavaScript can understand. D3 only works with Date Objects.
//
// There are a set of functions that will take care of reading your formatted dates and converting them into date objects to use with scales and vice versa.
//
// MomentJS is also a popular library for converting dates. You can use this if you're comfortable with it.
//
// D3's time scale will read your dates and convert them into numbers that can be used to visualize your data.


var data = [{
    date: '07/01/2017',
    num: 20
  },
  {
    date: '07/02/2017',
    num: 37
  },
  {
    date: '07/03/2017',
    num: 25
  },
  {
    date: '07/04/2017',
    num: 45
  },
  {
    date: '07/05/2017',
    num: 23
  },
  {
    date: '07/06/2017',
    num: 33
  },
  {
    date: '07/07/2017',
    num: 49
  },
  {
    date: '07/08/2017',
    num: 40
  },
  {
    date: '07/09/2017',
    num: 36
  },
  {
    date: '07/10/2017',
    num: 27
  }
];

var time_parse = d3.timeParse('%m/%d/%Y');
var time_format = d3.timeFormat('%b %e');

var chart_width = 800;
var chart_height = 400;
var padding = 50;

// Loop through each date
data.forEach(function(e, i) {
  data[i].date = time_parse(e.date);
})

// create svg element
var svg = d3.select('#chart')
  .append('svg')
  .attr('width', chart_width)
  .attr('height', chart_height);

// create x_scale
var x_scale = d3.scaleTime()
  .domain([d3.min(data, function(d) {
    return d.date;
  }),
  d3.max(data, function(d){
    return d.date;
  })])
  .range([padding, chart_width - padding * 2]);

var y_scale = d3.scaleTime()
  .domain([0, d3.max(data, function(d) {
    return d.num;
  })])
  .range([chart_height - padding, padding]);

var a_scale = d3.scaleSqrt()
  .domain([0, d3.max(data, function(d) {
    return d.num;
  })])
  .range([0, 25]);

// create x-axis
var x_axis = d3.axisBottom()
  .scale(x_scale)
  .tickFormat(time_format);
svg.append('g')
  .attr('class', 'x-axis')
  .attr('transform','translate(0,'+(chart_height-padding)+')'
  )
  .call(x_axis);

// create circles
svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function(d){
    return x_scale(d.date);
  })
  .attr('cy', function(d){
    return y_scale(d.num);
  })
  .attr('r', function(d){
    return a_scale(d.num);
  })
  .attr('fill', 'orange');

// create labels
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(function(d){
    return time_format(d.date);
  })
  .attr('x', function(d){
    return x_scale(d.date);
  })
  .attr('y', function(d){
    return y_scale(d.num);
  });
