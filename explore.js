// for each letter in the string, return reversely,using the index.  
str = "hello";
console.log(str[4]+str[3]+str[2]+str[1]+str[0]);


function reverse(s) {
  var o = [];
  for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
    o[j] = s[i];
  return o.join('');
}

console.log(reverse("good"))

if (2 != 3){
	console.log("this is not ture")
}

var var1 = 3
var var2 = 4 
if( var1 == var2){
	console.log("this is false!");
} else {
	consolr.log("this is ture!")
}