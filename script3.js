// JavaScript Document

var request = new XMLHttpRequest();
request.open('GET','data.txt');
request.onreadystatechange = function(){
	if((request.readyState === 4)&&(request.status===200) ) {
console.log(request);
//doc pake ke 3
document.writeln(request.responseText);
	}

//if pake
}
request.send();
