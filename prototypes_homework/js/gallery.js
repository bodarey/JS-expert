/* 
*  Схематическое изображение класса Галереи
*/

let BaseGallery = function () { 
    
    this.gallery = [];   
    this.getGalleryfromData = function(obj){        
            var arr = [];
            arr = obj.map(function(element){
                var newObj ={};
                newObj.url = element.url;
                newObj.name = element.name;
                newObj.description = element.description;
                newObj.date = element.date;
                return newObj;
            });
            return arr;// get new array of obj from data file
        
    };
    this.statGallery = this.getGalleryfromData(data);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
BaseGallery.prototype = {
    initComponent: function(){
         showGalleryText(this.statGallery);


           //#################// show gallery with text depend on array of objects
        function  showGalleryText(gallery){ 
            
            if (gallery.length > 0) {
                var block = document.querySelector('.first-group');
                block.classList.remove('hide','show');
                block.classList.add('show');  
            }
        }

    }
}


let ExtendedGallery = function() {
    BaseGallery.apply(this);
   // this.property = {};
}
ExtendedGallery.prototype = {

 

    addImage: function (){
        var btn = document.getElementById('play');
        var firstBlock = document.getElementById('first-line');
       
        var bs = document.querySelectorAll('.dropdown-menu');
        var dm1 =bs[0].firstElementChild;
        var dm2 =bs[0].lastElementChild;
        var dm3 =bs[1].firstElementChild;
        var dm4 =bs[1].lastElementChild;

        //////////////////
        function drop(event){
            switch (event.target) {
                case dm1:
                    localStorage.setItem('drop','1000');
                    break;
                case dm2:
                    localStorage.setItem('drop','0100');
                    break;                   
                case dm3:
                    localStorage.setItem('drop','0010');
                    break;
                case dm4:
                    localStorage.setItem('drop','0001');
                    break;
                default:
                    // statements_def
                    break;
            }

//console.log(localStorage.getItem('drop'));
            changeGallery();
        }
        main2.addEventListener('click',drop);
         //#################
        function init(){ // main function for eventListener switch the type and number of elements in gallery
            insertPicture();
        }
//////////////////
        const insertPicture = () => {      
            if (this.gallery.length < 1) {
                this.gallery.push(this.statGallery[0]);
                galleryInterpolation(this.gallery,0);
            } else if (this.gallery.length < this.statGallery.length){
                this.gallery.push(addToGalleryfromStatGallery());
                galleryInterpolation(this.gallery,this.gallery.length-1);
            }
            if (this.gallery.length >= this.statGallery.length) { 
            // btn.classList.add('disabled');
               btn.setAttribute("data-bs-toggle","modal");
            }
            showNumberOfImages();
        }
/////////////////////
        const deleteImage = (event)=>{
            var elem = event.target;
            btn.classList.remove('disabled');//data-bs-toggle="modal"
            btn.removeAttribute('data-bs-toggle');
            if (elem == elem.parentElement.querySelector('.btn-success') ) {
               var temp = getElementArrayPositionfromHtmlElement(this.gallery,elem.parentElement);
               if (temp >= 0) {
                    deleteFromGallery(this.gallery,temp);
                    elem.parentElement.remove();
               }
            }
            showNumberOfImages();
        }
        //#################
        const showNumberOfImages = () => {
            var elem = btn.nextElementSibling.nextElementSibling;
            rez = this.statGallery.length - this.gallery.length;
            elem.innerHTML = `images to add ${rez}`;
        }    
        //################## // find first available element from statGallery that is not in gallery and can be added => return this element
        const addToGalleryfromStatGallery = () => {
            for (var i = 0; i < this.statGallery.length; i++) {
                if (this.gallery.indexOf(this.statGallery[i]) < 0) {
                    return this.statGallery[i];
                }
            }
        }
        //#################
        function  filterGallery(arr){
            var local = localStorage.getItem('menu') || 0;
            switch (parseInt(local)) {
                case 0:                    
                    arr.sort(function(a,b){
                        if (a.name < b.name) {return -1;}
                        if (a.name > b.name) {return 1;}
                        return 0;
                    });
                    break;
                    case 1:                       
                         arr.sort(function(a,b){
                            if (a.name < b.name) {return 1;}
                            if (a.name > b.name) {return -1;}
                            return 0;
                         });                    
                    break;
                    case 2:                        
                        arr.sort(function(a,b){                    
                            return (a.date - b.date);
                         });
                    break;
                    case 3:                        
                        arr.sort(function(a,b){
                          return (b.date - a.date);
                         });
                    break;
                default:
                break;
            }
        }      
        //################# // from array arr is interpolating in htmml code position i
        const galleryInterpolation = (arr,i)=>{
            let element = '';
            let obj = arr[i];
            element = `
                <div class = 'col-sm-3 col-6 list' >
                    <img src="http://${obj.url}" alt="${obj.name} " class = 'img-thumbnail'> 
                    <div class='text-muted'> 
                        <div> <b>${obj.name} </b> </div>
                        <div> ${obj.description} </div>
                        <div> ${getDatefromString(obj.date)} </div>          
                    </div>
                    <div class="btn btn-success">delete Image</div></br></br>
                </div>`;
            firstBlock.innerHTML += element;   
        }
        //#################// delete from array arr position i
        function deleteFromGallery(arr,i){
            arr.splice(i,1);
        }
        //#################// return new array of objects for gallery from existing data
        function getGalleryfromData(obj){ 
            var arr = [];
            arr = obj.map(function(element){
                var newObj ={};
                newObj.url = element.url;
                newObj.name = element.name;
                newObj.description = element.description;
                newObj.date = element.date;
                return newObj;
            });
            return arr;// get new array of obj from data file
        }
        //#################
        function getDatefromString(date){
            let data = new Date(date);
            return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}   ${data.getHours()}:${data.getMinutes()}`;
        }
        //################# // element must be class of list return position or -1
        function getElementArrayPositionfromHtmlElement(arr,element){
            var a = element.firstElementChild.getAttribute('src');
            a = a.substring(7);
            for(var i = 0;  i < arr.length; i++){
                if (arr[i].url == a) {
                    return i;
                }
            }
            return -1;
        }
        //#################
        const changeGallery = () => {
          //  var value = lineSelector.value;
            var value = localStorage.getItem('drop').indexOf(1);
            console.log(value);
            localStorage.setItem('menu', value);
            filterGallery(this.gallery);
            firstBlock.innerHTML = '';
            for (var i = 0; i < this.gallery.length; i++) {
                galleryInterpolation(this.gallery,i);
            }
        }
        //#################
        btn.addEventListener('click',init);
        firstBlock.addEventListener('click',deleteImage);
        
        showNumberOfImages();
    }
}

// код функции наследования можно найти архиве, который содержится 
// в материалах к сессии 29 (практический пример)
function inheritance(parent, child) {
    let tempChild = child.prototype;
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
    for (let key in tempChild) {
        if (tempChild.hasOwnProperty(key)) {
            child.prototype[key] = tempChild[key];
            }
    }
}

inheritance(BaseGallery, ExtendedGallery);
