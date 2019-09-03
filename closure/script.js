/*function doSomeMath() {
	var a = 5;
	var b = 4;
	
	function multiply(){
		var result =a*b;
		return result;
		}

	//return sum;
	return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());
*/


function giveEms(pixels){
	var baseValue =16;
	
	function doTheMath(){
		return pixels/baseValue;
		}
		
		return doTheMath;
	
	}
	
	var smallSize = giveEms(12);
	var mediumSize = giveEms(18);
	var largeSize = giveEms(24);
	var xlargeSize = giveEms(32);
	
	
	console.log("Small Size : ",smallSize());
	console.log("Small Size : ",mediumSize());
	console.log("Small Size : ",largeSize());
	console.log("Small Size : ",xlargeSize());
	