/* A Javascript to print numbers from one to 20 with some basic tasks written by Obikoya Olumide Joseph*/
for (var i=1; i<21; i++)
{
    console.log(i);
 /* Checks for the division status of 3*/   
    if(i%3==0)
    {
      console.log (i, "is divisible by 3 it is Fizz ") ;
    }
 /* Checks for the division status of 5*/ 
    else if (i%5==0)
    {
        console.log (i," is divisible by 5 it is boss");
    }
    /* Checks for the division status of 3&5*/ 
    else if (i%3==0 && i%5==0)
    {
    	console.log (i," is divisible by 3&5 it is fizzboss");

    }
    else
    	/* Checks for the division status of Neutral values*/ 
    {
    	console.log (i,"Its not divisible by 3 or 5");
    }
} 
