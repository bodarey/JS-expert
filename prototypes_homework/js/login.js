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
		var btn = document.querySelector('.btn-block');
		var itemMenu = document.querySelector('.bg-white');

		const butonForm = () => {
				if (this.validator.isValid()){
					showHideBlock(form,'hide');
	  				showHideBlock(dangerBlock,'hide');
	  				showHideBlock(main2,'show');
	  				showHideBlock(menu,'show');
				} else{
					showHideBlock(form,'show');
				 	showHideBlock(dangerBlock,'show');
					showHideBlock(main2,'hide');
					showHideBlock(menu,'hide');
				}
			}
		btn.addEventListener('click',butonForm);
//////////////////// event listener for menu links to change colors in red and in text-dark
	    
		itemMenu.firstElementChild.nextElementSibling.firstElementChild.classList.remove('text-dark');
		itemMenu.firstElementChild.nextElementSibling.firstElementChild.classList.add('text-danger');
		var f = (event) => {	
			var a = [];
			a.push(itemMenu.firstElementChild.nextElementSibling.firstElementChild);
			a.push(itemMenu.firstElementChild.nextElementSibling.lastElementChild);
			a.push(itemMenu.lastElementChild);
			a.forEach(function(elem){ 
				if (!elem.classList.contains('text-dark')) {
					elem.classList.add('text-dark');
				}
			 });
			a.forEach(function(elem){ 
				if (!elem.classList.contains('text-danger')) {
					elem.classList.add('text-danger');
				}
			 });
			a.forEach(function(elem){
				if (elem == event.target) {
					elem.classList.remove('text-dark');
				}
			});
		};

		itemMenu.addEventListener('click',f);
//////////////////
		
	},
	validateUserData : function (){
		this.validator.isValid();
	},

	showGallery: function(){
		this.gallery.init();
	}
}
