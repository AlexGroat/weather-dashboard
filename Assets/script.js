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

    };   
