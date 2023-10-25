function leapYear(n){
	if (!isNaN(n)) {
		if (n % 400 == 0) {
			return true;
		} else if (n % 100 == 0){
			return false;
		} else if (n % 4 == 0) {
			return true;
		} else {
			return false;
		}
		return rez;
	}
	return 'error';

}

function leap(n){
	if (!isNaN(n)) {
	return (n % 400 == 0) ? (true) : (  (n % 100 == 0) ? (false) : ( (n % 4 == 0) ? (true) :( false) )  );
	}
	return 'error';
}

// console.log(leap(2024));
console.log(leapYear('2000'));




