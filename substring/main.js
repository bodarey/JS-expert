function textSubsting(str){
	if (str.length<16) {
		return str
	} else {
		return str.substring(0, 15) +'...';
	}
}

console.log(textSubsting('1234567891234567'));