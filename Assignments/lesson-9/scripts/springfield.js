var springObject = new XMLHttpRequest();
springObject.open('GET','//api.openweathermap.org/data/2.5/weather?q=Springfield,us&appid=33af471f1095c02413bd9f56c4998e9d&units=imperial', true);

springObject.send();

springObject.onload = function() {
    var springfiInfo = JSON.parse(springObject.responseText);
    console.log(springfiInfo);
    
    document.getElementById('City').innerHTML = springfiInfo.name;
    document.getElementById('NowTemp').innerHTML = springfiInfo.main.temp;
    document.getElementById('MaxTep').innerHTML = springfiInfo.main.temp_max;
    document.getElementById('MinTem').innerHTML = springfiInfo.main.temp_min;
    document.getElementById('windSpeed').innerHTML = springfiInfo.wind.speed;
    
    var iconcode = springfiInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    
    
}// end script