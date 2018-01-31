# Notes

## Setting Up
* It’s always good practice to set the character encoding of your HTML documents. When working with [D3](https://d3js.org/) you’ll be dealing with a lot of data so it’s important that everything works as intended.
* [GitHub](https://github.com/) is a site that allows you to store and share code with other developers. Most libraries are hosted on it.
- Most libraries come with a minified version which is meant for production when you’re finished with your project. Use the standard version during development.
+ D3 is split into multiple libraries for developers who only want to load what they’re going to use. The main library includes everything at once for your convenience.

## Selections
* As far as D3 is concerned, data is only text and numbers. Other types of data such as images, audio files, and videos will not work with D3 as “data”.
- D3 bridges the gap between your data and the visualization (the HTML and CSS).
+ Selections are objects that represent the HTML on your page. D3 will take care of creating these objects and fill them with properties/methods for you to use.
* If you call the append() method, then the selection will also be updated to the element created.

## Manipulating Selections
* Transformation methods are functions that change how an element looks internally. This includes attributes or the elements inside it.
* The **__attr()__** method will add the attribute you pass in. It’s important to note that this will completely override an attribute if it already exists.
* A better alternative to adding classes to an element is by using the class() method. If a class exists, then it will not be removed if you try to add it.
* You should always make sure you know what’s being returned. Some methods will return the current selection or an entire new one. Check the documentation to make sure.

## Binding Data
* D3 has something called a waiting room when you bind data to an element. If data can’t be bound to an element, then the data will be placed inside the waiting room.
* To access the data in the waiting room you need to call the enter() function. This will begin looping through each piece of data.
* The minute you create an element in the loop, D3 will bind the current piece of data to that element. This is done automatically for you.
* It’s always good practice to put the data into the waiting room rather than having elements prepared already.

## Displaying Data
* Each element has access to the data it's binded to. You can use this as an opportunity to change the outcome of the element.
* Each transformation function can accept an anonymous function which will be passed to the current data in the loop.

## Loading Data Externally
* D3 supports 3 file formats which are plain text, csv and json. You can load each of these functions provided by the D3 request library.
* CSV files are comma separated values. Each line is considered a row. Each comma separated value is considered a column. The first row is used as the column names.
* D3 takes the time to convert CSV data into objects and arrays depending on how it’s formatted.
* JSON files hardly get affected as they’re objects and arrays to begin with. It’s preferable to use JSON data rather than CSV for consistency.
