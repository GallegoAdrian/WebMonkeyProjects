(function($, myFunctions) {

	var apiWeather = "http://api.openweathermap.org/data/2.5/forecast?id=3121456&units=metric&appid=3102fdf7e6472b4b16f09fd702ce9a7d";

	$.ajax({
		url: apiWeather
	})
	.done(function( searchResultsData ) {

		if(getLanguage() == 'en'){
			var lang = 'en-gb';
		}else{
			var lang = getLanguage();
		}

		var weatherPalamos = searchResultsData.list;
		var weatherDay = '';
		var weatherOfWeek = '';
		var dayText = moment().locale(lang).format('LL');
		var toDay = moment().locale(lang).format('ll');
		var concat='';

		toDay = toDay.substr(0,6);

		var day = '<div class="to-day">' + dayText + '</div>';
		myFunctions.putDataInHtml(day);

		$.each ( weatherPalamos, function ( index, oWeatherPalamos) {
			concat += myFunctions.weatherOfDay(weatherDay,  weatherOfWeek , toDay, oWeatherPalamos);
			
		});
		myFunctions.putDataInHtml(concat);
	});

})(jQuery, myFunctions);