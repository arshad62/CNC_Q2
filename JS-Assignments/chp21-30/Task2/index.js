
var inputValue = prompt("cloUd naTive computinG","cloUd naTive computinG");
var s=inputValue.toString()
     s = s.toLowerCase();
console.log(s);
s=s.split(' ');
console.log(s);
for (let i = 0; i < s.length; i++) {
    s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
}
s=s.join(' ');
console.log(s);
alert(s);
