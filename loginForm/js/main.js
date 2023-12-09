const obj = (function() {
    var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.getElementById('inputPassword');
    var dangerBlock = document.querySelector('.alert-danger');
    var form = document.querySelector('.form-signin');
    dangerBlock.classList.add('hide');
    //form.classList.add('hide');

   console.log(form);
    function setLogAndPass(l,p){
        localStorage.setItem('user',l);
        localStorage.setItem('password',p);


    }
    function initComponent(){
        console.log("test");
        setLogAndPass('nume1','parola1');
        if (checkInputIsEmpty(inputEmail)  &&  checkInputIsEmpty(inputPassword)) {
            console.log('input test');
            form.classList.add('hide');
            
            
        } else {
            console.log('else block');
            
        }

    }
    //////////////////
    function checkInputIsEmpty(block){

        return (block.value.trim() != "");
       // return true;
    }

    return{
    setLogAndPass: setLogAndPass,
    initComponent: initComponent
    }

}());
var submit = document.getElementById('submit');


submit.addEventListener('click',obj.initComponent);

