
var num=Number(prompt("Enter a Number for factorialize","5"))
console.log(num);
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(num))
  document.write(factorialize(num));
