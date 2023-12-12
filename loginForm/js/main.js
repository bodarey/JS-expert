const obj = (function() { 
    var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.getElementById('inputPassword');
    var dangerBlock = document.querySelector('.alert-danger');
    var form = document.querySelector('.form-signin');
    var userPage = document.querySelector('.userdata');
    var footer = document.querySelector('.start-50');
    var check =  document.querySelector('.checkbox').firstElementChild.firstElementChild;
    dangerBlock.classList.add('hide');
    // hide or show the block with error message
    form.addEventListener('keypress', function(event){
        if ((event.target == inputEmail) || (event.target == inputPassword ) ){
            showHideBlock(dangerBlock,'hide');
        }
    });
    // set user and password in localstorage
    function setLogAndPass(l,p){
        localStorage.setItem('user',l);
        localStorage.setItem('password',p);
    }
    // the function for evenlistener on login form
    function initComponent(){
        createPageUser();
        if (checkInputIsEmpty(inputEmail)  &&  checkInputIsEmpty(inputPassword) && checkValidEmail()) {
            showHideBlock(form,'hide');
            showHideBlock(userPage,'show');
            showHideBlock(footer,'show');
            showHideBlock(dangerBlock,'hide');
            if (check.checked){
                localStorage.setItem('u',inputEmail.value);
                localStorage.setItem('p',inputPassword.value);
            }
            else {
                localStorage.setItem('u','');
                localStorage.setItem('p','');
            }
        } else {
            showHideBlock(dangerBlock,'show');
        }
    }
    ////////////////// check email as string for regexp
    function checkValidEmail() {
        var local = inputEmail.value;
        if (local.search(/\w+@\w+.\w+/) == 0){
        return true;
        } else {
            return false;
        }
    }
    //////////////////check if data from input form is equal with data from localstorage
    function checkInputIsEmpty(block){
        if ((block ==  inputEmail) && (inputEmail.value == localStorage.getItem('user')) ) {
            return true;
        }
        if ((block ==  inputPassword) && (inputPassword.value == localStorage.getItem('password')) ) {
            return true;
        }
        return false;
    }
    ///////////////////////// show or hide a block / action show or hide
    function showHideBlock(block,action){
        block.classList.remove('show');
        block.classList.remove('hide');
        if (action == 'hide') {
            block.classList.add('hide');
        } else if (action == 'show'){
            block.classList.add('show');
        }
    }
    /////////////////////////
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

        var f = footer.firstElementChild.firstElementChild;
        f.addEventListener('click',function(){
            showHideBlock(form,'show');
            showHideBlock(userPage,'hide');
            showHideBlock(footer,'hide');
            inputEmail.value = localStorage.getItem('u');
            inputPassword.value = localStorage.getItem('p');
         })

    }
    //////////////////////// show password or show ****
    function showPassword(b=false){
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
    ////////////////////////
    return{
    setLogAndPass: setLogAndPass,
    initComponent: initComponent
    }

}());
obj.setLogAndPass('user@gmail.com','parola');
var submit = document.getElementById('submit');
submit.addEventListener('click',obj.initComponent);


