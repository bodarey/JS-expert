var text = '';
text =`{
	"a" : "line1",
	"b" : "line2",
	"c" : "line3",
	"s" : [43,"abc",12]
}`;

var obj =JSON.parse(text);
console.log(obj);
console.log(JSON.stringify(obj));
