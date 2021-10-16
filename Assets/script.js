var now = moment();
var currentDate = (now.format("MM/DD/YYYY"));
var city =  "";
var searchCity = $("#search-city");
var searchCityButton = $("#search-city-button");

// weather is displayed when user clicks on search button 
searchCityButton.on("click", weatherDisplay);

function weatherDisplay(event) {
    
}