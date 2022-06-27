"use strict";

function checkArr(arr)
{
    let even_counter = 0;
    let odd_counter = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        if(i % 2 != 0 && arr[i] % 2 != 0)
        {
            odd_counter++;
        }
        else if (i % 2 == 0 && arr[i] % 2 == 0)
        {
            even_counter++;
        }
        
    }
    if(even_counter + odd_counter == arr.length)
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
    const arr = [2, 7, 8, 8, 6, 1, 6, 3];
    console.log(checkArr(arr)); 
    console.log("done");
}
main();