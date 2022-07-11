function getDays (start,end)
{
    let result = (start.getTime() - end.getTime()) / (1000 * 3600 * 24);
    return Math.abs(result);
    
}
function main ()
{
    console.log(getDays(
        new Date("June 14, 2019"),
        new Date("June 20, 2019")
      ));
    console.log("done");
}
main();