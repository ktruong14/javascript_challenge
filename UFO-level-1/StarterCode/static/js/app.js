// from data.js
var tableData = data;

// Selecting the body
var tbody = d3.select("tbody");

// Creating table
function createTable(data) {

  // Clearing existing data
  tbody.html("");
  // Loop Through 'data' and each ufo sighting object
  data.forEach((ufoSightings) => {
    // Using d3 to append one table row 'tr' for each ufo sighting object
    var row = tbody.append("tr");
    // Use 'Object.entries' to console.log each ufo sighting value
    Object.entries(ufoSightings).forEach(([key, value]) => {
      // Appending a cell to the row for each value in the ufo sightings object
      var cell = row.append("td");
      cell.text(value);

    });
  });
};

// Creating a function to filter data
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Defining variable filtered data
  var filteredData = tableData;
  
  // Check if date input is not empty then run a filter on date search results
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
