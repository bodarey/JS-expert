// data formats
// 08:05 01/01/2018 result
var data;
data = new Date();
data = `${data.getHours()}:${data.getMinutes()} ${data.getDate()}/${data.getMonth()}/${data.getFullYear()} `;
console.log(data);