"use strict";

function findNaN(arr)
{
    let index = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        if(Number.isNaN(arr[i]) == true)
        {
            index = i;
        }
        else
        {
            index = -1;
        }
        
    }
    return index;
}
function main ()
{
    console.log(findNaN([0, 1, 2, 3, 4]));





    console.log("done");
}
main();