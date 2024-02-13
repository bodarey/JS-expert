/* 
*  Схематическое изображение класса Логин формы
*/

class LoginForm  {	
	constructor(validatorModule, galleryModule){
		this.validator = validatorModule;
		this.gallery = galleryModule;
	}	
	initComponent(){	
		//
		inputEmail.value ='user@user.com';
       	inputPassword.value ='123456';
       	t(main2);
		t(userPage);
		t(dangerBlock);
		t(menu);
		inputEmail.addEventListener('keypress',function(){t(dangerBlock) });
		inputPassword.addEventListener('keypress',function(){t(dangerBlock) });
		var btn = document.querySelector('.btn-block');
		createPageUser();
		this.showGallery();
		this.gallery.addImage();
		/////
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
		/////	
		menu.addEventListener('click',selectionMenu);
		
		function showPageRefresh(){
			switch (localStorage.getItem('refresh')) {
				case '1':					
					t(main1,userPage);
					t(true,main2,menu);	

					break;
				case '2':					
					t(main1,main2);
					t(true,userPage,menu);	
					createPageUser();						
					break;
				case '3':					
					t(main2,userPage,menu);
					t(true,main1,form);							
					break;
				default:
					// statements_def
					break;
			}
		}
		/////
		var showColorLink = (event) => {	
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
		menu.addEventListener('click',showColorLink);
		showPageRefresh();
		const butonForm = () => { // function to enter the form if is valid or not
			if (this.validator.isValid()){
				t(false,form,dangerBlock);
  				t(true,main2,menu);
  				menu.firstElementChild.nextElementSibling.firstElementChild.classList.remove('text-dark');
				menu.firstElementChild.nextElementSibling.firstElementChild.classList.add('text-danger');
				//createPageUser();		
				localStorage.setItem('refresh',1);		
						
			} else{					
				t(false,main2,menu);
				t(true,dangerBlock,form);
			}
		}
		btn.addEventListener('click',butonForm);	
	}

	validateUserData(){
		this.validator.isValid();
	}

	showGallery(){
		this.gallery.initComponent();
	}
}
