function bilanganTerbesar(){
	console.log("bilangan terbesar ");	
	a>b? console.log("a: ",a):console.log("b: ",b)	;
}

function bilanganTerbesar2(a,b){
	console.log("bilangan terbesar argument ");	
	a>b? console.log("a: ",a):console.log("b: ",b)	;
}


function bilanganTerbesar3(a,b){
	var result;
	a>b? result=["a : ",a]: result=["b: ",b];
	return result;
}

var a =3/4;
var b = 5/7;

bilanganTerbesar();

bilanganTerbesar2(a,b);

bilanganTerbesar2(8,9);


console.log(bilanganTerbesar3(3,7));

var bilangan = bilanganTerbesar3(a,b);

console.log("bilangan pertama",a);
console.log("bilangan kedua",b);
console.log("bilangan " + bilangan[0]+ "dengan nilai : " +bilangan[1]+ " adalah yang terbesar");

