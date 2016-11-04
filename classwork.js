/* A Javascript to class*/
for (var i=1; i<21; i++)

var build=1;
var olu;
var Name="Olu";
var age=25;
var olderThanYou = age>10;
var youngerThanYou= age<10;
var sameageWithyou= age==10
rubbish=12;
if (olderThanYou)
{
console.log("I am older than you");
}
else if (youngerThanYou)
{
    console.log("I am younger than you");
   
}
else
{
    console.log("i am same age with you");
}

for (var i=20; i>1; i--)
{
    console.log(i);
    if(i%2==0)
    {
      console.log ("Even Number") ;
    }
    else
    {
        console.log ("Odd Numbers")
    }
} 

function IsEven(num)
{
return num%2 ==0 ? true : false;
}

IsEven(90);

while(age>1)
{
    if (IsEven (age))
    {
        console.log (age,"Even");
    }
    else
    {
        console.log (age,"Odd");
    }
    age--
}