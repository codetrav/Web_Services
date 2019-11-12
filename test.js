
$(document).ready(function() {
	var url ='https://api.darksky.net/forecast/e16b1c26d0112e47376c0e844cab1c0f/37.8267,-122.4233'; //Place your DarkSky API Call Here
	$.ajax({url:url, dataType:"jsonp"}).then(function(data) {
		console.log(data);//Review all of the data returned
		therm(data.currently.apparentTemperature,data.currently.icon,data.currently.precipProbability,data.currently.humidity,data.currently.summary,data.currently.windSpeed,data.daily.data);//View Today's Temp
		// console.log("Tomorrow's High: " + data.daily.data[1].apparentTemperatureHigh);//View Tomorrow's High
	})
})
function therm(temp,icon,precip, humid, summary,wind,allDays){
	document.getElementById("temp_today").innerHTML = temp + " F";
	document.getElementById("thermometer_inner").style.height = temp + "%";
	var image = document.getElementById("image_today")
	image.setAttribute("src", "img/" + icon +".png");
	document.getElementById("precip_today").innerHTML = precip + "%";
	document.getElementById("humidity_today").innerHTML = humid + "%";
	document.getElementById("summary_today").innerHTML = summary;
	document.getElementById("wind_today").innerHTML = wind;
	var week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	console.log(allDays)
	for(var i = 0; i < 6;i++){
		
		var dat = allDays[i];
		var date = new Date(dat.time*1000);
	    var curDay = date.getDay();
	    console.log("day" +i);
        document.getElementById("day"+i).innerHTML = week_names[curDay];
        document.getElementById("temp"+i).innerHTML = "High: "+ dat.apparentTemperatureHigh + "<br> Low"+ dat.apparentTemperatureLow;
        document.getElementById("img"+i).src = "img/"+dat.icon + ".png";
	}
}