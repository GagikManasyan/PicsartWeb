"use strict";

function checkArr(arr)
{
    let counter = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        if(i % 2 != 0 && arr[i] % 2 != 0)
        {
            counter++;
        }
        else if (i % 2 == 0 && arr[i] % 2 == 0)
        {
            counter++;
        }
        
    }
    if(counter == arr.length)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function main ()
{
    const arr = [2, 7, 4, 9, 6, 1, 6, 3];
    console.log(checkArr(arr)); 
    console.log("done");
}
main();