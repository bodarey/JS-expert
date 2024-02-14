/* 
*  Схема инициализации приложения
*/
var data;
fetch("http://localhost:3000/data")
	.then((response)=> response.json())
	.then((datajson)=>{data =  datajson; 		
	let galleryModule = new ExtendedGallery();
	let loginForm = new LoginForm(validatorModule, galleryModule);
	loginForm.initComponent();
});

let validatorModule = new Validator();
	
