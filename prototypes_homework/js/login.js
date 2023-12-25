/* 
*  Схематическое изображение класса Логин формы
*/

let LoginForm = function (validatorModule, galleryModule) {	
	this.validator = validatorModule;
	this.gallery = galleryModule;
}

LoginForm.prototype = {

	initComponent : function (){
		//
		inputEmail.value ='user@user.com';
       		inputPassword.value ='123456';
		var btn = document.querySelector('.btn-block');
		const butonForm = () => { // function to enter the form if is valid or not
			

				if (this.validator.isValid()){
					t(false,form,dangerBlock);
	  				t(true,main2,menu);
	  				menu.firstElementChild.nextElementSibling.firstElementChild.classList.remove('text-dark');
					menu.firstElementChild.nextElementSibling.firstElementChild.classList.add('text-danger');
					createPageUser();
					var ext = this.gallery;
					ext.initComponent();
					ext.addImage();
					console.log(ext);
				} else{					
					t(false,main2,menu);
					t(true,dangerBlock,form);
				}
			}
		btn.addEventListener('click',butonForm);
		
	
		
	
		//////////////////
		
	},
	validateUserData : function (){
		this.validator.isValid();
	},

	showGallery: function(){
		this.gallery.init();
	}
}
