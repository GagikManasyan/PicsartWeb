"use strict";

function secondLargest(array)
{
    let max = array[array.length-1];
    let second_max = 0;
    for (let i = 0; i < array.length; i++) 
    {
        if(array[i] > max) 
        {
            second_max = max;
            max = array[i];  
        }
        else if (array[i] !== max && array[i] > second_max) 
        {
          second_max = array[i];
        }
    }
    if(array.length <= 0)
    {
        return 0;
    }
    else
    {
        return second_max;
    } 
}
function main ()
{
    console.log(secondLargest([54, 23, 11, 17, 10]));
    console.log("done");
}
main();