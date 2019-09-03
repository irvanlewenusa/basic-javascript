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


/*var modify = document.getElementsByTagName('li');
modify[2].innerHTML=request.responseText;*/
//ul ke 2 list ke 3
/*var modify = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
modify[2].innerHTML=request.responseText;*/

var modify = document.getElementsByTagName('li');
for (var i=0;i<modify.length;i++)
{modify[i].innerHTML= request.responseText;
	}
	}

//if pake
}
request.send();
