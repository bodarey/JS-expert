(function() {


var btn = document.getElementById('play');
var gallery = getGalleryfromData(data);


var secondBlock = document.getElementById('second-line');

 //#################
function init(){ // main function for eventListener switch the type and number of elements in gallery
    var typeSelector = parseInt(document.getElementById('type-selector').value);
    var lineSelector = parseInt(document.getElementById('line-selector').value);
    
       
   
}
//#################

//#################

//#################
function galleryInterpolation(arr,n){
    
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

//#################
btn.addEventListener('click',init);

}() )
