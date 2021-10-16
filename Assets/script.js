var now = moment();
var currentDate = (now.format("MM/DD/YYYY"));
var city =  "";
var searchCity = $("#search-city");
var searchCityButton = $("#search-city-button");

// API key for openweathermap.org
var apiKey = "1514b2ce008df16fa808e34044020461"

// weather is displayed when user clicks on search button 
searchCityButton.on("click", weatherDisplay);

// after running below function it will display weather 
function weatherDisplay(event) {
    event.preventDefault();
    if (searchCity.val().trim() !== "") {
        city - searchCity.val().trim();
        currentWeather(city);


// store previously searched cities in local storage 

        var listedCity = document.getElementById("city-history");
        cityHistory.textContent = "";

        
    
    }
}