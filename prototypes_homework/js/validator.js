

function Validator(){
	
}
//////////
Validator.prototype = {
	isValid: function(){

		
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





 
		

