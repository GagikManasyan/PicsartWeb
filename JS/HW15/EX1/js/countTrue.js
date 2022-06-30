"use strict";

function countTrue(arr)
{
    let counter = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        if(!!arr[i])
        {
            counter++;
        }
        
        
    }
    return counter;
}
function main ()
{
    console.log(countTrue([]));
    console.log("done");
}
main();