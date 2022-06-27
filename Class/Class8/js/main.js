"use strict";
function splitArr(arr)
{
    const arr_odd = [];
    const arr_even = [];
    let index_odd = 0;
    let index_even = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        if(arr[i] % 2 !== 0)
        {
            arr_odd[index_odd] = arr[i];
            index_odd++;
        }
        else
        {
            arr_even[index_even] = arr[i];
            index_even++;
        }
    }
    console.log(arr_odd);
    console.log(arr_even);
}
function main ()
{
    const arr = [1,2,3,4,6,7,8,9,10];
    splitArr(arr);
    console.log("done");
}
main();