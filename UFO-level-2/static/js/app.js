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
form.on("submit", runEnter);

//Load data by default
tableData.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })
})

// Complete the event handler function for the form
function runEnter() {

    //Clear table before rendering
    var tb = document.getElementById('ufo-table');
    while (tb.rows.length > 1) {
        tb.deleteRow(1);
    }

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input element 
    var inputValueDate = inputDate.property('value');
    var inputValueCity = inputCity.property("value");
    var inputValueState = inputState.property("value");
    var inputValueCountry = inputCountry.property("value");
    var inputValueShape = inputShape.property("value");

    // filter data based on elements
    var filtered = tableData

    var filteredData = filtered.filter(Element => {
        return ((Element.datetime === inputValueDate) || (!inputValueDate)) &&
            ((Element.city === inputValueCity) || (!inputValueCity)) &&
            ((Element.state === inputValueState) || (!inputValueState)) &&
            ((Element.country === inputValueCountry) || (!inputValueCountry)) &&
            ((Element.shape === inputValueShape) || (!inputValueShape))
    })

    // Filter data on elements
    filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })

}