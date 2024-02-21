

class Validator{
	constructor(){
		
	}
	

//////////

	isValid(jsonObj,mainObj){

		
    //////////////////
       	if (checkValidEmail()) {
       		
       		if ((jsonObj.user == mainObj.user)  && (jsonObj.password == mainObj.password)){
       			console.log(jsonObj.user);
       			console.log(mainObj.user);
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





 
		

