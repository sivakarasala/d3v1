// D3 can be used to create any type of visualization. It's not biased towards any chart or graph.
//
// Adobe color is tool that allows you to find great color combinations and even build your own.
//
// You can use the data to change the outcome of the bar chart. Most commonly used to manipulate the height.

var data = [ 10,20,30,40,50 ]

var el = d3.select("#chart")
  .selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .attr("class","bar") //classed('bar', true)
  .style("height", function(d){
    var height = d * 3;
    return height+"px";
  })
  ;
