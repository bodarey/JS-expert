(function run(){
	var firstPlayer=0;
	var secondPlayer=0;
	var str ='';
	var play = document.getElementById('play');
	var clear = document.getElementById('clear');
	
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
					//return 'firstPlayer';
				} else {
					str += secondMsg();
					//return 'secondPlayer';
				}
				break;	
			case 2:
				if (secondPlayer == 1) {
					str += secondMsg();
					//return 'secondPlayer';
				} else {
					str += firstMsg();
					//return 'firstPlayer';
				}
				break;
			case 3:
				if (secondPlayer == 1) {
					str += firstMsg();
					//return 'firstPlayer';
				} else {
					str += secondMsg();
					//return 'secondPlayer';
				}
				break;
			default:
				//return undefined;
				break;
		}
	}

	function PrintResult(id){
		document.getElementById(id).innerHTML = str;
	}

	function start(){
		firstPlayer = getTurn();
		secondPlayer = getTurn();
		getWinner();
		PrintResult('result');

	}

	function close(){
		document.getElementById('result').innerHTML = '';
		str ='';
	}
	
	play.addEventListener('click',start);
	clear.addEventListener('click',close);
	for (var i = 0; i <100; i++) {
		console.log(getTurn());
	}

}())