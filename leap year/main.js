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


console.log(leapYear('2000'));