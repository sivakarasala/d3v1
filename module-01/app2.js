// *********************************Binding Data********************************
//
// D3 has something called a waiting room when you bind data to an element. If data can't be bound to an element, then the data will be placed inside the waiting room.
//
// To access the data in the waiting room you need to call the enter() function. This will begin looping through each piece of data.
//
// The minute you create an element in the loop, D3 will bind the current piece of data to that element. This is done automatically for you.
//
// It's always good practice to put the data into the waiting room rather than having elements prepared already.

var dataset  = [10,20,30,40,50]

// dynamically binding data to the elements
// var el = d3.select('body')
//   .selectAll('p')
//   .data(dataset)
//   .enter()
//   .append('p')
//   .text('Om Namah Shivaya!')
//   .style('color', 'orange');
//
// console.log(el);

// add 2 p elements in the html body
// binding data to different elements
// var el = d3.select( 'body' )
//   .selectAll( 'p' )
//   .data( dataset )
//   .enter()
//   .append( 'div' )
//   .text( 'Om Namah Shivaya' )
//   .style( 'color', 'orange' );
//
// console.log(el);

// binding data to elements
// var el = d3.select( 'body' )
//   .selectAll( 'p' )
//   .data( dataset )
//   .enter()
//   .append( 'p' )
//   .text( 'Om Namah Shivaya!!!' )
//   .style( 'color', 'orange' );
//
// console.log(el);

// ********************************Displaying Data****************************
//
// Each element has access to the data it's binded to. You can use this as an opportunity to change the outcome of the element.
//
// Each transformation function(attr,classed,style,text..etc.,) can accept an anonymous function which will be passed the current data in the loop.

var el = d3.select( 'body' )
  .selectAll( 'p' )
  .data( dataset )
  .enter()
  .append( 'p' )
  .text(function( d ){
    return 'Om Namah Shivaya ' + d;
  })
  .attr( 'class', function(d){
    if( d > 25 ){
      return 'rudra';
    }else{
      return null;
    }
  })
  .classed( 'hara' , function(d){
    return d < 25; // 10 < 25 true, 40 < 25 false
  })
  .style( 'color', function( d ){
    if( d > 25 ){
      return 'orange';
    }else{
      return 'skyblue';
    }
  });

console.log(el);
