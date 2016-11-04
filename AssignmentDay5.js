/* A Javascript to print numbers from one to 20 with some basic tasks written by Obikoya Olumide Joseph*/
for (var i=1; i<21; i++)
{
    console.log(i);
    
    if(i%3==0)
    {
      console.log (i, "is divisible by 3 it is Fizz ") ;
    }
    else if (i%5==0)
    {
        console.log (i," is divisible by 5 it is boss");
    }
    else if (i%3==0 && i%5==0)
    {
    	console.log (i," is divisible by 3&5 it is fizzboss");

    }
    else
    {
    	console.log (i,"Its not divisible by 3 or 5");
    }
} 
