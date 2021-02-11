
var input1=prompt("Enter the fraction Number");
var ceilnum= Math.ceil(input1);
alert(ceilnum);

var text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
var slicetext=text.slice(0,ceilnum);
alert(slicetext);
var s=slicetext.toString();
console.log(s.length);
var reversedString = "";
 
for (let i = 0; i < s.length; i++) { 
       reversedString = s[i] + reversedString; 
   
} 
alert("After reverse the text  "+reversedString);
 
console.log(reversedString);
