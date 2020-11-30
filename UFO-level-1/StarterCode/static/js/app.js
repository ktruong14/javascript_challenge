// from data.js
var tableData = data;

// Selecting the body
var tbody = d3.select("tbody");

// Creating table
function createTable(data) {

  tbody.html("");
  data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);

    });
  });
};

function runEnter() {

  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData;
  
  // Check if input is not empty then run a filter on date search results
  if (inputValue != "") {
    filteredData = filteredData.filter(date => date.datetime === inputValue)
  };

  // After conditional create table based on filtered date
  createTable(filteredData);

};

// Selecting and creating event handler
d3.select("#filter-btn").on("click", runEnter);

// Create table of data
createTable(tableData);
