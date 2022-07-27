function findLongestArr(array)
{
    let max = array[0].length;
    let index = 0;
    for (let i = 0; i < array.length; i++) 
    {
        if(array[i].length > max)
        {
            max = array[i].length;
            index = i;
        }
    }
    return index;
}
function longestRun(numbers)
{
    let current = 0;
    let chunks = [[]];
    for (let i = 0; i < numbers.length; i++) 
    {
        if(Math.abs(numbers[i+1] - numbers[i]) == 1)
        {
            chunks[current].push(numbers[i]);
        }
        else
        {
            chunks[current].push(numbers[i]);
            chunks.push([]);
            current++;
        }
    }
    let result = findLongestArr(chunks);
    return "Longest run is " + chunks[result] + " with length of " + chunks[result].length;
    
}
console.log(longestRun([0,1,2,5,6,7,10,9,8]));

