
var dangerBlock = document.querySelector('.alert-danger');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');	
var menu = document.querySelector('.d-flex');
var form = document.querySelector('.form-signin');
menu.classList.add('d-none');
dangerBlock.classList.add('hide');
var main1 = document.querySelectorAll('main')['0'];
var main2 = document.querySelectorAll('main')['1'];
main2.classList.add('d-none');

inputEmail.addEventListener('keypress',function(){showHideBlock(dangerBlock, 'hide') });
inputPassword.addEventListener('keypress',function(){showHideBlock(dangerBlock, 'hide') });

////////
function showHideBlock(block,action){
        block.classList.remove('show');
        block.classList.remove('hide');
        block.classList.remove('d-none');
        if (action == 'hide') {
            block.classList.add('hide');
            block.classList.add('d-none');
        } else if (action == 'show'){
            block.classList.add('show');
        }
}
////////



function Validator(){
	
}
//////////
Validator.prototype = {
	isValid: function(){
		/////////
		
    //////////////////check if data from input form is equal with data from localstorage
       	if (checkValidEmail()) {
       		if ((inputEmail.value == localStorage.getItem('user'))  && (inputPassword.value == localStorage.getItem('password'))){
  			  return true;         
       		}
     	}
       	//console.log('false');
     	      return false;    
    ////////////////////////////
		function checkValidEmail(){
	        var local = inputEmail.value;
	        if (local.search(/\w+@\w+.\w+/) == 0){
	        	return true;
		    } else {
		            return false;
		    }
    		}
    ///////////////////////////

    ////////////////////////
	}	
}

//////////
//var v = new Validator()
//var btn = document.querySelector('.btn-block');
//btn.addEventListener('click',v.isValid);

//var itemMenu = document.querySelector('nav');
//var b = itemMenu.firstElementChild;
//console.log(itemMenu.lastElementChild);
//console.log(itemMenu.nextElementSibling);
//b.classList.add('opacity-100');
//b.classList.add('text-danger');
