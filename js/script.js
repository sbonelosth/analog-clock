function analog() {
	var
	today = new Date(),
	hour = today.getHours(),
	minute = today.getMinutes(),
	second = today.getSeconds();
	
	hour = hour < 12 ? hour+12 : hour;
	
	let seconds_stick = document.querySelector(".seconds-stick");
	let minutes_stick = document.querySelector(".minutes-stick");
	let hours_stick = document.querySelector(".hours-stick");
	
	seconds_stick.style.transform = "rotate(" + parseInt(-90+(second*6)) + "deg) translate(40%, 0)";
	minutes_stick.style.transform = "rotate(" + parseInt(-90+(minute*6)) + "deg) translate(40%, 0)";
	hours_stick.style.transform = hour < 18 && hour > 12 ? "rotate(" + Math.round(-90+(hour*(30+(2*minute/60))), 0) + "deg) translate(40%, 0)" : "rotate(" + Math.round(-90+(hour*(30+(minute/60))), 0) + "deg) translate(40%, 0)";
	
	setInterval(analog, 1000);
}
	
analog();