var GreenvilleObject = new XMLHttpRequest();
GreenvilleObject.open('GET','htpp://api.openweathermap.org/data/2.5/weather?q=Greenville,us&appid=60fa5dd9d7c72250bff303f786f381df', true);

GreenvilleObject.send();

GreenvilleObject.onload = function(){
    var greenvilleInfo = JSON.parse(GreenvilleObject.responseText);
    console.log(greenvilleInfo);
    
      document.getElementById('place2').innerHTML = greenvilleInfo.name;
    document.getElementById('currentTemp2').innerHTML = greenvilleInfo.main.temp;
    document.getElementById('currentWind2').innerHTML = greenvilleInfo.wind.speed;
    document.getElementById('maxtemp2').innerHTML = greenvilleInfo.main.temp_max;
    document.getElementById('mintemp2').innerHTML = greenvilleInfo.main.temp_min;
    
    var iconcode = greenvilleInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
}