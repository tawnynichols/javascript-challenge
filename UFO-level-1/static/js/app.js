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
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
  
    // Get the value property of the input element
    var inputValueDate = inputDate.property("value");
    var inputValueCity = inputCity.property("value");
    var inputValueState = inputState.property("value");
  
  
    // Log event for error handling
    console.log(inputValueDate);
    console.log(inputValueCity);
    console.log(inputValueState);

    // filter data based on elements
    var filteredData = data.filter(Element => (Element.datetime === inputValueDate) && (Element.city == inputValueCity) && (Element.state == inputValueState));
  
    // Log event for error handling
    console.log(filteredData);

    // If there is no type selected, return all objects:
	if (inputValueDate === '' && inputValueCity === '' && inputValueState === '') {
        tableData.forEach((tableData) => {
            var row = tbody.append("tr");
            Object.entries(tableData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            }) })

    } else {
    // Filter data on elements
     filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        }) })
    }

}
