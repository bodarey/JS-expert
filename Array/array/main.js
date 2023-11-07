var goods = ['foods', 'fruits', 'technics', 'phones', 'computers'];
var index = goods.indexOf('technics');
goods.splice(index,1);
var str = goods.join(',');
console.log(str);