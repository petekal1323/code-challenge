total();

function total(){
var total=0;
var list = ["milk: ", "cereal: ", "juice: ", "apples: "];
var price = [4.99, 3.99, 3.00, 2.00];

  for (var i = 0; i < list.length ; i++ ){
  console.log(list[i] + price[i]);
}
for (var i=0; i<price.length; i++) {
  total+=price[i];
}
console.log("total: "+total);
}