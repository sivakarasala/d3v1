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
var el = d3.select('body')
            .append('p');
console.log(el);
