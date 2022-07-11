function convert12to24(time)
{
    time = time.split(" ");
    let hoursNminutes = time[0].split(":");
    let result = [,];
    if(hoursNminutes[0] == "12") 
    {
        result[0] = 0;
    }
    if(time[1] == "p.m.")
    {
        result[0] = parseInt(hoursNminutes[0]) + 12;
    }
    else
    {
        result[0] = parseInt(hoursNminutes[0]);
    }
    result[1] = parseInt(hoursNminutes[1]);

    return result.map(num => {
        return String(num);
      });
}

function timeToEat (clock)
{

    let result = [,];
    ///breakfast at 7:00 a.m. lunch at 12:00 p.m. dinner at 7:00 p.m. 


    let time_24 = convert12to24(clock);

    let current = new Date();
    current.setHours(time_24[0]);
    current.setMinutes(time_24[1]);
    current.setSeconds(0);
    current.setMilliseconds(0);
    
    let breakfast = new Date();
    breakfast.setHours(7);
    breakfast.setMinutes(0);
    breakfast.setSeconds(0);
    breakfast.setMilliseconds(0);

    let lunch = new Date();
    lunch.setHours(12);
    lunch.setMinutes(0);
    lunch.setSeconds(0);
    lunch.setMilliseconds(0);
    
    let dinner = new Date();
    dinner.setHours(19);
    dinner.setMinutes(0);
    dinner.setSeconds(0);
    dinner.setMilliseconds(0);

    let hours;
    let minutes;
    let seconds;

    if(parseInt(current.getHours()) >= 7 && parseInt(current.getHours()) < 12)
    {
        seconds = (parseInt(current.getTime()) - parseInt(lunch.getTime())) / 1000;
        minutes = seconds / 60;
        hours = Math.abs(minutes / 60);
        result[0] = Math.floor(hours);
        minutes = hours - Math.floor(hours);
        result[1] = Math.floor(minutes * 60);
        
    }
    else if(parseInt(current.getHours()) >= 12 && parseInt(current.getHours()) < 19)
    {
        seconds = (parseInt(current.getTime()) - parseInt(dinner.getTime())) / 1000;
        minutes = seconds / 60;
        hours = Math.abs(minutes / 60);
        result[0] = Math.floor(hours);
        minutes = hours - Math.floor(hours);
        result[1] = Math.floor(minutes * 60);
        
    }
    else if(parseInt(current.getHours()) >= 19 || parseInt(current.getHours()) < 7)
    {
        seconds = (parseInt(current.getTime()) - parseInt(breakfast.getTime())) / 1000;
        minutes = seconds / 60;
        hours = Math.abs(minutes / 60);
        result[0] = Math.floor(hours);
        minutes = hours - Math.floor(hours);
        result[1] = Math.floor(minutes * 60);
        
    }  
    console.log(current);
    return result;
    
    
    
    
}
function main ()
{
    console.log(timeToEat("5:50 p.m."));
    console.log("done");
}
main();