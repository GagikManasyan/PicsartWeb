function sevenBoom(array)
{
    let result = "there is no 7 in the array";
    for (let i = 0; i < array.length; i++) 
    {
        let str = arr[i].toString(10);
        if(str.includes("7") == true)
        {
            result = "Boom!";
        }
    }
    return result;
}
function main()
{
    arr = [1,2,31,1];
    console.log(sevenBoom(arr));
}
main();