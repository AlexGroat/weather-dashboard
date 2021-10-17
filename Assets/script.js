var now = moment();
var currentDate = (now.format("MM/DD/YYYY"));
var city = "";
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

        var historyListedCity = document.getElementById("city-history");
        historyListedCity.textContent = "";

        var citySearchHistory = localStorage.getItem("searchedCities");
        if (citySearchHistory === null) {
            citySearchHistory = [];
        } else {
            citySearchHistory = JSON.parse(citySearchHistory);
        }

        citySearchHistory.push(city);

        var cityHistoryNames = JSON.stringify(citySearchHistory);
        localStorage.setItem("city-history", cityHistoryNames);

        // makes list for previously searched cities

        for (i = 0; i < citySearchHistory.length; i++) {
            var historyList = document.createElement("li");
            historyList.setAttribute("id", "city-historyList");
            historyList.textContent = citySearchHistory[i];
            historyListedCity.appendChild(historyList);
        }

    }
}

