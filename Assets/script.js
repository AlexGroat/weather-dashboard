var date=moment().format('L');
var nextDay=moment().add(1, 'days').calendar(); 
var twoDays=moment().add(2, 'days').calendar(); 
var threeDays=moment().add(3, 'days').calendar(); 
var fourDays=moment().add(4, 'days').calendar(); 
var fiveDays=moment().add(5, 'days').calendar(); 


$(document).ready(function(){
 

    var arrayForCities=[];

    var weatherDays=["1","2","3","4","5"];

    var localStorageArray=JSON.parse(localStorage.getItem("cities"));

    



    
    if(localStorageArray){
        arrayForCities=localStorageArray;
    }

 


    function searchCity(city){

        var APIKey="1514b2ce008df16fa808e34044020461";

        var queryURL="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+APIKey

        var queryURLUv="https://api.openweathermap.org/data/2.5/uvi/forecast?lat=37.75&lon=-122.37&cnt=0&appid="+APIKey;

        
        $.ajax({
            url:queryURL,
            method: "GET"
        }).then(function(response){

            // today's weather main section
            $('h4').text("5-Day Forecast");

            $(".city").html("<h3>"+response.city.name+"  "+date+"  ");

            var IconMain=response.list[0].weather[0].main;

            var tempF=(response.list[0].main.temp -273.15)*1.80+32;

            $(".tempreature").text("Tempreature: "+tempF.toFixed(2)+"°F");

            $(".humidity").text("Humidity: "+response.list[0].main.humidity+"%");

            $(".wind").text("Wind Speed: "+response.list[0].wind.speed+" MPH")

           

    
            // 1 day after weather stats
            var tempOne=(response.list[2].main.temp -273.15)*1.80+32;

            $(".1").html("<div id='day' class='float-child1'>"+ nextDay+"<br>"+"<h7>"+ response.list[2].weather[0].main+"<br>"+"<div>"+"temp: "+tempOne.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[2].main.humidity+"%" );

            var iconone=response.list[2].weather[0].main;
            
        
            //  2 days after weather stats
            var tempTwo=(response.list[10].main.temp -273.15)*1.80+32;

            $(".2").html("<div id='day' class='float-child2'>"+ twoDays+"<br>"+"<h7>"+ response.list[10].weather[0].main+"<br>"+"<div>"+"temp: "+tempTwo.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[10].main.humidity+"%" );

            var icontwo=response.list[10].weather[0].main;
        

            //  3 days after weather stats
            var tempThree=(response.list[18].main.temp -273.15)*1.80+32;

            $(".3").html("<div id='day' class='float-child3'>"+ threeDays+"<br>"+"<h7>"+ response.list[18].weather[0].main+"<br>"+"<div>"+"temp: "+tempThree.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[18].main.humidity+"%" );

            var iconthree=response.list[18].weather[0].main;

            

            //  4 days after weather stats
            var tempFour=(response.list[26].main.temp -273.15)*1.80+32;

            $(".4").html("<div id='day' class='float-child4'>"+ fourDays+"<br>"+"<h7>"+ response.list[26].weather[0].main+"<br>"+"<div>"+"temp: "+tempFour.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[26].main.humidity+"%" );

            var iconfour=response.list[26].weather[0].main;

            

            //  5 days after weather stats
            var tempFive=(response.list[34].main.temp -273.15)*1.80+32;

            $(".5").html("<div id='day' class='float-child5'>"+ fiveDays+"<br>"+"<h7>"+ response.list[34].weather[0].main+"<br>"+"<div>"+"temp: "+tempFive.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[34].main.humidity+"%" );

            var iconfive=response.list[34].weather[0].main;

            




           
   