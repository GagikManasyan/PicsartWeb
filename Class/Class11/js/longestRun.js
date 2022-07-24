
function longestRun(numbers)
{
    let result = 0;
    let c = 0;
    
    for (let i = 0; i < numbers.length; i++) {

        if (i > 0 && numbers[i] == numbers[i - 1] + 1)
        {
            c++;
        }
        else
        {
            c = 1;
        }
        result = Math.max(result, c);
    }
    return result;
    
}
console.log(longestRun([1, 2, 3, 5, 6, 7, 8, 9, 4, 8, 9]));

/// 3