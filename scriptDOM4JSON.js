// JavaScript Document

var request;
if(window.XMLHttpRequest){
	request= new XMLHttpRequest();
	}else {
		request= new ActiveXObject("Microsoft.XMLHTTP");
		}

request.open('GET','data.json');
request.onreadystatechange = function(){
	if((request.readyState === 4)&&(request.status===200) ) {
		var items = JSON.parse(request.responseText);
		//console.log(items);

		var output = '<ul>';
		for (var key in items){
			output +='<li>' +items[key].nama+'</li>';
			}
		output +='</ul>';
		document.getElementById("update").innerHTML=output;
	}

//if pake
}
request.send();
