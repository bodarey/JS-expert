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
        var bu = document.getElementById('update');          
        var bc = document.getElementById('create'); 
//////////////////
        function drop(event){// set the number 1 in one of 4 positions that will then be read for menu in local storage 
                            //and on refresh will filter the array in the last choosen worder from menu
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
            gallery = [];
            firstBlock.innerHTML='';
            filterGallery(statGallery);
            for(var i=0; i<statGallery.length;i++){
               gallery.push(statGallery[i]);
                galleryInterpolation(gallery,i);
            }
        }       
        getCreatedArray();

        const createElement = () =>{
            var name1 =  document.getElementById('name').value;
            var url1 = document.getElementById('url').value;
            var description1 = document.getElementById('description').value;
            var date1 = document.getElementById('date').value.split(",");  
            date1 = date1.map(function(date){return parseInt(date)});
            date1 = new Date(date1[0],date1[1]-1,date1[2],date1[3]||0,date1[4]||0,date1[5]||0).getTime();  
           
            var obj =   {
              "url": `desktopwallpapers.org.ua/mini/201507/400${url1}.jpg`,
              "name": `${name1}`,
              "id": `${statGallery.length+1}`,
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
            fetch('http://localhost:3000/data', options) //post an object to json file db.json
                .then((response) => {
                   return response.json();
                })
                .then((newData) => {
                    console.log('Request succeeded with JSON response', newData);
                    //console.log(newData);    

                    fetch("http://localhost:3000/data") //get data json from json file after was posted a new object
                        .then((response)=> response.json())
                        .then((datajson)=>{data =  datajson; //console.log(datajson)
                         statGallery =  getGalleryfromData(data);
                          getCreatedArray();
                         // showNumberOfImages();
                        });        
                })

                .catch((error) => {
                //console.log('Request failed', error);
                });
        }     
//#################
        const init = () =>{ // main function for eventListener switch the type and number of elements in gallery
                  
            t(bu);
            t(true,bc);   
            btn.setAttribute('data-bs-target', '#exampleModal');
            btn.setAttribute("data-bs-toggle","modal");
            var btnCreate = document.getElementById('create');       
            btnCreate.addEventListener('click',createElement); 
        }
/////////////////////
        const deleteImage = (event)=>{ //delete an image from gallery
            var elem = event.target;         
            if (elem == elem.parentElement.querySelector('.delete') ) {
               var temp = getElementArrayPositionfromHtmlElement(statGallery,elem.parentElement);
               if (temp >= 0) {

                    const options = {
                    method: 'delete'              
                    }
                    fetch(`http://localhost:3000/data/${statGallery[temp].id}`, options)
                    .then((response) => {
                       return response.json();               
                    })
                    .then((newData) => {
                        console.log('Request succeeded with JSON response', newData);
                        fetch("http://localhost:3000/data") //get data json from json file after was posted a new object
                            .then((response)=> response.json())
                            .then((datajson)=>{//data =  datajson; //console.log(datajson)
                                 statGallery =  getGalleryfromData(datajson);
                                 getCreatedArray();
                             });                     
                    })

                    .catch((error) => {
                    console.log('Request failed', error);
                    });

               }
            }
           // showNumberOfImages();
        }
//#################
        const updateImage = (event) =>{
            var elem = event.target;         
            if (elem == elem.parentElement.querySelector('.update') ) {
                var temp = getElementArrayPositionfromHtmlElement(statGallery,elem.parentElement);
                var tagName = document.getElementById('create');
                t(bc);
                t(true,bu);                
                elem.setAttribute("data-bs-toggle","modal");
                console.log(elem);
                var name1 =  document.getElementById('name');
                var url1 = document.getElementById('url');
                var description1 = document.getElementById('description');
                var date1 = document.getElementById('date');  
               
                
                var elem = statGallery[temp];
                name1.value = elem.name;
                url1.value = elem.url;
                description1.value =elem.description;
                date1.value = elem.date;       

                const updateJS =()=>{
                     name1 =  document.getElementById('name');
                     url1 = document.getElementById('url');
                     description1 = document.getElementById('description');
                     date1 = document.getElementById('date');                     

                    var obj =   {                             
                      "url": `${url1.value}`,
                      "name": `${name1.value}`,
                      "params": {
                        "status": true,
                        "progress": "14"
                      },
                      "description":`${description1.value}`,
                      "date": parseInt(date1.value)  || parseInt(Date.now())
                    }
                    var json = JSON.stringify(obj);

                    const options = {
                        method: 'put',
                        headers: {
                        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        body: json              
                    }
                    fetch(`http://localhost:3000/data/${statGallery[temp].id}`, options)
                    .then((response) => {
                           return response.json();               
                    })
                    .then((newData) => {
                            console.log('Request succeeded with JSON response', newData);
                            fetch("http://localhost:3000/data") //get data json from json file after was posted a new object
                                .then((response)=> response.json())
                                .then((datajson)=>{//data =  datajson; //console.log(datajson)
                                     statGallery =  getGalleryfromData(datajson);
                                     getCreatedArray();
                                 });                     
                    })
                    .catch((error) => {
                        console.log('Request failed', error);
                    });
                }
                bu.addEventListener('click',updateJS);


            }        

        }
//#################
       /* const showNumberOfImages = () => {// show the number under the add picture button
            let rez;
            var elem = btn.nextElementSibling.nextElementSibling;
            rez = this.statGallery.length - this.gallery.length;
            elem.innerHTML = `images to add ${rez}`;
        }    */
//################## // find first available element from statGallery that is not in gallery and can be added => return this element
        const addToGalleryfromStatGallery = () => {
            for (var i = 0; i < this.statGallery.length; i++) {
                if (this.gallery.indexOf(this.statGallery[i]) < 0) {
                    return this.statGallery[i];
                }
            }
        }       
//#################
        const changeGallery = () => {// sort the array of gallery and show new array on page html using data saved in local storage
            var value = localStorage.getItem('drop').indexOf(1);           
            localStorage.setItem('menu', value);
            filterGallery(this.gallery);
            firstBlock.innerHTML = '';
            for (var i = 0; i < gallery.length; i++) {
                galleryInterpolation(gallery,i);
            }
        }
//#################
        btn.addEventListener('click',init);
        firstBlock.addEventListener('click',deleteImage);  
        firstBlock.addEventListener('click',updateImage);  
        main2.addEventListener('click',drop);      
       // showNumberOfImages();
    }
}

