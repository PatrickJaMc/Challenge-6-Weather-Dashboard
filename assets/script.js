var inputEl = document.getElementById('inputField');
var btn = document.getElementById('btn');

var apiKey = 'cf3b5ece75c800ed156bdbf554dc98a5'














function selectedLocation(){
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
        
            //Creating short hand variables for collected data
            var description = data.list[0].weather[0].description;
            var icon = data.list[0].weather[0].icon;
            var CurrentWeather = data.list[0].weather[0].main;
            var temp = data.list[0].main.temp;
            
            
            console.log(temp);
            console.log(CurrentWeather);
            console.log(description);
        })
    })
}


btn.addEventListener('click', function(event){
    event.preventDefault();
    selectedLocation();
})