function getDays (start,end)
{
    let result = (start.getTime()-end.getTime()) / (1000 * 3600 * 24);
    if(start < end)
    {
        return result * (-1);
    }
    else
    {
        return result;
    }
    
}
function main ()
{
    console.log(getDays(
        new Date("July 20, 2010"),
        new Date("June 12, 2019")
      ));
    console.log("done");
}
main();