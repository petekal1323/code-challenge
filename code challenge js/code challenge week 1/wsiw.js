console.log("What should I wear?")
var temp = prompt("What is the temp outside?");
var event= prompt("what kind of event are you going to? formal, semi-formal, or casual?");

var tempSuggest, eventSuggest;

if(event==="casual"){
	eventSuggest = "something comfy";
}
else if (event === "semi-formal"){
	eventSuggest = "a polo or dress";
}
else {
	eventSuggest = "a suit";
}

if(temp<54){
	tempSuggest="a coat";
}
else if(temp>70){
	tempSuggest="no jacket";
}
else{
	tempSuggest="a jacket";
}


console.log("Since your event is " + event + " and the temp is " + temp + " degrees, " + 
	"You should wear " + eventSuggest + " and " + tempSuggest);











