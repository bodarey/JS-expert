(function(){

var btn = document.getElementById('play');
var gallery = getGalleryfromData(data);
var firstBlock =document.getElementById('first-line');
var secondBlock =document.getElementById('second-line');
var thirdBlock =document.getElementById('third-line');

//#################
function init(){ // main function for eventListener switch the type and number of elements in gallery
    var typeSelector = parseInt(document.getElementById('type-selector').value);
    var lineSelector = parseInt(document.getElementById('line-selector').value);
    switch (typeSelector) {
        case 1:
            if (lineSelector == 1) {
                galleryReplace(gallery,3);
            } else if (lineSelector == 2) {
                galleryReplace(gallery,6);
            } else {
                galleryReplace(gallery,gallery.length);
            }
            break;
        case 2:
            if (lineSelector == 1) {
                galleryInterpolation(gallery,3);
            } else if (lineSelector == 2) {
                galleryInterpolation(gallery,6);
            } else {
                galleryInterpolation(gallery,gallery.length);
            }
            break;
        case 3:
             if (lineSelector == 1) {
                galleryCreate(gallery,3);
             } else if (lineSelector == 2) {
                galleryCreate(gallery,6);
             } else {
                galleryCreate(gallery,gallery.length);
             }
            break;
        default:
            // statements_def
            break;
    }

//console.log('-----------');
//console.log(typeSelector);
//console.log(lineSelector);
}
//#################
function galleryCreate(arr,n){

}
//#################
function galleryReplace(arr,n){

}
//#################
function galleryInterpolation(arr,n){

}
//#################
function getGalleryfromData(obj){ // return new array of objects for gallery from existing data
    var arr = [];
    arr = obj.map(function(element){
        var newObj ={};
        newObj.url = element.url;
        newObj.name = element.name;
        newObj.description = element.description;
        newObj.date = element.date;
        return newObj;
    });
    return arr;
}
//#################



btn.addEventListener('click',init);

}())

