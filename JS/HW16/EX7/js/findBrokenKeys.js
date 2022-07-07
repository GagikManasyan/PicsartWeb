function findBrokenKeys(phrase,typed)
{
    let corr_chars = [];
    for (let i = 0; i < typed.length; i++) 
    {
        if(typed[i] != phrase[i] && corr_chars.includes(phrase[i]) == false)
        {
            corr_chars.push(phrase[i]);
        }
        

        
    }
    return corr_chars;
}
function main ()
{
    console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
    console.log(findBrokenKeys("starry night", "starrq light"));
    console.log(findBrokenKeys("beethoven", "affthoif5"));   

    
}
main();


