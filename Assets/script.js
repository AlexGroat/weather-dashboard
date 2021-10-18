var date = moment().format('L');
var nextDay = moment().add(1, 'days').calendar();
var twoDays = moment().add(2, 'days').calendar();
var threeDays = moment().add(3, 'days').calendar();
var fourDays = moment().add(4, 'days').calendar();
var fiveDays = moment().add(5, 'days').calendar();


$(document).ready(function () {


    var searchedCitiesArray = [];

    var forecastDays = ["1", "2", "3", "4", "5"];

    var localStorageArray = JSON.parse(localStorage.getItem("cities"));

    if (localStorageArray) {
        arrayForCities = localStorageArray;
    }

    function searchCity(city) {

        var APIKey = "1514b2ce008df16fa808e34044020461";

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey

        var uvUrl = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=37.75&lon=-122.37&cnt=0&appid=" + APIKey;


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // today's weather main section
            $('h4').text("5-Day Forecast");

            $(".city").html("<h3>" + response.city.name + "  " + date + "  ");

            var todaysWeather = response.list[0].weather[0].main;

            var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;

            $(".tempreature").text("Tempreature: " + tempF.toFixed(2) + "°F");

            $(".humidity").text("Humidity: " + response.list[0].main.humidity + "%");

            $(".wind").text("Wind Speed: " + response.list[0].wind.speed + " MPH")




            // day 1 weather forecast
            var tempOne = (response.list[2].main.temp - 273.15) * 1.80 + 32;

            $(".1").html("<div id='day' class='float-child1'>" + nextDay + "<br>" + "<h7>" + response.list[2].weather[0].main + "<br>" + "<div>" + "temp: " + tempOne.toFixed(2) + "°F" + "<br>" + "Humidity: " + response.list[2].main.humidity + "%");

            var dayOne = response.list[2].weather[0].main;

            // day 2 weather forecast
            var tempTwo = (response.list[10].main.temp - 273.15) * 1.80 + 32;

            $(".2").html("<div id='day' class='float-child2'>" + twoDays + "<br>" + "<h7>" + response.list[10].weather[0].main + "<br>" + "<div>" + "temp: " + tempTwo.toFixed(2) + "°F" + "<br>" + "Humidity: " + response.list[10].main.humidity + "%");

            var dayTwo = response.list[10].weather[0].main;


            // day 3 weather forecast
            var tempThree = (response.list[18].main.temp - 273.15) * 1.80 + 32;

            $(".3").html("<div id='day' class='float-child3'>" + threeDays + "<br>" + "<h7>" + response.list[18].weather[0].main + "<br>" + "<div>" + "temp: " + tempThree.toFixed(2) + "°F" + "<br>" + "Humidity: " + response.list[18].main.humidity + "%");

            var dayThree = response.list[18].weather[0].main;



            // day 4 weather forecast
            var tempFour = (response.list[26].main.temp - 273.15) * 1.80 + 32;

            $(".4").html("<div id='day' class='float-child4'>" + fourDays + "<br>" + "<h7>" + response.list[26].weather[0].main + "<br>" + "<div>" + "temp: " + tempFour.toFixed(2) + "°F" + "<br>" + "Humidity: " + response.list[26].main.humidity + "%");

            var dayFour = response.list[26].weather[0].main;

            // day 5 weather forecast
            var tempFive = (response.list[34].main.temp - 273.15) * 1.80 + 32;

            $(".5").html("<div id='day' class='float-child5'>" + fiveDays + "<br>" + "<h7>" + response.list[34].weather[0].main + "<br>" + "<div>" + "temp: " + tempFive.toFixed(2) + "°F" + "<br>" + "Humidity: " + response.list[34].main.humidity + "%");

            var dayFive = response.list[34].weather[0].main;

            // conditional for icon for current weather
            if (todaysWeather === "Rain") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/rainy.png", width: "50", height: "50" }))

            } else if (todaysWeather === "Clear") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/sun.png", width: "50", height: "50" }))
            } else if (todaysWeather === "Clouds") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/cloudy.png", width: "50", height: "50" }))
            }

            // day one weather
            if (dayOne === "Rain") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/rainy.png", width: "50", height: "50" }))

            } else if (dayOne === "Clear") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/sun.png", width: "50", height: "50" }))
            } else if (dayOne === "Clouds") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/cloudy.png", width: "50", height: "50" }))
            }

            // day 2 weather 

            if (dayTwo === "Rain") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/rainy.png", width: "50", height: "50" }))

            } else if (dayTwo === "Clear") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/sun.png", width: "50", height: "50" }))
            } else if (dayTwo === "Clouds") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/cloudy.png", width: "50", height: "50" }))
            }

            //day 3 weather 

            if (dayThree === "Rain") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/rainy.png", width: "50", height: "50" }))

            } else if (dayThree === "Clear") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/sun.png", width: "50", height: "50" }))
            } else if (dayThree === "Clouds") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/cloudy.png", width: "50", height: "50" }))
            }

            // day 4 weather 

            if (dayFour === "Rain") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/rainy.png", width: "50", height: "50" }))

            } else if (dayFour === "Clear") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/sun.png", width: "50", height: "50" }))
            } else if (dayFour === "Clouds") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/cloudy.png", width: "50", height: "50" }))
            }

            // day 5 weather

            if (dayFive === "Rain") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/rainy.png", width: "50", height: "50" }))

            } else if (dayFive === "Clear") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/sun.png", width: "50", height: "50" }))
            } else if (dayFive === "Clouds") {
                $("h3").append($("<img>", { id: "rain", src: "assets/images/cloudy.png", width: "50", height: "50" }))
            }

            // display uv index on weather card

            $.ajax({
                url: uvUrl,
                method: "GET"
            }).then(function (response) {

                $(".uv").html("UV Index: " + "<button type='button' id='uv' class='btn btn-danger'>" + response[0].value);

                var uvLevel = response[i].value;

                if (i = 0, i > 4, i++) {
                    uvLevel.$("#uv").css("background-color", "green");
                } else if (uvLevel === 5 || uvLevel === 6 || uvLevel === 7) {
                    $("#uv").css("background-color", "yellow");
                } else {
                    $("#uv").css("background-color", "red");
                }
            });



            // creates div for forecast

            function fiveDayForecast() {
                $("#weather").empty();
                for (var i = 0; i < todaysWeather.length; i++) {
                    var appendDiv = $("<div>");
                    appendDiv.addClass(todaysWeather[i]);
                    appendDiv.attr("data-names", todaysWeather[i]);
                    $("#weather").append(appendDiv);
                }
            }


            // button is created from search

            function renderButtons() {
                $("#cityList").empty();
                for (var i = 0; i < searchedCitiesArray.length; i++) {
                    var appendButton = $("<button class='btn btn-primary'>");
                    appendButton.addClass("city-btn");
                    appendButton.attr("data-name", searchedCitiesArray[i]);
                    appendButton.text(searchedCitiesArray[i]);
                    $("#cityList").append(appendButton);


                    localStorage.setItem('cities', JSON.stringify(searchedCitiesArray));

                }
            }



