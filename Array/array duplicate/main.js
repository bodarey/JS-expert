// delete duplicates fromm Array [1,2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
var arr = [1,2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
function clearDuplicates(arr){
	var tempArray = [];
	for (item of arr) {
		(tempArray.indexOf(item) == -1) ? (tempArray.push(item)) : (tempArray);
	}
	return tempArray;
}
console.log(clearDuplicates(arr));