// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);



// function clear() {
//     tbody.remove()
//     console.log("Click")
// }    

// Complete the event handler function for the form
function runEnter() {

    //Clear table before rendering
    var tb = document.getElementById('ufo-table');
        while(tb.rows.length > 1) {
        tb.deleteRow(1);
    }

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Log event for error handling
    console.log(inputValue);

    var filteredData = data.filter(Element => Element.datetime === inputValue);
  
    // Log event for error handling
    console.log(filteredData);

    // Filter data on datetime
    filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

}
  
