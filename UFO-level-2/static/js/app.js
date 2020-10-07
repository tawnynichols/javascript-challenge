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

    // var inputValueDate = inputDate.property("value");
    // var inputValueDate = inputValueDate.replace("","1/1/2010")

    var filtered = tableData

    var filteredCondidtions = {
        datetime: inputValueDate,
        city: inputValueCity,
        state: inputValueState,
        country: inputValueCountry,
        shape: inputValueShape
    }


    // if (inputValueDate.length > 0) {
    //     filteredCondidtions.push({ "datetime": inputValueDate })
    // } else if (inputValueCity.length > 0) {
    //     filteredCondidtions.push({ "city": inputValueCity })
    // }
    console.log(filteredCondidtions)

    // var x = filteredCondidtions.map(({ key, value }) => `\n${key} ${value} `).join('')

    // function isEmpty(o) {
    //     let x = Object.entries(o).every(([k, v]) => v !== null);
    //     return Object.entries(o).every(([k, v]) => v !== null);
    // }

    // if (isEmpty(filteredCondidtions)) {
    //     console.log(x);
    // }
    let result = !Object.values(report).every(o => o === null);
    console.log(result);


    // for (x in filteredCondidtions) {
    //     var filteredData = filtered.filter(Element => (Element.datetime === [x].values))
    //     console.log(filteredCondidtions)
    // }



    //console.log(filteredData)

    // if (inputValueDate.length > 0) {
    //     var filteredData = filtered.filter(Element => (Element.datetime === inputValueDate))
    //         //filtered.push(filteredData)
    // } else if (inputValueCity.length > 0) {
    //     var filteredData = filtered.filter(Element => (Element.city === inputValueCity))
    //         //filtered.push(filteredData)
    // }


    // var filteredArray = filteredData.filter(el => {
    //     return el.type == filterConditionType && el.colors.some(e => {
    //         return filterConditionColors.some(ele => ele == e);
    //     });
    // });


    // else {
    //     var inputValueCity = wildcard;
    // }

    // var inputValueCity = inputCity.property("value");
    // var inputValueCity = inputValueCity.replace("","el cajon") 

    // if (inputState === '') {
    //     var inputValueState = wildcard;
    // } else {
    //     var inputValueState = inputState.property("value");
    // }

    // if (inputValueCountry === '') {
    //     var inputValueCountry = wildcard;
    // } else {
    //     var inputValueCountry = inputCountry.property("value");
    // }

    // if (inputValueShape === '') {
    //     var inputValueShape = wildcard;
    // } else {
    //     var inputValueShape = inputShape.property("value");
    // }


    // Log event for error handling
    console.log(inputValueDate);
    console.log(inputValueCity);
    console.log(inputValueState);
    console.log(inputValueCountry);
    console.log(inputValueShape);
    console.log(filtered);

    // filter data based on elements
    // var filteredData = filtered.filter(Element => (Element.datetime === inputValueDate) || (Element.city === inputValueCity) || (Element.state === inputValueState) || (Element.country === inputValueCountry) || (Element.shape === inputValueShape));

    // var filteredData = tableData.filter(Element => (Element.datetime === inputValueDate)); //Filter just on one element

    // || (Element.city === inputValueCity) || (Element.city === inputValueState) || (Element.city === inputValueCountry) || (Element.state === inputValueShape)); //filter on all elements

    // Log event for error handling
    //console.log(filteredData);

    // Filter data on elements
    // filteredData.forEach((filteredData) => {
    //     var row = tbody.append("tr");
    //     Object.entries(filteredData).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     })
    // })

    // If there is no type selected, return all objects:
    if (inputValueDate === '' && inputValueCity === '' && inputValueState === '' && inputValueCountry === '' && inputValueShape === '') {
        tableData.forEach((tableData) => {
            var row = tbody.append("tr");
            Object.entries(tableData).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
        })

    } else {
        // Filter data on elements
        filteredData.forEach((filteredData) => {
            var row = tbody.append("tr");
            Object.entries(filteredData).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
        })
    }

}