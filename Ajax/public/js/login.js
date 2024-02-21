/* 
*  Схематическое изображение класса Логин формы
*/

class LoginForm  {	
	constructor(validatorModule, galleryModule){
		this.validator = validatorModule;
		this.gallery = galleryModule;
		this.user = '';
		this.password ='';
		
	}	
	initComponent(){	
///////////////////////		
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
///////////////////////		
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
///////////////////////		
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
			if (event.target == menu.lastElementChild) { // is exit element from menu
				let elem = menu.lastElementChild;
				elem.classList.add('text-dark');
				elem.classList.remove('text-danger');
				const options = {
                    method: 'delete'              
                    }
                    //deleting from json login link object login with id:1
                    fetch(`http://localhost:3000/login/1`, options)
                    .then((response) => {
                       return response.json();               
                    })
                    .then((newData) => {
                        console.log('Request succeeded with JSON response', newData);
                        
                                            
                    })

                    .catch((error) => {
                    console.log('Request failed', error);
                });         
                    localStorage.setItem('user','');
	                localStorage.setItem('password','');
			}
		};
		menu.addEventListener('click',showColorLink);
		showPageRefresh();


		const butonForm = () => { // function to enter the form if is valid or not
////////////////////////////////////////////////////////////////////////
			const openGallery =()=>{
				t(false,form,dangerBlock);
  				t(true,main2,menu);
  				menu.firstElementChild.nextElementSibling.firstElementChild.classList.remove('text-dark');
				menu.firstElementChild.nextElementSibling.firstElementChild.classList.add('text-danger');
				//createPageUser();		
				localStorage.setItem('refresh',1);	
			}

			if ((localStorage.getItem('user') == this.user) && localStorage.getItem('password') == this.password){
				openGallery();
			}
			else {
				var obj =   {
	 			  "id": `1`,	
	              "user": `${inputEmail.value}`,
	              "password": `${inputPassword.value}`
	             
	            }
	            var json = JSON.stringify(obj);
	            const options = {
	                method: 'post',
	                headers: {
	                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
	                },
	                body: json
	            }



	            fetch('http://localhost:3000/login', options) //post an object to json file db.json
	                .then((response) => {
	                   return response.json();
	                })
	                .then((newData) => {
	                    console.log('Request succeeded with JSON response', newData);
	                    //console.log(newData);    

	                    fetch("http://localhost:3000/login") //get data json from json file after was posted a new object
	                        .then((response)=> response.json())
	                        .then((datajson)=>{ 
	                        	var json = datajson[datajson.length-1];
	                        	localStorage.setItem('user',obj.user);
	                        	localStorage.setItem('password',obj.password);

	                        	var objlogin ={
	                        		user : this.user,
	                        		password : this.password
	                        	}

	                        	if (this.validator.isValid(json,objlogin)){
									openGallery();	
											
								} else{			console.log('not valid');	
								console.log('json.user', json.user);	
								console.log('objlogin.user', objlogin.user);	
									t(false,main2,menu);
									t(true,dangerBlock,form);
								}


	                        
	                        });        
	                })

	                .catch((error) => {
	                //console.log('Request failed', error);
	                });             


				
			}
			
 			


/////////////////////////////////////////////





			
		}
		btn.addEventListener('click',butonForm);	
	}

	validateUserData(){
		this.validator.isValid();
	}

	showGallery(){
		this.gallery.initComponent();
	}
	addUserPassword(obj){
		this.user = obj.user;
		this.password = obj.password;
	}
}
