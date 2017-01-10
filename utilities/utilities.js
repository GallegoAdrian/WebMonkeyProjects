
(function( win ) {

	win.myFunctions= win.myFunctions || {};

function iconsWeather(icon){

	var iconSun      = "sun.svg";
	var iconSunCloud = "sun-cloud.svg";
	var iconClouds   = "clouds.svg";
	var iconRain     = "rain.svg";
	var iconStorm    = "storm.svg";

	if(icon==='01n' || icon==='01d')return iconSun;
	if(icon==='02n' || icon==='02d')return iconSunCloud;
	if(icon==='03n' || icon==='03d')return iconClouds;
	if(icon==='04n' || icon==='04d')return iconClouds;
	if(icon==='09n' || icon==='09d')return iconClouds;
	if(icon==='10n' || icon==='10d')return iconRain;

	return iconStorm;

}

function weatherOfDay(weatherDay,  weatherOfWeek , day, oWeatherPalamos){

	if(getLanguage() == 'en'){
		var lang = 'en-gb';
	}else{
		var lang = getLanguage();
	}

	var date = moment.unix(oWeatherPalamos.dt).locale(lang).format('ll');
	var hour = moment.unix(oWeatherPalamos.dt).locale(lang).format('LT');

	if(date.indexOf(day) > -1 && hour != '1:00' && hour != '4:00' && hour != '7:00'){
		weatherOfWeek += '<div class="day-weather"><img src="img/weatherIconsSvg/'+
							iconsWeather(oWeatherPalamos.weather[0].icon)+'"/>' + '<span>'+
							oWeatherPalamos.main.temp_max +' °C'+' '+ hour +'h'+'</span></div>';
		return weatherOfWeek;
	}

	return '';
}


function putDataInHtml(data){
	$(".weather-time").append(data);
}

	win.myFunctions.iconsWeather  = iconsWeather;
	win.myFunctions.putDataInHtml = putDataInHtml;
	win.myFunctions.weatherOfDay  = weatherOfDay;

})( window );