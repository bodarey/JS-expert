
var dangerBlock = document.querySelector('.alert-danger');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');	
var menu = document.querySelector('.d-flex');
var form = document.querySelector('.form-signin');
var main1 = document.querySelectorAll('main')['0'];
var main2 = document.querySelectorAll('main')['1'];
var userPage = document.querySelectorAll('main')['2'];
localStorage.setItem("user",'user@user.com');
localStorage.setItem("password",123456);

/////////////////////////////////////////////////////////////////
function getFromObj(obj){
    var arr = [];
    arr = obj.map(function(element){
        var newObj ={};
        newObj.id = element.id;
        newObj.url = element.url;
        newObj.name = element.name;
        newObj.description = element.description;
        newObj.date = element.date;
        return newObj;
    });
    return arr;// get new array of obj from data file     
}


//////////////////////
function  showGalleryText(gallery){     
    if (gallery.length > 0) {
        var block = document.querySelector('.first-group');
        block.classList.remove('hide','show');
        block.classList.add('show');  
    }
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
/////////////////////////////////////////
 function getDatefromString(date){
    let data = new Date(date);
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}   ${data.getHours()}:${data.getMinutes()}`;
}
//#################// return new array of objects for gallery from existing data
function getGalleryfromData(obj){ 
    var arr = [];
    arr = obj.map(function(element){
        var newObj ={};
         newObj.id = element.id;
        newObj.url = element.url;
        newObj.name = element.name;
        newObj.description = element.description;
        newObj.date = element.date;
        return newObj;
    });
    return arr;// get new array of obj from data file
}       
//#################// delete from array arr position i
function deleteFromGallery(arr,i){
            arr.splice(i,1);
}
 //################# // from array arr is interpolating in htmml code position i
const galleryInterpolation = (arr,i)=>{
	var firstBlock = document.getElementById('first-line'); 
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
            <div class="btn btn-sm btn-secondary delete">delete Image</div>
            <button  type="button" class="btn btn-sm btn-light update" data-bs-toggle="modal" data-bs-target="#exampleModal">
			  update Image
			</button>
        </div>`;
    firstBlock.innerHTML += element;   
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
//-----------------------------------------------------------------------------------//
//////////////////////// //user page functions
function t(bool=false, ...args)  { // show or hide a list of blocks
// if blocks suppouse to be hiden bool can be omited
	if (typeof(bool) === 'boolean') {
			args.forEach(elem=>{removeClass(elem)});
		if (bool) {
			args.forEach(elem=>{show(elem)});
		} else {
			args.forEach(elem=>{hide(elem)});
		}
	} else{
		for(var i = 0; i<arguments.length; i++){
			hide(arguments[i]);
		}
	}
	function removeClass(block){
		block.classList.remove('show');
	    block.classList.remove('hide');
	    block.classList.remove('d-none');
	}
	function hide(block){
		block.classList.add('hide');
	    block.classList.add('d-none');
	}
	function show(block){
		 block.classList.add('show');
	}
} 
//////////
const selectionMenu = (event) => {// menu after login page
	var galleryItem = menu.firstElementChild.nextElementSibling.firstElementChild;
	var userItem = menu.firstElementChild.nextElementSibling.lastElementChild;
	var exitItem = menu.lastElementChild;
	switch  (event.target) {
		case galleryItem:		
			t(main1,userPage);
			t(true,main2);
			localStorage.setItem('refresh',1);
			break;
		case userItem:					
			t(main1,main2);
			t(true,userPage);
			localStorage.setItem('refresh',2);
			break;
		case exitItem:					
			t(main2,userPage,menu);
			t(true,main1,form);
			localStorage.setItem('refresh',3);
			break;
		default:
			// statements_def
			break;
	}
}
////////////
function showPassword(b=false){//////////////////////// show password or show ****
	var pass = localStorage.getItem('password');
	if (!b) {
	    var rez ='';
	    for(var i=0;i<pass.length;i++){
	        rez += '*';
	    }
	    return rez;
	} else {
	    return pass;
	}
}

//////////////







