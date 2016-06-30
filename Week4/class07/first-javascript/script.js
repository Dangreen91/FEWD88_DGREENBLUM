

document.getElementById('greeting').style.color = "red";

var myPara = document.getElementById('myPara');

function doSomething(){
	myPara.style.color = "green"
}

myPara.onclick = doSomething;