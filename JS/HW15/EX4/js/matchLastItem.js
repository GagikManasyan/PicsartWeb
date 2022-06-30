"use strict";

function matchLastItem(arr)
{
    let last_item = arr[arr.length-1];
    let str = "";
    for (let i = 0; i < arr.length - 1; i++) 
    {
        str += arr[i]; 
    }
    if(str === last_item)
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
    console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));
    console.log("done");
}
main();