(function run(){
	var firstNumber,secondNumber,total = 0;
	var str ='';
	for(var i=1;i<16;i++){
		firstNumber = getRndNumber();
		secondNumber = getRndNumber();
		if (i == 8 || i == 13){
		  continue; 
		}
		setResult(`first number: <b>${firstNumber}</b> &nbsp;&nbsp;|&nbsp;&nbsp; second number: <b>${secondNumber}</b>`); 
		isNumbersEqual();
		isBigDifference();
		setResult('</br>');
		printResult('result');

	}


	function getRndNumber(){
		return Math.floor((Math.random() * 6) + 1);
	}
	function setResult(s, div = 'result'){
		str += s;
	}
	function isNumbersEqual(){
		(firstNumber == secondNumber) ? (setResult(`:  <i>Numbers are equal ${firstNumber}  </i>`)) : (setResult(''));
	}
	function isBigDifference(){
		((firstNumber < 3 && secondNumber > 4) || (secondNumber < 3 && firstNumber > 4)) ? (setResult(`:<i> there is big diference between numbers ${Math.abs(secondNumber - firstNumber)}</i>`)) : (setResult(''));
	}
	function total(){
		total += firstNumber + secondNumber;
	}
	function printResult(div){
		document.getElementById(div).innerHTML = str;
	}

}())
