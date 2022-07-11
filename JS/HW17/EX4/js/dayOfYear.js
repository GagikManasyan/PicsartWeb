function isLeapYear (year) 
{
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) 
    {
        return true;
    } 
    else 
    {
        return false;
    }
};

function dayOfYear (str) {

    str = str.split("/");
    let date = new Date();
    date.setDate(str[1]);
    date.setMonth(str[0]);
    date.setFullYear(str[2]);
    let dec = new Date();
    dec.setDate(31);
    dec.setMonth(12);
    dec.setFullYear(date.getFullYear());
    let result = date.getTime() - dec.getTime();
    result = result / (1000 * 3600 * 24);
    if(isLeapYear(parseInt(date.getFullYear())) == true)
    {
        return 366 - Math.abs(result);
    }
    else
    {
        return 365 - Math.abs(result);
    }
    
}
function main ()
{   
    console.log(dayOfYear("12/13/2020"));
    console.log("done");
}   
main();