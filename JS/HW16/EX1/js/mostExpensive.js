mostExpensive = 
{
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
}
function findExpensive (jewelery)
{
    return "The most expensive one is the " + jewelery;
}


function main ()
{
    let keys = Object.keys(mostExpensive);
    let max = keys[0];
    for (let i = 0; i < keys.length; i++) 
    {
        if(mostExpensive[keys[i]] > mostExpensive[max])
        {
            max = keys[i];
        }
    }
    console.log(findExpensive(max));
    console.log("done");
}
main();


