// write a js function to generate an array. 
// The elements in the array should be integers in a range between
// two integers given as arguments

function makeArray(first, second){
	var start = first;
	var array = [];
	for(var i = first; i<=second; i++){
		array.push(start);
		start++;
		
	}
 console.log(array);
}

makeArray(-2,4);