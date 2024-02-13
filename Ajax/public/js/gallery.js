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
        var modal = document.querySelectorAll('.modal');
        var gallery =  this.gallery;
        var statGallery = this.statGallery;
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
    const getCreatedArray = () => {
            this.gallery = [];
            firstBlock.innerHTML='';
            filterGallery(this.statGallery);
            for(var i=0; i<this.statGallery.length;i++){
               this.gallery.push(this.statGallery[i]);
                galleryInterpolation(this.gallery,i);
            }    


            
     }       
     getCreatedArray();
    const createElement = () =>{
            var name1 =  document.getElementById('name').value;
            var url1 = document.getElementById('url').value;
            var description1 = document.getElementById('description').value;
            var date1 = document.getElementById('date').value;

            console.log(name1);
            var gallery =  this.gallery;
            var statGallery = this.statGallery;

            var obj =   {
              "url": `desktopwallpapers.org.ua/mini/201507/400${url1}.jpg`,
              "name": `${name1}`,
              "id": `${this.statGallery.length+1}`,
              "params": {
                "status": true,
                "progress": "14"
              },
              "description":`${description1}`,
              "date": date1 || parseInt(Date.now())
            }
              var json = JSON.stringify(obj);

            const options = {
                method: 'post',
                headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: json
            }

            fetch('http://localhost:3000/data', options)
            .then((response) => {
               return response.json();
            })
            .then((newData) => {
                console.log('Request succeeded with JSON response', newData);
               // this.statGallery =  this.getGalleryfromData(newData);
                console.log(newData);    

                fetch("http://localhost:3000/data")
                    .then((response)=> response.json())
                    .then((datajson)=>{data =  datajson; //console.log(datajson)
                     this.statGallery =  this.getGalleryfromData(data);
                      getCreatedArray();
                    // console.log(this.statGallery.length);  
                     //console.log(this.gallery.length); 

                      
                           
                        
                      
                    showNumberOfImages();






                    });




            
            })

            .catch((error) => {
            console.log('Request failed', error);
            });

    }

        
        
         //#################
        const init = () =>{ // main function for eventListener switch the type and number of elements in gallery
            //insertPicture();


                   // var galleryLength =  this.statGallery.length;
                            //////////////// insert form from bootstrap to add new data in json file
                           // var  exampleModal = document.getElementById('exampleModal');
                        //    t(modal[0]);
                          //  t(true,modal[1]);
                            btn.setAttribute('data-bs-target', '#exampleModal');
                            btn.setAttribute("data-bs-toggle","modal");
                            var btnCreate = document.getElementById('create');
                            

                            
                         
                        btnCreate.addEventListener('click',createElement); 




        }
//////////////////
        const insertPicture = () => {     
        
             

                    




            ////////////////




           
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
                    btn.setAttribute('data-bs-target', '#exampleModal');
                    btn.setAttribute("data-bs-toggle","modal");
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
           // console.log(value);
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

