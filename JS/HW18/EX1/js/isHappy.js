function isHappy(num)
{
    
    if(num == 1 || num == 7)
    {
        console.log("true");
        return true;
    }
    else if (num == 4)
    {
        console.log("false");
        return false;
    }
    else
    {
        let digits = String(num).split("").map((num)=>{
            return Number(num)
        });
        num = 0;
        for (let i = 0; i < digits.length; i++) 
        {
            num += Math.pow(digits[i], 2); 
        }
        isHappy(num);
    }
}
console.log(isHappy(159));