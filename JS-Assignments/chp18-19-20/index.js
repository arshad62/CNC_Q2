
var courses=[]
for (var i = 0; i <5; i++) {
    
    select= prompt("course"+ (i+1),"Enter course here"); 
    courses.push(select)
}
alert("your courses are "+courses);
alert("Edit your course")
for (var i = 0; i <5; i++) 
{
     select=prompt("course"+(i+1),courses[i])
     courses.splice(i,1,select)
}
alert("your updated courses are "+courses);
