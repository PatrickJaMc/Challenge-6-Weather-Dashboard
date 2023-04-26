var inputEl = document.getElementById('inputField');
var btn = document.getElementById('btn');
var todayWeatherCard = document.getElementById('todayWeatherCard');
var todayCurrentWeatherEl = document.getElementById('currentWeather');
var todayCurrentTempEl = document.getElementById('currentTemp');


var apiKey = 'cf3b5ece75c800ed156bdbf554dc98a5'
var todayCurrentWeather;













function selectLocation(){
    var city = inputEl.value;
    var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' +city+ '&limit=5&appid=cf3b5ece75c800ed156bdbf554dc98a5'
    fetch(geoUrl)
    .then(function(response){
       return response.json();
    })
    .then(function(data){
        var latitude = data[0].lat;
        var longitude = data[0].lon;
        var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&appid='+apiKey+'&units=imperial';


        console.log('Latitude for ' + city +':',latitude);
        console.log('Longitude for ' + city + ':',longitude);
        fetch(weatherUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            //console.log(data);
            console.log(data);
            //Creating short hand variables for collected data for current day
            var todayCurrentDescription = data.list[0].weather[0].description;
            var todayCurrentIcon = data.list[0].weather[0].icon;
            var todayCurrentWeather = data.list[0].weather[0].main;
            var todayCurrentTemp = data.list[0].main.temp;
            var todayDate;
            //Vars for following days data
            var dayOneDescription = data.list[7].weather[0].description;
            var dayOneIcon = data.list[7].weather[0].icon;
            var dayOneWeather = data.list[7].weather.main;
            var dayOneTemp = data.list[7].weather.temp;
            var dayOneDate;


            console.log('Today current temp: ',todayCurrentTemp);
            console.log('Today current weather: ',todayCurrentWeather);
            console.log('Today current weather description: ',todayCurrentDescription);
            
            todayWeatherCard.classList.remove('hide');
            todayCurrentWeatherEl.textContent=todayCurrentWeather
            todayCurrentTempEl.textContent=todayCurrentTemp + ' degrees F'
                      
            
            
        })
    }) 
};





btn.addEventListener('click', function(event){
    event.preventDefault();
    selectLocation();
})