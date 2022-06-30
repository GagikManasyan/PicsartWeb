"use strict";

function cloneArr(arr)
{
    const copy_arr = [...arr];

    for (let i = 0; i < arr.length; i++) 
    {
        copy_arr.push(arr[i]);
    }
    return copy_arr;
}
function main ()
{
    console.log(cloneArr(['x', 'y', 'z']));
    console.log("done");
}
main();