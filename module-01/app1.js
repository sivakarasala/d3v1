// ********************************Selections***********************************
//
// Selections are objects that represent the HTML on your page. D3 will take care of creating these objects and fill them with properties/methods for you to use
//
// If you call the append() method, then the selection will also be updated to the element created.


// selects html body for performing any d3 data joins
// var el = d3.select('body');
// console.log(el);

// selects all paragraph tags
// var el = d3.selectAll('p')
// console.log(el)

// add elements to html body
// var el = d3.select('body')
//             .append('p');
// console.log(el);


// **************************Manipulating Selections***************************


// Transformation methods are just functions that change how an element appears or works.
//
// The attr() method will add the attribute you pass in. It's important to note that this will completely override an attribute if it already exists.
//
// A better alternative to adding classes to an element is by using the classed() method. If class exists, then it will not be removed if you try to add it.
//
// Make sure you know what's being returned. Some methods will return the current selection or an entire new one. Check the documentation to make sure.


// adding attributes
// var el = d3.select('body')
//             .append('p')
//             .attr('class', 'shiva')
//             .text('Hello Rudra!');
// console.log(el);

// adding multiple attributes
// var el = d3.select('body')
//   .append('p')
//   .attr('class', 'shiva')
//   .attr('class', 'hara')
//   .text('Hello Rudra!');
// console.log(el);

// adding multiple classes with class() method
// var el = d3.select('body')
//   .append('p')
//   .classed('shiva', true)
//   .classed('hara', true)
//   .text('Hello Rudra!');
// console.log(el);

// styling elements
// var el = d3.select('body')
//   .append('p')
//   .classed('shiva', true)
//   .classed('hara', true)
//   .text('Hello Rudra!')
//   .style('color','skyblue');
// console.log(el);
