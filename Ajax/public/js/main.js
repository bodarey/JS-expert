/* 
*  Схема инициализации приложения
*/

	var obj = {
		user :'user@user.com',
		password : '123456'
	}


var data;
fetch("http://localhost:3000/data")
	.then((response)=> response.json())
	.then((datajson)=>{data =  datajson; 		
	let galleryModule = new ExtendedGallery();
	let loginForm = new LoginForm(validatorModule, galleryModule);
	loginForm.addUserPassword(obj);
	loginForm.initComponent();

});

let validatorModule = new Validator();
	
