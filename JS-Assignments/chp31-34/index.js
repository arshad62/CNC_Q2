var Name=prompt("Enter Your Name!","Name");
var days=Number(prompt("Enter Your DOB","24"));
var month=Number(prompt("Enter Your Month","5"));
var year=Number(prompt("Enter Your Year","1999"));

var d=new Date();

var setYear=new Date(year)
var currentYear=d.getFullYear();
var selectYear=setYear.getTime();
var dif=currentYear-selectYear;
var perYear=dif*365;

var currentMonth=12;
var selectMonth=month;
var difference=currentMonth-selectMonth;

var currentDate=31;
var selectDate=days;
var differenc=currentDate-selectDate;

var currentHour=d.getHours();
var currentMints=d.getMinutes();
var currentSecond=d.getSeconds();

    console.log(`"Hello ${Name} Good Morning","Good Afternoon","Good Evening"`);


var otherday=new Date()
otherday.setDate(days)
otherday.setMonth(month-1)
otherday.setFullYear(year)
console.log(`Your DOB is ${otherday}`);
document.write(`Your DOB is ${otherday}`);
console.log(`Your are ${dif} Years ${difference} Month  ${differenc} Days ${currentHour}Hours ${currentMints} Mints ${currentSecond} Seconds old`);
document.write(`Your are ${dif} Years ${difference} Month  ${differenc} Days ${currentHour}Hours ${currentMints} Mints ${currentSecond} Seconds old"\n"`)
console.log(`Your age is ${perYear} Days`);
var nextbirthday=dif/365
document.write(`Your age is ${perYear} Days"\n"`)
console.log(`How many time left in next birthday: ${nextbirthday} Days`);