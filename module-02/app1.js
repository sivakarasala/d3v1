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

var el = d3.select("#chart")
  .selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .attr("class", "bar") //classed('bar', true)
  .style("height", function(d) {
    var height = d * 3;
    return height + "px";
  });
