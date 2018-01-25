// **********************Loading Data Externally - d3-request *****************
//
// d3-request module has built-in support for parsing JSON, CSV and TSV; in browsers, but not in Node, HTML and XML are also supported. You can parse additional formats by using request or text directly.
//
// ******************************Additional Notes******************************
//
// It's always good practice to set the character encoding of your HTML documents. When working with D3 you'll be dealing with a lot of data so it's important that everything works as intended.
//
// GitHub is a site that allows you to store and share code with other developers. Most libraries are hosted on it.
//
// Most libraries come with a  minified version which is meant for production when you're finished with your project. Use the standard version during development.
//
// D3 is split into multiple libraries for developers who only want to load what they are going to use. The main library includes everything at once for your convenience.

// D3 supports 3 file formats which are plain text, csv and json. You can load each of these using functions provided by the D3 request library.
//
// CSV files are comma separated values. Each line is considered a row. Each comma separated value is considered a column. The first row is used as the column names.
//
// D3 takes the time to convert CSV data into objects and arrays depending on how it’s formatted.
//
// JSON files hardly get affected as they’re objects and arrays to begin with. It’s preferable to use JSON code rather than CSV for consistency.

// loading csv data
d3.csv('data.csv', function(err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
  generate(data.columns);
});

// loading json data
d3.json('data.json', function(err, data) {
  if (err) {
    return console.log(err);
  }

  // console.log(data);
  // generate(data);
})

function generate(dataset) {
  var el = d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(function(d) {
      return 'Om Namah Shivaya ' + d;
    })
    .style('color', function(d) {
      if (d > 25) {
        return 'orange';
      } else {
        return 'Skyblue';
      }
    });
}
