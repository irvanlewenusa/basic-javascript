// JavaScript Document

var request = new XMLHttpRequest();
request.open('GET','data.txt',false);
request.send();
//if pake
if(request.status===200) {
console.log(request);
//doc pake ke 3
document.writeln(request.responseText);

}