var course1= Number(prompt("Enter Course1 Number","Course1 Number"))
var course2= Number(prompt("Enter Course2 Number","Course2 Number"))
var course3= Number(prompt("Enter Course3 Number","Course3 Number"))
var course4= Number(prompt("Enter Course4 Number","Course4 Number"))
var course5= Number(prompt("Enter Course5 Number","Course5 Number"))

var totalmarks=500;
var sum=course1+course2+course3+course4+course5
alert("You Got "+" "+sum + " Marks");
var percentage=sum/totalmarks*100;
document.write("You got "+" "+sum + " Marks ");
var limit=percentage.toFixed(2);
alert("You got " + " " + limit+"%");
document.write("You got " + " " + limit+"%");
switch (true) {
    case limit>=90:
        console.log("You achieved A+ Grade");
        break;
        case limit>=90:
            alert("You achieved A+ Grade");
            break;
         case limit>=75:
        alert("You achieved A Grade");
        break;
        case limit>=60:
        alert("You achieved B Grade");
        break;
        case limit>=45:
        alert("You achieved C Grade");
        break;
        case limit>=30:
        alert("You achieved D Grade");
        break;
        case limit>=0:
        alert("You are fail F Grade");
        break;
    default:
        alert("Error");
        break;
}