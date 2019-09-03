// JavaScript Document
for (var i=0;i<100;i++){
var request = new XMLHttpRequest();
request.open('GET','data.txt',false);
request.send();
//if pake
if(request.status===200) {
console.log(request);
//doc pake ke 3
document.writeln(request.responseText);

}// JavaScript Document

}