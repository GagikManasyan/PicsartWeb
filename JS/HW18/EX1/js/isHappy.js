function isHappy(num)
{
    if(num == 1)
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
        let new_number = 0;
        if(num / 10 < 1)
        {
            new_number += Math.pow(num, 2);
        }
        else
        {
            let digits = String(num).split("").map((num)=>{
                return Number(num)
            })
            for (let i = 0; i < digits.length; i++) 
            {
                new_number += Math.pow(digits[i], 2); 
            }
        }
        isHappy(new_number);
    }
    
    
}
console.log(isHappy(19));