(function(){
	setInterval(function() {
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		var elements = document.querySelectorAll('.today-date');
		var div1 = elements[0];
		var div3 = elements[1];
		var div2 = document.querySelector('.clock');
		div2.firstElementChild.innerHTML = `the time is: &nbsp; `;
		var date = new Date();
		div1.innerHTML = `today is ${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
		div3.innerHTML = `till ${date.getFullYear() + 1} remains ${diffDays()} days`;

		let firsthour = document.querySelector('.hours');
		firsthour.firstElementChild.firstElementChild.innerHTML = parseData(date.getHours())[0];

		let secondHour = document.querySelector('.hours');
		secondHour.lastElementChild.firstElementChild.innerHTML = parseData(date.getHours())[1];

		let firstminute = document.querySelector('.minutes');
		firstminute.firstElementChild.firstElementChild.innerHTML = parseData(date.getMinutes())[0];

		let secondminute = document.querySelector('.minutes');
		secondminute.lastElementChild.firstElementChild.innerHTML = parseData(date.getMinutes())[1];

		let firstseconde = document.querySelector('.seconds');
		firstseconde.firstElementChild.firstElementChild.innerHTML = parseData(date.getSeconds())[0];

		let secondseconde = document.querySelector('.seconds');
		secondseconde.lastElementChild.firstElementChild.innerHTML = parseData(date.getSeconds())[1];
	}, 1000);

		function parseData(n){ // return an array of 2 numbers 
			let data = String(n);
			arr = [];
			arr.push(data.substr(0,1));
			arr.push(data.substr(1,1));
			return arr;
		}

		function diffDays(){
			const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
			const firstDate = new Date("2024-1-1");
			const secondDate = new Date();
			return (Math.round(Math.abs((firstDate - secondDate) / oneDay)));
		}



}())