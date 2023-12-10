const obj = (function() {
    var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.getElementById('inputPassword');
    var dangerBlock = document.querySelector('.alert-danger');
    var form = document.querySelector('.form-signin');
    var userPage = document.querySelector('.userdata');
    var footer = document.querySelector('.start-50');
    dangerBlock.classList.add('hide');
    //form.classList.add('hide');
    

   //console.log(form);
    function setLogAndPass(l,p){
        localStorage.setItem('user',l);
        localStorage.setItem('password',p);


    }
    function initComponent(){
        createPageUser();
        console.log("test");
        //setLogAndPass('nume1','parola1');
        if (checkInputIsEmpty(inputEmail)  &&  checkInputIsEmpty(inputPassword)) {
            console.log('input test');
            showHideBlock(form,'hide');
            showHideBlock(userPage,'show');
            showHideBlock(footer,'show');
            
           
            
            
        } else {
            console.log('else block');
            
        }

    }
    //////////////////
    function checkInputIsEmpty(block){

        return (block.value.trim() != "");
       // return true;
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
    function createPageUser(){
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
            //console.log();
            
        } else {
            
            userPage.querySelector('div').innerHTML = showPassword();
        }
        });

        var f = footer.firstElementChild.firstElementChild;
        f.addEventListener('click',function(){
            showHideBlock(form,'show');
            showHideBlock(userPage,'hide');
            showHideBlock(footer,'hide');
            


        })



    }
    ////////////////////////
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
obj.setLogAndPass('user','parola');
var submit = document.getElementById('submit');


submit.addEventListener('click',obj.initComponent);

