// JavaScript Document

var request;
if(window.XMLHttpRequest){
	request= new XMLHttpRequest();
	}else {
		request= new ActiveXObject("Microsoft.XMLHTTP");
		}

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
