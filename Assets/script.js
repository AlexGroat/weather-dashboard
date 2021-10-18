var date=moment().format('L');
var nextDay=moment().add(1, 'days').calendar(); 
var twoDays=moment().add(2, 'days').calendar(); 
var threeDays=moment().add(3, 'days').calendar(); 
var fourDays=moment().add(4, 'days').calendar(); 
var fiveDays=moment().add(5, 'days').calendar(); 


$(document).ready(function(){
 

    var searchCityArray=[];

    var weatherDays=["1","2","3","4","5"];

    var localStorageArray=JSON.parse(localStorage.getItem("cities"));

    



    
    if(localStorageArray){
        searchCityArray=localStorageArray;
    }

 


    function searchCity(city){

        var APIKey = "1514b2ce008df16fa808e34044020461";
        
        var queryURL="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+APIKey

        var queryURLUv="https://api.openweathermap.org/data/2.5/uvi/forecast?latitude&longtitude&cnt=0&appid="+APIKey;


        

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
            var tempFone=(response.list[2].main.temp -273.15)*1.80+32;

            $(".1").html("<div id='day' class='float-child1'>"+ nextDay+"<br>"+"<h7>"+ response.list[2].weather[0].main+"<br>"+"<div>"+"temp: "+tempFone.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[2].main.humidity+"%" );

            var iconone=response.list[2].weather[0].main;
            
        
            //  2 days after weather stats
            var tempFtwo=(response.list[10].main.temp -273.15)*1.80+32;

            $(".2").html("<div id='day' class='float-child2'>"+ twoDays+"<br>"+"<h7>"+ response.list[10].weather[0].main+"<br>"+"<div>"+"temp: "+tempFtwo.toFixed(2)+"°C"+"<br>"+"Humidity: "+response.list[10].main.humidity+"%" );

            var icontwo=response.list[10].weather[0].main;
        

            //  3 days after weather stats
            var tempFthree=(response.list[18].main.temp -273.15)*1.80+32;

            $(".3").html("<div id='day' class='float-child3'>"+ threeDays+"<br>"+"<h7>"+ response.list[18].weather[0].main+"<br>"+"<div>"+"temp: "+tempFthree.toFixed(2)+"°C"+"<br>"+"Humidity: "+response.list[18].main.humidity+"%" );

            var iconthree=response.list[18].weather[0].main;

            

            //  4 days after weather stats
            var tempFfour=(response.list[26].main.temp -273.15)*1.80+32;

            $(".4").html("<div id='day' class='float-child4'>"+ fourDays+"<br>"+"<h7>"+ response.list[26].weather[0].main+"<br>"+"<div>"+"temp: "+tempFfour.toFixed(2)+"°C"+"<br>"+"Humidity: "+response.list[26].main.humidity+"%" );

            var iconfour=response.list[26].weather[0].main;

            

            //  5 days after weather stats
            var tempFfive=(response.list[34].main.temp -273.15)*1.80+32;

            $(".5").html("<div id='day' class='float-child5'>"+ fiveDays+"<br>"+"<h7>"+ response.list[34].weather[0].main+"<br>"+"<div>"+"temp: "+tempFfive.toFixed(2)+"°C"+"<br>"+"Humidity: "+response.list[34].main.humidity+"%" );

            var iconfive=response.list[34].weather[0].main;

            




            // icon conditionals for the weather for todays weather
            if (IconMain==="Rain"){
                $("h3").append($("<img>",{id:"rain",src:"./Assets/images/rainy.png", width:"50",height:"50"}))
                
            }else if (IconMain==="Clear"){
                $("h3").append($("<img>",{id:"rain",src:"./Assets/images/sun.png", width:"50",height:"50"}))
            }else if (IconMain==="Clouds"){
                $("h3").append($("<img>",{id:"rain",src:"./Assets/images/cloudy.png", width:"50",height:"50"}))
            }

            // icon conditionals for the weather for next day
            if (iconone==="Rain"){
                $(".float-child1").append($("<img>",{id:"rain",src:"./Assets/images/rainy.png", width:"50",height:"50"}))
                
            }else if (iconone==="Clear"){
                $(".float-child1").append($("<img>",{id:"rain",src:"./Assets/images/sun.png", width:"50",height:"50"}))
            }else if (iconone==="Clouds"){
                $(".float-child1").append($("<img>",{id:"rain",src:"./Assets/images/cloudy.png", width:"50",height:"50"}))
            }

            // icon conditionals for the weather for weather 2 days after
            if (icontwo==="Rain"){
                $(".float-child2").append($("<img>",{id:"rain",src:"./Assets/images/rainy.png", width:"50",height:"50"}))
                
            }else if (icontwo==="Clear"){
                $(".float-child2").append($("<img>",{id:"rain",src:"./Assets/images/sun.png", width:"50",height:"50"}))
            }else if (icontwo==="Clouds"){
                $(".float-child2").append($("<img>",{id:"rain",src:"./Assets/images/cloudy.png", width:"50",height:"50"}))
            }

            // icon conditionals for the weather for weather 3 days after
            if (iconthree==="Rain"){
                $(".float-child3").append($("<img>",{id:"rain",src:"./Assets/images/rainy.png", width:"50",height:"50"}))
                
            }else if (iconthree==="Clear"){
                $(".float-child3").append($("<img>",{id:"rain",src:"./Assets/images/sun.png", width:"50",height:"50"}))
            }else if (iconthree==="Clouds"){
                $(".float-child3").append($("<img>",{id:"rain",src:"./Assets/images/cloudy.png", width:"50",height:"50"}))
            }

            // icon conditionals for the weather for weather 4 days after
            if (iconfour==="Rain"){
                $(".float-child4").append($("<img>",{id:"rain",src:"./Assets/images/rainy.png", width:"50",height:"50"}))
                
            }else if (iconfour==="Clear"){
                $(".float-child4").append($("<img>",{id:"rain",src:"./Assets/images/sun.png", width:"50",height:"50"}))
            }else if (iconfour==="Clouds"){
                $(".float-child4").append($("<img>",{id:"rain",src:"./Assets/images/cloudy.png", width:"50",height:"50"}))
            }

            // icon conditionals for the weather for weather 5 days after
            if (iconfive==="Rain"){
                $(".float-child5").append($("<img>",{id:"rain",src:"./Assets/images/rainy.png", width:"50",height:"50"}))
                
            }else if (iconfive==="Clear"){
                $(".float-child5").append($("<img>",{id:"rain",src:"./Assets/images/sun.png", width:"50",height:"50"}))
            }else if (iconfive==="Clouds"){
                $(".float-child5").append($("<img>",{id:"rain",src:"./Assets/images/cloudy.png", width:"50",height:"50"}))
            }
   


        });
       
    }
    // creates the divs for the 5-day forecast of the city searched
    function forecastFiveDays(){
        $("#weather").empty();
        for(var i=0;i<weatherDays.length; i++){
            var b=$("<div>");
            b.addClass(weatherDays[i]);
            b.attr("data-names",weatherDays[i]);
            $("#weather").append(b);
        }
    }




    // creates the button after the city was searched
    function renderWeather(){
        $("#cityList").empty();
        for(var i=0;i<searchCityArray.length;i++){
            var a =$("<button class='btn btn-primary'>");
            a.addClass("city-btn");
            a.attr("data-name",searchCityArray[i]);
            a.text(searchCityArray[i]);
            $("#cityList").append(a);

            localStorage.setItem('cities',JSON.stringify(searchCityArray));
 
        }
    }




    // search city prompts info to pop up on the screen 
    $("#select-city").on("click",function(event){
        event.preventDefault();
        var inputCity= $("#city-input").val().trim();
        if(inputCity===""||searchCityArray.includes(inputCity)){
           
        }else{
        searchCity(inputCity);
        searchCityArray.push(inputCity);
        renderWeather();
        forecastFiveDays();
        }
    });



    // try to add an event listener to the button created 
    $("#cityList").on("click",'button',function(event){ 
        let searchCityName=$(this).text();
        searchCity(searchCityName);

    });

    renderWeather();
    forecastFiveDays();
});