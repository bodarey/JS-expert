
var dangerBlock = document.querySelector('.alert-danger');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');	
var menu = document.querySelector('.d-flex');
var form = document.querySelector('.form-signin');
var main1 = document.querySelectorAll('main')['0'];
var main2 = document.querySelectorAll('main')['1'];
var userPage = document.querySelectorAll('main')['2'];
t(main2);
t(userPage);
t(dangerBlock);
t(menu);

inputEmail.addEventListener('keypress',function(){t(dangerBlock) });
inputPassword.addEventListener('keypress',function(){t(dangerBlock) });
/////////////////////////////////////////////////////////////////
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

//////////////////// event listener for menu links to change colors in red and in text-dark
var f = (event) => {	
			var a = [];
			a.push(menu.firstElementChild.nextElementSibling.firstElementChild);
			a.push(menu.firstElementChild.nextElementSibling.lastElementChild);
			a.push(menu.lastElementChild);
			a.forEach(function(elem){ 
				if (!elem.classList.contains('text-dark')) {
					elem.classList.add('text-dark');
				}
				if (!elem.classList.contains('text-danger')) {
					elem.classList.add('text-danger');
				}
				if (elem == event.target) {
					elem.classList.remove('text-dark');
				}
			 });
			if (event.target == menu.lastElementChild) {
				let elem = menu.lastElementChild;
				elem.classList.add('text-dark');
				elem.classList.remove('text-danger');
			}
		};

menu.addEventListener('click',f);
//////////////////////////////////////////////////////////////////////
const selectionMenu = (event) => {
			var galleryItem = menu.firstElementChild.nextElementSibling.firstElementChild;
			var userItem = menu.firstElementChild.nextElementSibling.lastElementChild;
			var exitItem = menu.lastElementChild;

			switch (event.target) {
				case galleryItem:					
					t(main1,userPage);
					t(true,main2);
					break;
				case userItem:					
					t(main1,main2);
					t(true,userPage);
					break;
				case exitItem:					
					t(main2,userPage,menu);
					t(true,main1,form);
					break;
				default:
					// statements_def
					break;
			}
        }

menu.addEventListener('click',selectionMenu);
////////////////////////////////////////////////////////////////////////////////
function createPageUser(){ //create page user with interpolation method
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        userPage.innerHTML = `
            <br> This is the page of a user: ${localStorage.getItem('user')}<br>
            with password <div>${showPassword() }</div>
            show password:
         `;
        userPage.appendChild(x);     

        x.addEventListener('change', function() {
        if (this.checked) {
            userPage.querySelector('div').innerHTML = showPassword(true);
        } else {            
            userPage.querySelector('div').innerHTML = showPassword();
        }
        });
}    
function showPassword(b=false){//////////////////////// show password or show ****
        var pass = localStorage.getItem('password');
        if (!b) {
            var rez ='';
            for(var i=0;i<pass.length;i++){
                rez += '*'

            }
            return rez;

        } else {
            return pass;
        }
    }
//////////////////////