// ex: main.js result: function must return js

function myExtension(str){
	var index;
	index = str.indexOf('.');
	str = str.substring(index);
	return str.substring(1);

}
console.log(myExtension('index.html'));