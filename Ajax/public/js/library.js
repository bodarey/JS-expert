
var dangerBlock = document.querySelector('.alert-danger');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');	
var menu = document.querySelector('.d-flex');
var form = document.querySelector('.form-signin');
var main1 = document.querySelectorAll('main')['0'];
var main2 = document.querySelectorAll('main')['1'];
var userPage = document.querySelectorAll('main')['2'];
localStorage.setItem("user",'user@user.com');
localStorage.setItem("password",123456);

/////////////////////////////////////////////////////////////////

//////////////////////
/*
var data = [];
async function getData(){
    data = [];
	fetch("http://localhost:3000/data")
	.then((response)=> response.json())
	.then((datajson)=>{data =  datajson; //console.log(datajson)
	});
	//console.log(data);
	return data;
	
}
data = getData();
console.log(data);
*/