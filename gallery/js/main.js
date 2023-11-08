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
            showDiv('hide','hide','hide');
            break;
    }
}
//#################
function galleryCreate(arr,n){   
    showDiv('hide','hide','show'); 
    thirdBlock.innerHTML = '';
    for (var i = 0; i<n; i++) {
        let obj = arr[i];
        let div = document.createElement('div');
        div.classList.add('col-sm-3','col-xs-6');
        let img =  document.createElement("IMG");
        img.setAttribute('alt', obj.name);
        img.setAttribute('src',` http://${obj.url}`);
        img.classList.add("img-thumbnail");
        let div2 = document.createElement('div');
        div2.classList.add('text-muted');
        let name = document.createElement('div');
        name.innerHTML = obj.name;
        div2.appendChild(name);
        let description = document.createElement('div');
        description.innerHTML = obj.description;
        div2.appendChild(description);
        let date = document.createElement('div');
        date.innerHTML = getDatefromString(obj.date);
        div2.appendChild(date);
        div.appendChild(img);
        thirdBlock.appendChild(div);
        div.appendChild(div2);
    }

}
//#################
function galleryReplace(arr,n){
    showDiv('show','hide','hide');
    firstBlock.innerHTML = '';
     for (var i = 0; i<n; i++) {
        let element = '';
        let newelement = '';
        let obj = arr[i];
        element = '<div class = "col-sm-3 col-xs-6" >\
            <img src="http://$url" alt="$name " class = "img-thumbnail">\
            <div class="text-muted">\
                <div> $name </div>\
                <div> $description</div>\
                <div> $date </div>\
            </div>\
        </div>';
        newelement =  element.replace(/\$name/gi,obj.name)
        .replace('$date',getDatefromString(obj.date))
        .replace('$description',obj.description).replace("$url",obj.url);    
        firstBlock.innerHTML += newelement;
     }   
}
//#################
function galleryInterpolation(arr,n){
    showDiv('hide','show','hide');
    secondBlock.innerHTML = '';
     for (var i = 0; i<n; i++) {
        let element = '';
        let obj = arr[i];
        element = `
        <div class = 'col-sm-3 col-xs-6' >
            <img src="http://${obj.url}" alt="${obj.name} " class = 'img-thumbnail'> 
            <div class='text-muted'> 
                <div> ${obj.name} </div>
                <div> ${obj.description} </div>
                <div> ${getDatefromString(obj.date)} </div>          
            </div>
        </div>`;
    secondBlock.innerHTML += element;
    }
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
function getDatefromString(date){
    let data = new Date(date);
    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}   ${data.getHours()}:${data.getMinutes()}`;
}
//#################
function showDiv(div1,div2,div3){ // take 3 string parameters for classes 'show or hide'
    let element = document.body;
    let first = element.querySelector('.first-group');
    let second = element.querySelector('.second-group');
    let third = element.querySelector('.third-group');
    first.classList.remove('hide','show');
    second.classList.remove('hide','show');
    third.classList.remove('hide','show');
    (div1 == 'hide') ? first.classList.add('hide') : (first.classList.add('show'));
    (div2 == 'hide') ? second.classList.add('hide') : (second.classList.add('show'));
    (div3 == 'hide') ? third.classList.add('hide') : (third.classList.add('show'));
}
//#################
btn.addEventListener('click',init);
}())

