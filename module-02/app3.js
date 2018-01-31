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
