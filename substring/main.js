function textSubsting(str){
	return (str.length < 16) ? (str) : (str.substring(0, 15) +'...');
	
}

console.log(textSubsting('1234567891234567'));