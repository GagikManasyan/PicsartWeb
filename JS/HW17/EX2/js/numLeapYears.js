function numLeapYears (range)
{
    let numbers = range.split("-");
    let common_counter = 0;
    let leap_counter = 0;
    for (let i = parseInt(numbers[0]); i <= parseInt(numbers[1]); i++)
    {
        if(i % 4 != 0)
        {
            common_counter++;
        }
        else if (i % 100 != 0)
        {
            leap_counter++;
        }
        else if (i % 400 != 0)
        {
            common_counter++;
        }
        else
        {
            leap_counter++;
        }


    }
    return "common years: " + common_counter + " leap years: " + leap_counter;
    
}
function main ()
{
    console.log(numLeapYears("1600-2000"));
    console.log("done");
}
main();