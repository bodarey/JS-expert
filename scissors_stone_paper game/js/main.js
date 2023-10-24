(function run(){
	var firstPlayer=0;
	var secondPlayer=0;
	var str ='';
	var play = document.getElementById('play');
	var clear = document.getElementById('clear');
	// lambda functions return text to substitute in HTML later
 	var firstMsg = () => `first player win, the result is firstPlayer: ${getNameById(firstPlayer)} | secondPlayer: ${getNameById(secondPlayer)}  </br>`;
	var secondMsg = () =>`second player win, the result is firstPlayer: ${getNameById(firstPlayer)}| secondPlayer: ${getNameById(secondPlayer)}  </br>`;

	function getTurn(){ // return a number between 1..3
		return Math.floor(Math.random() * (3 - 1 + 1) + 1);
	}

	function getNameById(id){ // return a name of randomness in the game using function getTurn
		switch (id) {
			case 1: return 'stone';
				break;
			case 2: return 'scissors';
				break;
			case 3: return 'paper';
				break;
			default:
				return 'eroare';
				break;
		}
	}

	function getWinner(){ // write the result in string and return result of winner
		if (firstPlayer == secondPlayer) {
			str += `Equal, the result is ${getNameById(firstPlayer)} ${firstPlayer}  || ${secondPlayer} </br>`;
			return 'equal';
			//console.log(firstPlayer);
		}
		switch (firstPlayer) {
			case 1:
				if (secondPlayer == 2) {
					str += firstMsg();					
				} else {
					str += secondMsg();					
				}
				break;	
			case 2:
				if (secondPlayer == 1) {
					str += secondMsg();					
				} else {
					str += firstMsg();					
				}
				break;
			case 3:
				if (secondPlayer == 1) {
					str += firstMsg();					
				} else {
					str += secondMsg();					
				}
				break;
			default:				
				break;
		}
	}

	function PrintResult(id){ // printing the result in HTML with element id from document
		document.getElementById(id).innerHTML = str;
	}

	function start(){  //function to run the play button
		firstPlayer = getTurn();
		secondPlayer = getTurn();
		getWinner();
		PrintResult('result');

	}

	function clearStr(){ // functio to run the clear button
		(function(div ='result'){
			document.getElementById(div).innerHTML = '';
			str ='';
		}())
	}
	
	play.addEventListener('click',start);
	clear.addEventListener('click',clearStr);
	
}())