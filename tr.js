
//REFFERER
function getData() {
	var obj = document.referrer;
	var browser = navigator.userAgent;
	var browserVersion = navigator.appVersion;
	var lang = navigator.language;

	console.log("~" + obj + "~");
}

getData();

//GEO

function showPosition(position) {
	var x = document.querySelector('#status');
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function error(msg) {
	var x = document.querySelector('#status');	
  	x.innerHTML = typeof msg == 'string' ? msg : "failed";
  	x.className = 'fail';
	  
  	// console.log(arguments);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
		var x = document.querySelector('#status');
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
getLocation();
