var greenvillaObject = new XMLHttpRequest();
greenvillaObject.open('GET','//api.openweathermap.org/data/2.5/weather?q=Greenville,us&appid=60fa5dd9d7c72250bff303f786f381df&units=imperial', true);


greenvillaObject.send();

greenvillaObject.onload = function() {
var greenInfo = JSON.parse(greenvillaObject.responseText);
console.log(greenInfo);
    
    
document.getElementById('place').innerHTML = greenInfo.name;
document.getElementById('currentTemp').innerHTML = greenInfo.main.temp;
document.getElementById('MaxTempa').innerHTML = greenInfo.main.temp_max;
document.getElementById('MinTempa').innerHTML = greenInfo.main.temp_min;
document.getElementById('WindSpeed').innerHTML = greenInfo.wind.speed;

    
  
    var iconcode = greenInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    
}