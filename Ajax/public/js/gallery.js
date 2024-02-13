/* 
*  Схематическое изображение класса Галереи
*/

class BaseGallery {     
    constructor(){
        this.gallery = [];   
        this.data = function(){};
        this.getGalleryfromData = getFromObj;
        this.statGallery =  this.getGalleryfromData(data);
    }

    initComponent(){
        showGalleryText(this.statGallery);
           //#################// show gallery with text depend on array of objects
       
    }
}


class ExtendedGallery extends BaseGallery {
    constructor(){
      super();   
    }


    addImage(){
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
             break;
        }
        changeGallery();
    }        
/////////////////////////////
        
        
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
            let rez;
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
        main2.addEventListener('click',drop);      
        showNumberOfImages();
    }
}

