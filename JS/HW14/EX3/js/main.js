"use strict";

function mean(number)
{
    let str = number.toString(10);
    let sum = 0;
    for (let i = 0; i < str.length; i++) 
    {
        sum += parseInt(str[i],10);
        
    }
    let mean = sum / str.length;
    return mean;
}
function main ()
{
    let n = 12345;
    console.log(mean(n)); 
    console.log("done");
}
main();